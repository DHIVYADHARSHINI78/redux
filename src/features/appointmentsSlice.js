import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [
    { id: 'a1', patientName: 'Ananya Krishnan', doctorName: 'Dr. Meera Nair',   date: '2025-07-15', time: '10:00 AM', status: 'Confirmed', reason: 'General Checkup' },

  ],
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment:    (state, action) => { state.list.push(action.payload); },
    updateStatus:      (state, action) => {
      const appt = state.list.find(a => a.id === action.payload.id);
      if (appt) appt.status = action.payload.status;
    },
    editAppointment:   (state, action) => {
      const index = state.list.findIndex(a => a.id === action.payload.id);
      if (index !== -1) state.list[index] = action.payload;
    },
    deleteAppointment: (state, action) => {
      state.list = state.list.filter(a => a.id !== action.payload);
    },
  },
});

export const { addAppointment, updateStatus, editAppointment, deleteAppointment } = appointmentsSlice.actions;

export const selectAllAppointments = (state) => state.appointments.list;
export const selectByStatus = (status) => (state) => state.appointments.list.filter(a => a.status === status);
export const selectByDoctor = (name)   => (state) => state.appointments.list.filter(a => a.doctorName === name);

export default appointmentsSlice.reducer;