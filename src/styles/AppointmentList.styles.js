import styled from 'styled-components';

export const Wrapper      = styled.div``;
export const TopBar       = styled.div`display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; flex-wrap: wrap; gap: 12px;`;
export const PageTitle    = styled.h2`font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0;`;
export const FilterRow    = styled.div`display: flex; gap: 8px; flex-wrap: wrap;`;
export const FilterBtn    = styled.button`
  background: ${({ $active }) => $active ? '#6366f1' : '#ffffff'};
  color:      ${({ $active }) => $active ? '#ffffff' : '#64748b'};
  border: 1px solid ${({ $active }) => $active ? '#6366f1' : '#e2e8f0'};
  padding: 6px 16px; border-radius: 99px; font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem; font-weight: 600; cursor: pointer; transition: all 0.2s;
  &:hover { border-color: #6366f1; color: #6366f1; }
`;
export const AddBtn       = styled.button`
  background: #6366f1; color: #ffffff; border: none; padding: 9px 22px;
  border-radius: 10px; font-family: 'DM Sans', sans-serif; font-size: 0.88rem;
  font-weight: 700; cursor: pointer; transition: all 0.2s;
  &:hover { background: #4f46e5; }
`;
export const TableWrapper = styled.div`
  background: #ffffff; border-radius: 14px; overflow: hidden;
  border: 1px solid #e2e8f0; box-shadow: 0 1px 4px rgba(0,0,0,0.05);
`;
export const Table        = styled.table`width: 100%; border-collapse: collapse;`;
export const Thead        = styled.thead`background: #f8fafc;`;
export const Th           = styled.th`padding: 13px 16px; font-family: 'DM Sans', sans-serif; font-size: 0.75rem; font-weight: 700; color: #94a3b8; text-align: left; text-transform: uppercase; letter-spacing: 0.06em; white-space: nowrap; border-bottom: 1px solid #e2e8f0;`;
export const Tr           = styled.tr`border-bottom: 1px solid #f1f5f9; transition: background 0.15s; &:last-child { border-bottom: none; } &:hover { background: #f8fafc; }`;
export const Td           = styled.td`padding: 14px 16px; font-family: 'DM Sans', sans-serif; font-size: 0.88rem; color: #475569; vertical-align: middle;`;
export const PatientName  = styled.span`font-weight: 700; color: #0f172a;`;
export const DoctorName   = styled.span`color: #6366f1; font-weight: 500;`;
export const DateTimeBox  = styled.div`display: flex; flex-direction: column; gap: 2px;`;
export const DateText     = styled.span`font-weight: 600; color: #1e293b; font-size: 0.85rem;`;
export const TimeText     = styled.span`color: #94a3b8; font-size: 0.78rem;`;
export const StatusSelect = styled.select`
  background: #f8fafc; color: #475569; border: 1px solid #e2e8f0;
  border-radius: 8px; padding: 5px 10px; font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem; cursor: pointer; outline: none;
  &:focus { border-color: #6366f1; }
`;
export const ActionRow    = styled.div`display: flex; gap: 8px;`;
export const IconBtn      = styled.button`
  background: ${({ $variant }) => $variant === 'delete' ? '#fef2f2' : '#eef2ff'};
  color:      ${({ $variant }) => $variant === 'delete' ? '#ef4444' : '#6366f1'};
  border: 1px solid ${({ $variant }) => $variant === 'delete' ? '#fecaca' : '#c7d2fe'};
  border-radius: 8px; padding: 6px 10px; cursor: pointer; font-size: 0.85rem; transition: all 0.2s;
  &:hover { background: ${({ $variant }) => $variant === 'delete' ? '#fee2e2' : '#e0e7ff'}; }
`;
export const EmptyState   = styled.div`
  text-align: center; padding: 60px 20px; color: #94a3b8;
  font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
  .icon { font-size: 3rem; margin-bottom: 12px; }
`;