"use client"
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper, Grid, IconButton, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import Datatable from "../mui-datatable/Datatable";
import AddRow from "./AddRow";
import UpdateModule from "./UpdateModule";
import { RootState } from '../../redux/store';
import { deleteRow } from '../../features/tableSlice';
import { MUIDataTableOptions } from 'mui-datatables';


interface RowData {
  id: number;
  name: string;
  email: string;
}

interface MUIDataTableMeta {
  rowData: any[];
}

const TableComponent: React.FC = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);
  const [updateId, setUpdateId] = useState<number | undefined>();
  const [campURLsUpdate, setCampURLsUpdate] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [showInput, setShowInput] = useState<boolean>(false);

  const rows = useSelector((state: RootState) => state.table.rows);
  const dispatch = useDispatch();
  const handleOpen = (rowData: any[]) => {
    setOpen(true);
    setUpdateId(rowData[0]);
    setCampURLsUpdate(rowData);
  };

  const handleDelete = (rowData: any[]) => {
    const rowId = rowData[0];
    dispatch(deleteRow({ id: rowId }));
  };

  const handleClose = () => setOpen(false);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (value: number) => {
    setRowsPerPage(value);
    setPage(0);
  };

  const renderActionCell = (value: any, tableMeta: MUIDataTableMeta) => (
    <div>
      <IconButton onClick={() => handleOpen(tableMeta.rowData)}>
        <EditIcon />
      </IconButton>
      <IconButton onClick={() => handleDelete(tableMeta.rowData)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );

  const options: MUIDataTableOptions = {
    selectableRows: "none",
    filter: true,
    print: false,
    download: false,
    pagination: true,
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15],
    page: 0,
    onChangePage: handlePageChange,
    onChangeRowsPerPage: handleRowsPerPageChange,
  };
  const columns = [
    {
      name: "id",
      label: "id",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "donor",
      label: "donor",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "panels",
      label: "panels",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "barcode",
      label: "barcode",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "source",
      label: "source",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "date",
      label: "date",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "amount",
      label: "amount",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "observedBy",
      label: "observedBy",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "status",
      label: "status",
      options: {
        filter: true,
        sort: false,
      },
    },
    {
      name: "actions",
      label: "Actions",
      options: {
        customBodyRender: (value: any, tableMeta: any) =>
          renderActionCell(value, tableMeta),
      },
    },
  ];


  return (
    <Paper>
      {showInput && <AddRow setShowInput={setShowInput} />}
      <Grid style={{ marginBottom: "100px" }}>
        <Datatable
          title="Work Order"
          data={rows}
          columns={columns}
          options={options}
          setShowInput={setShowInput}
          showInput={showInput}
        />
      </Grid>
      <Modal open={open} onClose={handleClose}>
        <UpdateModule
          handleClose={handleClose}
          updateId={updateId}
          campURLsUpdate={campURLsUpdate}
        />
      </Modal>
    </Paper>
  );
};

export default TableComponent;
