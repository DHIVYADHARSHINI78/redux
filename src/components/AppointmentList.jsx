import React, { useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import { selectAllAppointments, deleteAppointment, updateStatus } from '../features/appointmentsSlice';
import AddAppointmentForm from './AddAppointmentForm';
import {
  Wrapper, TopBar, PageTitle, FilterRow, FilterBtn, AddBtn,
  TableWrapper, Table, Thead, Th, Tr, Td,
  PatientName, DoctorName, DateTimeBox, DateText, TimeText,
  StatusSelect, ActionRow, IconBtn, EmptyState,
} from '../styles/AppointmentList.styles';

const FILTERS = ['All', 'Pending', 'Confirmed', 'Completed'];

function AppointmentList() {
  const dispatch     = useDispatch();
  const appointments = useSelector(selectAllAppointments);

  const [filter, setFilter]         = useState('All');
  const [showForm, setShowForm]     = useState(false);
  const [editTarget, setEditTarget] = useState(null);

  const filtered = filter === 'All'
    ? appointments
    : appointments.filter(a => a.status === filter);

  
  const handleDelete = (id, name) => {
    if (window.confirm(`Delete appointment for ${name}?`)) {
      dispatch(deleteAppointment(id));
    }
  };

 
  const handleStatusChange = (id, newStatus) => {
    dispatch(updateStatus({ id, status: newStatus }));
  };

  const handleEdit  = (appt) => { setEditTarget(appt); setShowForm(true); };
  const handleClose = ()     => { setShowForm(false); setEditTarget(null); };

  return (
    <Wrapper>
      <TopBar>
        <PageTitle>Appointments</PageTitle>
        <FilterRow>
          {FILTERS.map(f => (
            <FilterBtn key={f} $active={filter === f} onClick={() => setFilter(f)}>
              {f}{f !== 'All' && ` (${appointments.filter(a => a.status === f).length})`}
            </FilterBtn>
          ))}
        </FilterRow>
        <AddBtn onClick={() => { setEditTarget(null); setShowForm(true); }}>＋ Add Appointment</AddBtn>
      </TopBar>

      {filtered.length === 0 ? (
        <EmptyState>
          <div className="icon">🗓️</div>
          No appointments found for "{filter}"
        </EmptyState>
      ) : (
        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>#</Th><Th>Patient</Th><Th>Doctor</Th>
                <Th>Date & Time</Th><Th>Reason</Th><Th>Status</Th><Th>Actions</Th>
              </tr>
            </Thead>
            <tbody>
              {filtered.map((appt, i) => (
                <Tr key={appt.id}>
                  <Td style={{ color: '#94a3b8', fontWeight: 600 }}>{i + 1}</Td>
                  <Td><PatientName>{appt.patientName}</PatientName></Td>
                  <Td><DoctorName>{appt.doctorName}</DoctorName></Td>
                  <Td>
                    <DateTimeBox>
                      <DateText>{appt.date}</DateText>
                      <TimeText>{appt.time}</TimeText>
                    </DateTimeBox>
                  </Td>
                  <Td>{appt.reason || '—'}</Td>
                  <Td>
                    <StatusSelect value={appt.status} onChange={e => handleStatusChange(appt.id, e.target.value)}>
                      <option value="Pending">Pending</option>
                      <option value="Confirmed">Confirmed</option>
                      <option value="Completed">Completed</option>
                    </StatusSelect>
                  </Td>
                  <Td>
                    <ActionRow>
                      <IconBtn onClick={() => handleEdit(appt)}>✏️</IconBtn>
                      <IconBtn $variant="delete" onClick={() => handleDelete(appt.id, appt.patientName)}>🗑️</IconBtn>
                    </ActionRow>
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>
      )}

      {showForm && <AddAppointmentForm onClose={handleClose} existing={editTarget} />}
    </Wrapper>
  );
}

export default AppointmentList;