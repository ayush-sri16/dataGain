import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: [
    { title: "DSM", start: "2023-07-02" },
    // Add other initial events here...
  ],
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
  },
});

export const { addEvent } = calendarSlice.actions;

export default calendarSlice.reducer;
