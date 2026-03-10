import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllDoctors, selectActiveDoctor, setActiveDoctor } from '../features/doctorSlice';
import { selectAllAppointments } from '../features/appointmentsSlice';
import {
  Wrapper, PageTitle, DoctorGrid, DoctorCard, DoctorTop,
  Avatar, DoctorInfo, DoctorName, Specialty, StatsRow,
  StatBox, StatNumber, StatLabel, SectionTitle,
  AppointmentMini, MiniLeft, MiniPatient, MiniReason,
  MiniRight, MiniDate, StatusDot, EmptyState,
} from '../styles/DoctorOverview.styles';

function DoctorOverview() {
  const dispatch        = useDispatch();
  const doctors         = useSelector(selectAllDoctors);
  const allAppointments = useSelector(selectAllAppointments);
  const activeDoctorId  = useSelector(selectActiveDoctor);

  const getAppts = (name) => allAppointments.filter(a => a.doctorName === name);

  const activeDoctor = doctors.find(d => d.id === (activeDoctorId || doctors[0]?.id)) || doctors[0];
  const activeAppts  = activeDoctor ? getAppts(activeDoctor.name) : [];

  return (
    <Wrapper>
      <PageTitle>👨‍⚕️ Doctor Overview</PageTitle>
      <DoctorGrid>
        {doctors.map(doc => {
          const appts     = getAppts(doc.name);
          const pending   = appts.filter(a => a.status === 'Pending').length;
          const confirmed = appts.filter(a => a.status === 'Confirmed').length;
          const isActive  = (activeDoctorId || doctors[0]?.id) === doc.id;

          return (
            <DoctorCard key={doc.id} $active={isActive} onClick={() => dispatch(setActiveDoctor(doc.id))}>
              <DoctorTop>
                <Avatar>{doc.avatar}</Avatar>
                <DoctorInfo>
                  <DoctorName>{doc.name}</DoctorName>
                  <Specialty>{doc.specialty}</Specialty>
                </DoctorInfo>
              </DoctorTop>
              <StatsRow>
                <StatBox><StatNumber>{appts.length}</StatNumber><StatLabel>Total</StatLabel></StatBox>
                <StatBox><StatNumber $color="#fb923c">{pending}</StatNumber><StatLabel>Pending</StatLabel></StatBox>
                <StatBox><StatNumber $color="#38bdf8">{confirmed}</StatNumber><StatLabel>Confirmed</StatLabel></StatBox>
              </StatsRow>
            </DoctorCard>
          );
        })}
      </DoctorGrid>

      {activeDoctor && (
        <>
          <SectionTitle>{activeDoctor.name}'s Appointments ({activeAppts.length})</SectionTitle>
          {activeAppts.length === 0 ? (
            <EmptyState>No appointments assigned yet.</EmptyState>
          ) : (
            activeAppts.map(appt => (
              <AppointmentMini key={appt.id}>
                <MiniLeft>
                  <MiniPatient>{appt.patientName}</MiniPatient>
                  <MiniReason>{appt.reason || 'No reason given'}</MiniReason>
                </MiniLeft>
                <MiniRight>
                  <MiniDate>{appt.date} · {appt.time}</MiniDate>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <StatusDot $status={appt.status} />
                    <span style={{ fontSize: '0.78rem', color: '#64748b' }}>{appt.status}</span>
                  </div>
                </MiniRight>
              </AppointmentMini>
            ))
          )}
        </>
      )}
    </Wrapper>
  );
}

export default DoctorOverview;