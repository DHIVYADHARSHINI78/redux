import { configureStore } from '@reduxjs/toolkit';
import appointmentsReducer from '../features/appointmentsSlice';
import doctorReducer from '../features/doctorSlice';

const loadState = () => {
  try {
    const saved = localStorage.getItem('meditrack');
    return saved ? JSON.parse(saved) : undefined;
  } catch { return undefined; }
};

const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    doctor: doctorReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  try {
    localStorage.setItem('meditrack', JSON.stringify(store.getState()));
  } catch {}
});

export default store;