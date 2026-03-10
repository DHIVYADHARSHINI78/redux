import React from 'react';
import { useSelector } from 'react-redux';
import { selectByStatus } from '../features/appointmentsSlice';
import { Nav, Brand, Logo, BrandName, NavLinks, NavBtn, Badge } from '../styles/Navbar.styles';

function Navbar({ activePage, setActivePage }) {
  const pending = useSelector(selectByStatus('Pending'));

  return (
    <Nav>
      <Brand>
        <Logo>🏥</Logo>
        <BrandName>Medi<span>Track</span></BrandName>
      </Brand>
      <NavLinks>
        <NavBtn $active={activePage === 'appointments'} onClick={() => setActivePage('appointments')}>
          Appointments
          {pending.length > 0 && <Badge>{pending.length}</Badge>}
        </NavBtn>
        <NavBtn $active={activePage === 'doctors'} onClick={() => setActivePage('doctors')}>
          Doctor Overview
        </NavBtn>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;