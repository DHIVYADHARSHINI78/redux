import styled, { keyframes } from 'styled-components';

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

/* ─── Layout ─────────────────────────────────────────────────────────── */

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 4px 0 40px;
  animation: ${fadeUp} 0.35s ease both;
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 12px;

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const PageTitle = styled.h2`
  font-family: 'Syne', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
  letter-spacing: -0.02em;

  span {
    background: linear-gradient(90deg, #6366f1, #8b5cf6, #6366f1);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: ${shimmer} 3s linear infinite;
  }
`;

/* ─── Filters ─────────────────────────────────────────────────────────── */

export const FilterRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  background: #f1f5f9;
  padding: 4px;
  border-radius: 12px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FilterBtn = styled.button`
  background: ${({ $active }) => $active ? '#ffffff' : 'transparent'};
  color:      ${({ $active }) => $active ? '#6366f1' : '#94a3b8'};
  border: none;
  padding: 6px 14px;
  border-radius: 9px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  font-weight: ${({ $active }) => $active ? '700' : '500'};
  cursor: pointer;
  transition: all 0.18s ease;
  white-space: nowrap;
  box-shadow: ${({ $active }) => $active ? '0 1px 4px rgba(99,102,241,0.15)' : 'none'};

  &:hover {
    color: #6366f1;
    background: ${({ $active }) => $active ? '#ffffff' : 'rgba(255,255,255,0.6)'};
  }
`;

export const AddBtn = styled.button`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #ffffff;
  border: none;
  padding: 10px 22px;
  border-radius: 12px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  height: 42px;
  white-space: nowrap;
  box-shadow: 0 4px 14px rgba(99,102,241,0.35);
  letter-spacing: 0.01em;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(99,102,241,0.45);
  }
  &:active {
    transform: translateY(0);
  }

  @media (max-width: 640px) {
    width: 100%;
    justify-content: center;
  }
`;

/* ─── Table ───────────────────────────────────────────────────────────── */

export const TableWrapper = styled.div`
  background: #ffffff;
  border-radius: 18px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border: 1px solid #e8edf5;
  box-shadow:
    0 1px 3px rgba(0,0,0,0.04),
    0 4px 16px rgba(99,102,241,0.06);

  &::-webkit-scrollbar { height: 4px; }
  &::-webkit-scrollbar-track { background: #f8fafc; }
  &::-webkit-scrollbar-thumb { background: #c7d2fe; border-radius: 99px; }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 700px;
`;

export const Thead = styled.thead`
  background: linear-gradient(to right, #f8fafc, #f1f5f9);
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const Th = styled.th`
  padding: 14px 18px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  color: #94a3b8;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
  border-bottom: 1px solid #e8edf5;

  &:first-child { padding-left: 24px; }
  &:last-child  { padding-right: 24px; }
`;

export const Tr = styled.tr`
  border-bottom: 1px solid #f1f5f9;
  transition: background 0.15s ease;

  &:last-child { border-bottom: none; }
  &:hover {
    background: linear-gradient(to right, #fafbff, #f8f9ff);
  }
`;

export const Td = styled.td`
  padding: 15px 18px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.875rem;
  color: #475569;
  vertical-align: middle;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 160px;

  &:first-child { padding-left: 24px; }
  &:last-child  { padding-right: 24px; max-width: unset; }
`;

/* ─── Cell content ────────────────────────────────────────────────────── */

export const PatientName = styled.span`
  font-weight: 700;
  color: #0f172a;
  font-size: 0.9rem;
  display: block;
`;

export const DoctorName = styled.span`
  color: #6366f1;
  font-weight: 600;
  font-size: 0.85rem;
  display: block;

  &::after {
    content: '';
    display: block;
    height: 1px;
    width: 0;
    background: #6366f1;
    transition: width 0.2s ease;
    margin-top: 1px;
  }

  tr:hover &::after { width: 100%; }
`;

export const DateTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 100px;
`;

export const DateText = styled.span`
  font-weight: 600;
  color: #1e293b;
  font-size: 0.85rem;
  line-height: 1.4;
`;

export const TimeText = styled.span`
  color: #94a3b8;
  font-size: 0.76rem;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 3px;

  &::before {
    content: '🕐';
    font-size: 0.65rem;
  }
`;

/* ─── Status Select ───────────────────────────────────────────────────── */

export const StatusSelect = styled.select`
  appearance: none;
  background: ${({ $status }) =>
    $status === 'Pending'   ? 'linear-gradient(135deg, #fef9ec, #fef3c7)' :
    $status === 'Confirmed' ? 'linear-gradient(135deg, #f0fdf6, #dcfce7)' :
    $status === 'Completed' ? 'linear-gradient(135deg, #eff6ff, #dbeafe)' :
    '#f8fafc'
  };
  color: ${({ $status }) =>
    $status === 'Pending'   ? '#b45309' :
    $status === 'Confirmed' ? '#059669' :
    $status === 'Completed' ? '#2563eb' :
    '#475569'
  };
  border: 1.5px solid ${({ $status }) =>
    $status === 'Pending'   ? '#fde68a' :
    $status === 'Confirmed' ? '#6ee7b7' :
    $status === 'Completed' ? '#93c5fd' :
    '#e2e8f0'
  };
  border-radius: 10px;
  padding: 5px 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  height: 34px;
  width: 124px;
  transition: all 0.15s ease;

  &:focus {
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99,102,241,0.12);
  }
  &:hover { filter: brightness(0.97); }
`;

/* ─── Actions ─────────────────────────────────────────────────────────── */

export const ActionRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const IconBtn = styled.button`
  background: ${({ $variant }) =>
    $variant === 'delete' ? '#fef2f2' : '#eef2ff'};
  color: ${({ $variant }) =>
    $variant === 'delete' ? '#ef4444' : '#6366f1'};
  border: 1.5px solid ${({ $variant }) =>
    $variant === 'delete' ? '#fecaca' : '#c7d2fe'};
  border-radius: 10px;
  padding: 0;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.18s ease;
  width: 36px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${({ $variant }) =>
      $variant === 'delete' ? '#ef4444' : '#6366f1'};
    color: #fff;
    border-color: ${({ $variant }) =>
      $variant === 'delete' ? '#ef4444' : '#6366f1'};
    transform: scale(1.08);
    box-shadow: ${({ $variant }) =>
      $variant === 'delete'
        ? '0 4px 12px rgba(239,68,68,0.3)'
        : '0 4px 12px rgba(99,102,241,0.3)'};
  }
  &:active { transform: scale(0.96); }
`;

/* ─── Empty State ─────────────────────────────────────────────────────── */

export const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: #94a3b8;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  min-height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #fafbff, #f8fafc);
  border-radius: 18px;
  border: 2px dashed #e2e8f0;
  gap: 8px;

  .icon {
    font-size: 3.5rem;
    margin-bottom: 8px;
    line-height: 1;
  }

  strong {
    color: #64748b;
    font-weight: 700;
  }
`;