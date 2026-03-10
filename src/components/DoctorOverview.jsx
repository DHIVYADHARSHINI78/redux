import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllDoctors } from '../features/doctorSlice';
import { selectAllAppointments } from '../features/appointmentsSlice';
import {
  DoctorGrid, DoctorCard, DoctorAvatar,
  DoctorInfo, DoctorName, DoctorSpec,
  DoctorSummary, Highlight, PageTitle,
} from '../styles/DoctorOverview.styles';

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
                  {doc.name.split(' ').slice(-1)[0]} has{' '}
                  <Highlight>{upcoming}</Highlight>{' '}
                  upcoming appointment{upcoming !== 1 ? 's' : ''}.
                </DoctorSummary>
              </DoctorInfo>
            </DoctorCard>
          );
        })}
      </DoctorGrid>
    </div>
  );
}

export default DoctorOverview;
