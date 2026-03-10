import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import StatusBar from './components/StatusBar';
import AppointmentList from './components/AppointmentList';
import { GlobalStyle, AppShell, Content } from './styles/App.styles';
import { selectAllAppointments } from './features/appointmentsSlice';
import { selectAllDoctors } from './features/doctorSlice';
import styled from 'styled-components';

const DoctorGrid    = styled.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; margin-top: 8px;`;
const DoctorCard    = styled.div`background: #ffffff; border-radius: 14px; padding: 20px 24px; border: 1px solid #e2e8f0; box-shadow: 0 1px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 16px;`;
const DoctorAvatar  = styled.div`font-size: 2rem; width: 52px; height: 52px; background: #eef2ff; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;`;
const DoctorInfo    = styled.div``;
const DoctorName    = styled.div`font-family: 'Syne', sans-serif; font-weight: 800; font-size: 0.95rem; color: #0f172a; margin-bottom: 4px;`;
const DoctorSpec    = styled.div`font-family: 'DM Sans', sans-serif; font-size: 0.82rem; color: #64748b; margin-bottom: 6px;`;
const DoctorSummary = styled.div`font-family: 'DM Sans', sans-serif; font-size: 0.88rem; color: #0f172a;`;
const Highlight     = styled.span`color: #6366f1; font-weight: 700;`;
const PageTitle     = styled.h2`font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px;`;

function DoctorOverview() {
  const doctors      = useSelector(selectAllDoctors);
  const appointments = useSelector(selectAllAppointments);

  return (
    <div>
      <PageTitle>👨‍⚕️ Doctor Overview</PageTitle>
      <DoctorGrid>
        {doctors.map(doc => {
          const upcoming = appointments.filter(
            a => a.doctorName === doc.name && a.status !== 'Completed'
          ).length;

          return (
            <DoctorCard key={doc.id}>
              <DoctorAvatar>{doc.avatar}</DoctorAvatar>
              <DoctorInfo>
                <DoctorName>{doc.name}</DoctorName>
                <DoctorSpec>{doc.specialty}</DoctorSpec>
                <DoctorSummary>
                  {doc.name.split(' ').slice(-1)[0]} has <Highlight>{upcoming}</Highlight> upcoming appointment{upcoming !== 1 ? 's' : ''}.
                </DoctorSummary>
              </DoctorInfo>
            </DoctorCard>
          );
        })}
      </DoctorGrid>
    </div>
  );
}

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