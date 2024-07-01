import React from 'react';
import MUIDataTable, { MUIDataTableColumn, MUIDataTableOptions } from 'mui-datatables';
import { Button, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


interface DatatableProps {
  title: string;
  data: any[][];
  columns: MUIDataTableColumn[];
  options: MUIDataTableOptions;
  showInput: boolean;
  setShowInput: (show: boolean) => void;
}

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#16c2b0',
          '&:hover': {
            backgroundColor: '#13a89a',
          },
        },
      },
    },
  },
});

const Datatable: React.FC<DatatableProps> = ({ title, data, columns, options, setShowInput, showInput }) => {
  console.log(!showInput, "hiiiii")
  return (
    <ThemeProvider theme={theme}>

      <MUIDataTable
        title={
          <div
            style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Typography variant='h5' style={{ margin: "0px", marginRight: '20px', fontWeight: 'bold' }}>{title}</Typography>
            <Button
              variant="contained"
              onClick={() => setShowInput(!showInput)}
            >
              {showInput ? "Hide" : "Add"} {title}
            </Button>
          </div>
        }
        data={data}
        columns={columns}
        options={options}
      />
    </ThemeProvider>

  );
};

export default Datatable;
