import styled from 'styled-components';

export const Wrapper         = styled.div`padding: 28px 32px; max-width: 1100px; margin: 0 auto;`;
export const PageTitle       = styled.h2`font-family: 'Syne', sans-serif; font-size: 1.6rem; font-weight: 800; color: #f8fafc; margin: 0 0 24px;`;
export const DoctorGrid      = styled.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px; margin-bottom: 40px;`;
export const DoctorCard      = styled.div`
  background: #1e293b;
  border: 1px solid ${({ $active }) => $active ? '#38bdf8' : '#334155'};
  border-radius: 16px; padding: 24px; cursor: pointer; transition: all 0.2s; position: relative; overflow: hidden;
  &::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: ${({ $active }) => $active ? '#38bdf8' : 'transparent'}; }
  &:hover { border-color: #38bdf8; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(56,189,248,0.1); }
`;
export const DoctorTop       = styled.div`display: flex; align-items: center; gap: 16px; margin-bottom: 20px;`;
export const Avatar          = styled.div`width: 56px; height: 56px; background: #0f172a; border-radius: 14px; display: flex; align-items: center; justify-content: center; font-size: 1.8rem; border: 1px solid #334155;`;
export const DoctorInfo      = styled.div``;
export const DoctorName      = styled.h3`font-family: 'Syne', sans-serif; font-size: 1rem; font-weight: 700; color: #f1f5f9; margin: 0 0 4px;`;
export const Specialty       = styled.p`font-family: 'DM Sans', sans-serif; font-size: 0.8rem; color: #64748b; margin: 0;`;
export const StatsRow        = styled.div`display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;`;
export const StatBox         = styled.div`background: #0f172a; border-radius: 10px; padding: 12px; text-align: center; border: 1px solid #1e293b;`;
export const StatNumber      = styled.div`font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: ${({ $color }) => $color || '#f8fafc'}; line-height: 1; margin-bottom: 4px;`;
export const StatLabel       = styled.div`font-family: 'DM Sans', sans-serif; font-size: 0.7rem; color: #475569; font-weight: 600; text-transform: uppercase; letter-spacing: 0.04em;`;
export const SectionTitle    = styled.h3`font-family: 'Syne', sans-serif; font-size: 1.1rem; font-weight: 700; color: #94a3b8; margin: 0 0 16px;`;
export const AppointmentMini = styled.div`background: #1e293b; border: 1px solid #334155; border-radius: 10px; padding: 14px 18px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; transition: background 0.15s; &:hover { background: #263349; }`;
export const MiniLeft        = styled.div``;
export const MiniPatient     = styled.div`font-family: 'DM Sans', sans-serif; font-weight: 700; color: #f1f5f9; font-size: 0.9rem; margin-bottom: 3px;`;
export const MiniReason      = styled.div`font-family: 'DM Sans', sans-serif; font-size: 0.78rem; color: #64748b;`;
export const MiniRight       = styled.div`display: flex; flex-direction: column; align-items: flex-end; gap: 4px;`;
export const MiniDate        = styled.div`font-family: 'DM Sans', sans-serif; font-size: 0.8rem; color: #38bdf8; font-weight: 600;`;
export const StatusDot       = styled.span`
  display: inline-block; width: 8px; height: 8px; border-radius: 50%;
  background: ${({ $status }) => {
    if ($status === 'Confirmed') return '#38bdf8';
    if ($status === 'Pending')   return '#fb923c';
    if ($status === 'Completed') return '#4ade80';
    return '#94a3b8';
  }};
`;
export const EmptyState      = styled.div`text-align: center; padding: 40px; color: #475569; font-family: 'DM Sans', sans-serif; font-size: 0.9rem;`;