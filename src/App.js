import React, { useState, lazy, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux'; 
import { selectCurrentDoctor, clearSelectedDoctor, setSelectedDoctor } from './features/doctorSlice'; 
import Navbar    from './components/Navbar';
import StatusBar from './components/StatusBar';
import { GlobalStyle, AppShell, Content } from './styles/App.styles';


const AppointmentList = lazy(() => import('./components/AppointmentList'));
const DoctorOverview  = lazy(() => import('./components/DoctorOverview'));
const Doctordetail    = lazy(() => import('./components/Doctordetail'));

function App() {
  const dispatch = useDispatch();
  
  const selectedDoctor = useSelector(selectCurrentDoctor);
  const [activePage, setActivePage] = useState('appointments');


  const handleDoctorClick = (doctor) => {
    dispatch(setSelectedDoctor(doctor)); 
    setActivePage('Doctordetail');
  };


  const handleBack = () => {         
    dispatch(clearSelectedDoctor()); 
    setActivePage('doctors');
  };

  return (
    <>
      <GlobalStyle />
      <AppShell>
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <Content>
          <StatusBar />
          <Suspense fallback={<div style={{ textAlign: 'center', padding: '60px' }}>Loading...</div>}>
            
         
            {activePage === 'appointments' && <AppointmentList />}
            
            {activePage === 'doctors' && (
              <DoctorOverview onDoctorClick={handleDoctorClick} />
            )}
            
            {activePage === 'Doctordetail' && (
              <Doctordetail selectedDoctor={selectedDoctor} onBack={handleBack} />
            )}
            
          </Suspense>
        </Content>
      </AppShell>
    </>
  );
}

export default App;