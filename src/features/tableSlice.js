import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rows: [
        { id: 1, donor: 'John Doe', panels: 'john@example.com', barcode:"barcode",source:"source" },
        { id: 2, donor: 'Jane Doe', panels: 'jane@example.com', barcode:"barcode",source:"source" },
    ],
};

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        addRow: (state, action) => {
            console.log(action.payload,"payload")
            state.rows?.push(action.payload);
        },
        deleteRow: (state, action) => {
            state.rows = state.rows.filter(row => row.id !== action.payload.id);
        },
        updateRow: (state, action) => {
            console.log(action.payload,"action.payload")
            const index = state.rows.findIndex(row => row.id === action.payload.id);
            if (index !== -1) {
                state.rows[index] = action.payload;
            }
        },
    },
});

export const { addRow, deleteRow, updateRow } = tableSlice.actions;

export default tableSlice.reducer;