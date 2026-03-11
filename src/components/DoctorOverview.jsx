import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllDoctors } from '../features/doctorSlice';
import { selectAllAppointments } from '../features/appointmentsSlice';
import {
  DoctorGrid, DoctorCard, DoctorAvatar,
  DoctorInfo, DoctorName, DoctorSpec,
  DoctorSummary, Highlight, PageTitle,
  ClickHint, StatsRow, StatPill,
} from '../styles/DoctorOverview.styles';

function DoctorOverview({ onDoctorClick }) {
  const doctors      = useSelector(selectAllDoctors);
  const appointments = useSelector(selectAllAppointments);

  return (
    <div>
      <PageTitle>👨‍⚕️ Doctor Overview</PageTitle>
      <DoctorGrid>
        {doctors.map(doc => {

          const docAppointments = appointments.filter(a => a.doctorName === doc.name);
          const upcoming  = docAppointments.filter(a => a.status !== 'Completed').length;
          const pending   = docAppointments.filter(a => a.status === 'Pending').length;
          const confirmed = docAppointments.filter(a => a.status === 'Confirmed').length;
          const completed = docAppointments.filter(a => a.status === 'Completed').length;

          return (
            <DoctorCard key={doc.id} onClick={() => onDoctorClick(doc)}>
              <DoctorAvatar>{doc.avatar}</DoctorAvatar>
              <DoctorInfo>
                <DoctorName>{doc.name}</DoctorName>
                <DoctorSpec>{doc.specialty}</DoctorSpec>
                <DoctorSummary>
                  {doc.name.split(' ').slice(-1)[0]} has{' '}
                  <Highlight>{upcoming}</Highlight>{' '}
                  upcoming appointment{upcoming !== 1 ? 's' : ''}.
                </DoctorSummary>

                {/* Status Pills */}
                <StatsRow>
                  <StatPill $color="#f59e0b" $bg="#fef3c7">
                    ⏳ {pending} Pending
                  </StatPill>
                  <StatPill $color="#10b981" $bg="#d1fae5">
                    ✅ {confirmed} Confirmed
                  </StatPill>
                  <StatPill $color="#3b82f6" $bg="#dbeafe">
                    🏁 {completed} Completed
                  </StatPill>
                </StatsRow>

                <ClickHint>View patients →</ClickHint>
              </DoctorInfo>
            </DoctorCard>
          );
        })}
      </DoctorGrid>
    </div>
  );
}

export default DoctorOverview;