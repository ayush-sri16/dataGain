import React, { useRef } from "react";
import {
    TextField,
    Button,
    Box,
    Typography,
} from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { updateRow } from '../../features/tableSlice'; // Ensure this is correctly imported

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

const UpdateModule = ({ handleClose, updateId, campURLsUpdate }) => {
    console.log(campURLsUpdate,"campURLsUpdatecampURLsUpdate")
    const dispatch = useDispatch();

    const donorRef = useRef(null);
    const panelsRef = useRef(null);
    const barcodeRef = useRef(null);
    const sourceRef = useRef(null);
    const dateRef = useRef(null);
    const amountRef = useRef(null);
    const observedByRef = useRef(null);
    const statusRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            id:updateId,
            donor: donorRef.current.value,
            panels: panelsRef.current.value,
            barcode: barcodeRef.current.value,
            source: sourceRef.current.value,
            date: dateRef.current.value,
            amount: amountRef.current.value,
            observedBy: observedByRef.current.value,
            status: statusRef.current.value
        };
        console.log(formData, "Update Form Data");
        try {
            dispatch(updateRow(formData));
            handleClose();
            toast.success("Updated Successfully!", {
                position: "top-center",
                autoClose: 3000,
            });
        } catch (error) {
            toast.error("Something went wrong!", {
                position: "top-center",
                autoClose: 3000,
            });
        }
    };

    return (
        <div>
            <Box sx={style}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h6">
                        Updating CampUrl with ID- {updateId}
                    </Typography>
                    <Button color="error" onClick={handleClose}>
                        <CancelOutlinedIcon />
                    </Button>
                </div>

                <form onSubmit={handleSubmit} encType="multipart/form-data" style={{
                    backgroundColor: "#ececec",
                    padding: "20px",
                    margin: "5px",
                    display: "flex",
                    flexDirection: "column",
                }}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "20px",
                        }}
                    >
                        <TextField
                            label="Donor"
                            defaultValue={campURLsUpdate[1]}
                            inputRef={donorRef}
                            sx={{ mb: 2, width: "100%" }}

                        />
                        <TextField
                            label="Panels"
                            defaultValue={campURLsUpdate[2]}
                            inputRef={panelsRef}
                            sx={{ mb: 2, width: "100%" }}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "20px",
                        }}
                    >
                        <TextField
                            label="Barcode"
                            defaultValue={campURLsUpdate[3]}
                            inputRef={barcodeRef}
                            sx={{ mb: 2, width: "100%" }}
                        />
                        <TextField
                            label="Source"
                            defaultValue={campURLsUpdate[4]}
                            inputRef={sourceRef}
                            sx={{ mb: 2, width: "100%" }}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "20px",
                        }}
                    >
                        <TextField
                            label="Date"
                            type="date"
                            defaultValue={campURLsUpdate[5]}
                            inputRef={dateRef}
                            sx={{ mb: 2, width: "100%" }}
                            InputLabelProps={{ shrink: true }}
                        />
                        <TextField
                            label="Amount"
                            type="number"
                            defaultValue={campURLsUpdate[6]}
                            inputRef={amountRef}
                            sx={{ mb: 2, width: "100%" }}
                        />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            marginBottom: "20px",
                        }}
                    >
                        <TextField
                            label="Observed By"
                            defaultValue={campURLsUpdate[7]}
                            inputRef={observedByRef}
                            sx={{ mb: 2, width: "100%" }}
                        />
                        <TextField
                            label="Status"
                            defaultValue={campURLsUpdate[8]}
                            inputRef={statusRef}
                            sx={{ mb: 2, width: "100%" }}
                        />
                    </div>

                    <Button variant="contained" color="primary" type="submit" sx={{ mt: 2, width: "100%" }}>
                        Submit
                    </Button>
                </form>
            </Box>
        </div>
    );
};

export default UpdateModule;
