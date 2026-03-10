import React, { useState } from 'react';
import Navbar from './components/Navbar';
import StatusBar from './components/StatusBar';
import AppointmentList from './components/AppointmentList';
import DoctorOverview from './components/DoctorOverview'; 
import { GlobalStyle, AppShell, Content } from './styles/App.styles';

function App() {
  const [activePage, setActivePage] = useState('appointments');

  return (
    <>
      <GlobalStyle />
      <AppShell>
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <Content>
          <StatusBar />
          {activePage === 'appointments' && <AppointmentList />}
          {activePage === 'doctors'      && <DoctorOverview />}
        </Content>
      </AppShell>
    </>
  );
}

export default App;