"use client"
import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import { addRow } from '../../features/tableSlice';

const AddRow = ({ setShowInput }) => {
    const dispatch = useDispatch();
    const [donor, setDonor] = useState('');
    const [panels, setPanels] = useState('');
    const [barcode, setBarcode] = useState('');
    const [source, setSource] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    const [observedBy, setObservedBy] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        function generateSixDigitID() {
            return Math.floor(100000 + Math.random() * 900000);
        }
        const id = generateSixDigitID()
        e.preventDefault();
        setShowInput(false);
        const formData = {
            id,
            donor,
            panels,
            barcode,
            source,
            date,
            amount,
            observedBy,
            status
        };
        dispatch(addRow(formData))
    };

    return (
        <>
            <Typography variant="h4" sx={{ paddingLeft: '20px' }}>
                Add Work Orders
            </Typography>
            <form onSubmit={handleSubmit} encType="multipart/form-data" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <TextField
                        label="Donor"
                        value={donor}
                        onChange={(e) => setDonor(e.target.value)}
                        required
                        sx={{ marginBottom: '10px', width: '48%' }}
                    />
                    <TextField
                        label="Panels"
                        value={panels}
                        onChange={(e) => setPanels(e.target.value)}
                        required
                        sx={{ marginBottom: '10px', width: '48%' }}
                    />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <TextField
                        label="Barcode"
                        value={barcode}
                        onChange={(e) => setBarcode(e.target.value)}
                        required
                        sx={{ marginBottom: '10px', width: '48%' }}
                    />
                    <TextField
                        label="Source"
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                        required
                        sx={{ marginBottom: '10px', width: '48%' }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <TextField
                        type="date"
                        label="Date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        required
                        sx={{ marginBottom: '10px', width: '48%' }}
                    />
                    <TextField
                        label="Amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        required
                        sx={{ marginBottom: '10px', width: '48%' }}
                    />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <TextField
                        label="Observed by"
                        value={observedBy}
                        onChange={(e) => setObservedBy(e.target.value)}
                        required
                        sx={{ marginBottom: '10px', width: '48%' }}
                    />
                    <TextField
                        label="Status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                        sx={{ marginBottom: '10px', width: '48%' }}
                    />
                </div>

                <Button
                    type="submit"
                    variant="contained"
                    color="success"
                    sx={{ alignSelf: 'center', width: '30%' }}
                >
                    Add
                </Button>
            </form>
        </>
    );
};

export default AddRow;
