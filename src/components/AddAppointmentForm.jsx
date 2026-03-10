import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAppointment, editAppointment } from '../features/appointmentsSlice';
import { selectAllDoctors } from '../features/doctorSlice';
import {
  Overlay, Modal, ModalHeader, ModalTitle, CloseBtn,
  FormGrid, FormGroup, Label, Input, Select, SubmitBtn, ErrorMsg,
} from '../styles/AddAppointmentForm.styles';

function AddAppointmentForm({ onClose, existing }) {
  const dispatch = useDispatch();
  const doctors  = useSelector(selectAllDoctors);

  const [form, setForm] = useState({
    patientName: existing?.patientName || '',
    doctorName:  existing?.doctorName  || '',
    date:        existing?.date        || '',
    time:        existing?.time        || '',
    status:      existing?.status      || 'Pending',
    reason:      existing?.reason      || '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors(prev => ({ ...prev, [e.target.name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.patientName.trim()) errs.patientName = 'Patient name is required';
    if (!form.doctorName)         errs.doctorName  = 'Please select a doctor';
    if (!form.date)               errs.date        = 'Date is required';
    if (!form.time.trim())        errs.time        = 'Time is required';
    return errs;
  };

  const handleSubmit = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    if (existing) {
      dispatch(editAppointment({ ...existing, ...form }));
    } else {
      dispatch(addAppointment({ id: 'a' + Date.now(), ...form }));
    }
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>{existing ? '✏️ Edit Appointment' : '➕ New Appointment'}</ModalTitle>
          <CloseBtn onClick={onClose}>✕</CloseBtn>
        </ModalHeader>
        <FormGrid>
          <FormGroup $full>
            <Label>Patient Name</Label>
            <Input name="patientName" placeholder="e.g. Ananya Krishnan" value={form.patientName} onChange={handleChange} />
            {errors.patientName && <ErrorMsg>{errors.patientName}</ErrorMsg>}
          </FormGroup>
          <FormGroup $full>
            <Label>Doctor</Label>
            <Select name="doctorName" value={form.doctorName} onChange={handleChange}>
              <option value="">Select doctor...</option>
              {doctors.map(d => (
                <option key={d.id} value={d.name}>{d.name} — {d.specialty}</option>
              ))}
            </Select>
            {errors.doctorName && <ErrorMsg>{errors.doctorName}</ErrorMsg>}
          </FormGroup>
          <FormGroup>
            <Label>Date</Label>
            <Input type="date" name="date" value={form.date} onChange={handleChange} />
            {errors.date && <ErrorMsg>{errors.date}</ErrorMsg>}
          </FormGroup>
          <FormGroup>
            <Label>Time</Label>
            <Input name="time" placeholder="e.g. 10:00 AM" value={form.time} onChange={handleChange} />
            {errors.time && <ErrorMsg>{errors.time}</ErrorMsg>}
          </FormGroup>
          <FormGroup $full>
            <Label>Reason</Label>
            <Input name="reason" placeholder="e.g. General Checkup" value={form.reason} onChange={handleChange} />
          </FormGroup>
          <FormGroup $full>
            <Label>Status</Label>
            <Select name="status" value={form.status} onChange={handleChange}>
              <option value="Pending">Pending</option>
              <option value="Confirmed">Confirmed</option>
              <option value="Completed">Completed</option>
            </Select>
          </FormGroup>
        </FormGrid>
        <SubmitBtn onClick={handleSubmit}>
          {existing ? 'Save Changes' : 'Add Appointment'}
        </SubmitBtn>
      </Modal>
    </Overlay>
  );
}

export default AddAppointmentForm;