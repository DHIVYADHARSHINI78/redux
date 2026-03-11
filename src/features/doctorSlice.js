import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  doctors: [
    { id: 'd1', name: 'Dr. Meera Nair',   specialty: 'General Physician', avatar: '👩‍⚕️' },
    { id: 'd2', name: 'Dr. Arjun Reddy',  specialty: 'Pediatrician',      avatar: '👨‍⚕️' },
    { id: 'd3', name: 'Dr. Suresh Kumar', specialty: 'Cardiologist',       avatar: '👨‍⚕️' },
  ],
  selectedDoctor: null, // Initial-ah entha doctor-um select aagala
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
   
    setSelectedDoctor: (state, action) => {
      state.selectedDoctor = action.payload; 
    },
    
    clearSelectedDoctor: (state) => {
      state.selectedDoctor = null;
    }
  }
});


export const { setSelectedDoctor, clearSelectedDoctor } = doctorSlice.actions;


export const selectAllDoctors = (state) => state.doctor.doctors;
export const selectCurrentDoctor = (state) => state.doctor.selectedDoctor;

export default doctorSlice.reducer;