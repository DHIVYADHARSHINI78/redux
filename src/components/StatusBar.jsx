import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllAppointments } from '../features/appointmentsSlice';
import { Grid, Card, CardLabel, CardNumber } from '../styles/StatsBar.styles';

function StatusBar() {
  const appointments = useSelector(selectAllAppointments); 

  const total     = appointments.length;
  const pending   = appointments.filter(a => a.status === 'Pending').length;
  const confirmed = appointments.filter(a => a.status === 'Confirmed').length;
  const completed = appointments.filter(a => a.status === 'Completed').length;

  return (
    <Grid>
      <Card $color="#6366f1">
        <CardLabel>Total Patients</CardLabel>
        <CardNumber $color="#6366f1">{total}</CardNumber>
      </Card>
      <Card $color="#f59e0b">
        <CardLabel>Pending</CardLabel>
        <CardNumber $color="#f59e0b">{pending}</CardNumber>
      </Card>
      <Card $color="#10b981">
        <CardLabel>Confirmed</CardLabel>
        <CardNumber $color="#10b981">{confirmed}</CardNumber>
      </Card>
      <Card $color="#3b82f6">
        <CardLabel>Completed</CardLabel>
        <CardNumber $color="#3b82f6">{completed}</CardNumber>
      </Card>
    </Grid>
  );
}

export default StatusBar;