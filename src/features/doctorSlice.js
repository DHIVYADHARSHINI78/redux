import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors: [
    { id: 'd1', name: 'Dr. Meera Nair',   specialty: 'General Physician', avatar: '👩‍⚕️' },
    { id: 'd2', name: 'Dr. Arjun Reddy',  specialty: 'Pediatrician',      avatar: '👨‍⚕️' },
    { id: 'd3', name: 'Dr. Suresh Kumar', specialty: 'Cardiologist',       avatar: '🫀'  },
  ],
  activeDoctor: null,
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    setActiveDoctor: (state, action) => { state.activeDoctor = action.payload; },
  },
});

export const { setActiveDoctor } = doctorSlice.actions;
export const selectAllDoctors   = (state) => state.doctor.doctors;
export const selectActiveDoctor = (state) => state.doctor.activeDoctor;

export default doctorSlice.reducer;