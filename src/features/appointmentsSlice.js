
import { createSlice } from '@reduxjs/toolkit';
import { encrypt, decrypt } from '../utils/encryption';

const loadFromStorage = () => {
  try {
    const saved = localStorage.getItem('meditrack_appointments');
    if (!saved) return null;
  
    const decryptedData = decrypt(saved);
    return Array.isArray(decryptedData) ? decryptedData : null;
  } catch (error) {
    console.error('Failed to load/decrypt storage:', error);
    return null;
  }
};

const saveToStorage = (list) => {
  try {
  
    const cipherText = encrypt(list);
    localStorage.setItem('meditrack_appointments', cipherText);
  } catch (error) {
    console.error('localStorage save failed:', error);
  }
};


const defaultList = [
  {
    id: 'a1',
    patientName: 'Ananya Krishnan',
    doctorName: 'Dr. Meera Nair',
    date: '2025-07-15',
    time: '10:00 AM',
    status: 'Confirmed',
    reason: 'General Checkup',
  },
];

const initialState = {

  list: loadFromStorage() || defaultList,
};

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      
      state.list.push(action.payload);
      saveToStorage(state.list);
    },
    editAppointment: (state, action) => {
      const index = state.list.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
      }
      saveToStorage(state.list);
    },
    updateStatus: (state, action) => {
      const appt = state.list.find(a => a.id === action.payload.id);
      if (appt) {
        appt.status = action.payload.status;
      }
      saveToStorage(state.list);
    },
    deleteAppointment: (state, action) => {
      state.list = state.list.filter(a => a.id !== action.payload);
      saveToStorage(state.list);
    },
  },
});


export const { 
  addAppointment, 
  updateStatus, 
  editAppointment, 
  deleteAppointment 
} = appointmentsSlice.actions;


export const selectAllAppointments = (state) => state.appointments.list;


export const selectByStatus = (status) => (state) => {
  const allAppointments = state.appointments.list;
  return allAppointments.filter(a => a.status === status);
};
export default appointmentsSlice.reducer;