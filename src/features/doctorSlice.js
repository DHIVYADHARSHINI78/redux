import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors: [
    { id: 'd1', name: 'Dr. Meera Nair',   specialty: 'General Physician', avatar: '👩‍⚕️' },
    { id: 'd2', name: 'Dr. Arjun Reddy',  specialty: 'Pediatrician',      avatar: '👨‍⚕️' },
    { id: 'd3', name: 'Dr. Suresh Kumar', specialty: 'Cardiologist',       avatar: '👨‍⚕️' },
  ],
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},   
});

export const selectAllDoctors = (state) => state.doctor.doctors;

export default doctorSlice.reducer;