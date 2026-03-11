import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllAppointments } from '../features/appointmentsSlice';
import {
  Wrapper, PageTitle, Section, SectionTitle,
  PatientTable, PatientTh, PatientTd,
  PatientTr, StatusBadge, BackBtn,
  DoctorHeader, DoctorAvatarBox, DoctorHeaderInfo,
  DoctorHeaderName, DoctorHeaderSpec,
  DoctorHeaderTotal, DoctorHeaderCount, DoctorHeaderCountLabel,
  SummaryGrid, SummaryCard, SummaryIcon,
  SummaryNumber, SummaryLabel,
  
  EmptySettings, EmptyIcon, EmptyText, EmptySubText, EmptyHint,
} from '../styles/Doctordetail.styles';

function Doctordetail({ selectedDoctor, onBack }) {
  console.log(' Doctordetail component loaded!');

  const appointments = useSelector(selectAllAppointments);

  const doctorPatients = selectedDoctor
    ? appointments.filter(a => a.doctorName === selectedDoctor.name)
    : [];

  const docPending   = doctorPatients.filter(a => a.status === 'Pending').length;
  const docConfirmed = doctorPatients.filter(a => a.status === 'Confirmed').length;
  const docCompleted = doctorPatients.filter(a => a.status === 'Completed').length;

 
  if (!selectedDoctor) {
    return (
      <Wrapper>
        <PageTitle>Doctordetail</PageTitle>
        <Section>
          <EmptySettings>
            <EmptyIcon>👨‍⚕️</EmptyIcon>
            <EmptyText>No Doctor Selected</EmptyText>
            <EmptySubText>
              Please go to <strong>Doctor Overview</strong> and 
              click on a doctor card to view their patients.
            </EmptySubText>
            <EmptyHint>Doctor Overview → Click any card → View Patients</EmptyHint>
          </EmptySettings>
        </Section>
      </Wrapper>
    );
  }

  return (
    <Wrapper>

      <BackBtn onClick={onBack}>← Back to Doctors</BackBtn>

 
      <PageTitle>
        {selectedDoctor.avatar} {selectedDoctor.name} — Patients
      </PageTitle>

   
      <Section>
        <SectionTitle>📊 Appointment Summary</SectionTitle>

        <DoctorHeader>
          <DoctorAvatarBox>{selectedDoctor.avatar}</DoctorAvatarBox>
          <DoctorHeaderInfo>
            <DoctorHeaderName>{selectedDoctor.name}</DoctorHeaderName>
            <DoctorHeaderSpec>{selectedDoctor.specialty}</DoctorHeaderSpec>
          </DoctorHeaderInfo>
          <DoctorHeaderTotal>
            <DoctorHeaderCount>{doctorPatients.length}</DoctorHeaderCount>
            <DoctorHeaderCountLabel>Total Patients</DoctorHeaderCountLabel>
          </DoctorHeaderTotal>
        </DoctorHeader>

        <SummaryGrid>
<SummaryGrid>
  {/* Pending Card */}
  <SummaryCard $bg="#fffbeb" $border="#fde68a">
    <SummaryIcon $iconBg="#fef3c7">⏳</SummaryIcon>
    <SummaryNumber $color="#f59e0b">{docPending}</SummaryNumber>
    <SummaryLabel $color="#92400e">Pending Appointments</SummaryLabel>
  </SummaryCard>

  {/* Confirmed Card */}
  <SummaryCard $bg="#f0fdf4" $border="#bbf7d0">
    <SummaryIcon $iconBg="#dcfce7">✅</SummaryIcon>
    <SummaryNumber $color="#10b981">{docConfirmed}</SummaryNumber>
    <SummaryLabel $color="#065f46">Confirmed Appointments</SummaryLabel>
  </SummaryCard>

  {/* Completed Card */}
  <SummaryCard $bg="#eff6ff" $border="#bfdbfe">
    <SummaryIcon $iconBg="#dbeafe">🏁</SummaryIcon>
    <SummaryNumber $color="#3b82f6">{docCompleted}</SummaryNumber>
    <SummaryLabel $color="#1e40af">Completed Appointments</SummaryLabel>
  </SummaryCard>
</SummaryGrid>

        </SummaryGrid>
      </Section>

      <Section>
        <SectionTitle>🧑‍⚕️ Patient List</SectionTitle>

        {doctorPatients.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '40px',
            color: '#94a3b8',
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.95rem',
          }}>
            🗓️ No patients found for {selectedDoctor.name}
          </div>
        ) : (
          <PatientTable>
            <thead>
              <tr>
                <PatientTh>#</PatientTh>
                <PatientTh>Patient</PatientTh>
                <PatientTh>Date</PatientTh>
                <PatientTh>Time</PatientTh>
                <PatientTh>Reason</PatientTh>
                <PatientTh>Status</PatientTh>
              </tr>
            </thead>
            <tbody>
              {doctorPatients.map((appt, i) => (
                <PatientTr key={appt.id}>
                  <PatientTd style={{ color: '#94a3b8', fontWeight: 600 }}>
                    {i + 1}
                  </PatientTd>
                  <PatientTd style={{ fontWeight: 700, color: '#0f172a' }}>
                    {appt.patientName}
                  </PatientTd>
                  <PatientTd>{appt.date}</PatientTd>
                  <PatientTd>{appt.time}</PatientTd>
                  <PatientTd>{appt.reason || '—'}</PatientTd>
                  <PatientTd>
                    <StatusBadge $status={appt.status}>
                      {appt.status}
                    </StatusBadge>
                  </PatientTd>
                </PatientTr>
              ))}
            </tbody>
          </PatientTable>
        )}
      </Section>

    </Wrapper>
  );
}

export default Doctordetail;