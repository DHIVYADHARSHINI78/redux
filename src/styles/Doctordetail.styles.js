import styled from 'styled-components';

// ── Base ──────────────────────────────────────────
export const Wrapper = styled.div`
  font-family: 'DM Sans', sans-serif;
  padding: 20px;
`;

export const PageTitle = styled.h2`
  font-family: 'Syne', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 24px;
  min-height: 34px;
  line-height: 1.4;
`;

export const Section = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  margin-bottom: 20px;
  min-height: 80px;
  box-sizing: border-box;
`;

export const SectionTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-size: 1rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 20px;
  min-height: 24px;
`;

// ── Form ──────────────────────────────────────────
export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  font-size: 0.78rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 6px;
  min-height: 16px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-size: 0.9rem;
  font-family: 'DM Sans', sans-serif;
  outline: none;
  height: 42px;
  box-sizing: border-box;
  color: #0f172a;
  background: #f8fafc;
  transition: border-color 0.2s;
  &:focus {
    border-color: #6366f1;
    background: #fff;
  }
`;

export const SaveBtn = styled.button`
  background: #6366f1;
  color: #ffffff;
  border: none;
  padding: 10px 24px;
  border-radius: 10px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  height: 42px;
  transition: all 0.2s;
  &:hover { background: #4f46e5; }
`;

// ── Toggle ────────────────────────────────────────
export const ToggleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: ${({ $last }) => $last ? 'none' : '1px solid #f1f5f9'};
  min-height: 56px;
`;

export const ToggleInfo = styled.div``;

export const ToggleLabel = styled.div`
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 2px;
  font-size: 0.9rem;
`;

export const ToggleDesc = styled.div`
  font-size: 0.82rem;
  color: #94a3b8;
`;

export const Toggle = styled.div`
  width: 48px;
  height: 26px;
  border-radius: 99px;
  background: ${({ $on }) => $on ? '#6366f1' : '#e2e8f0'};
  cursor: pointer;
  position: relative;
  transition: background 0.2s;
  flex-shrink: 0;
`;

export const ToggleThumb = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ffffff;
  position: absolute;
  top: 3px;
  left: ${({ $on }) => $on ? '25px' : '3px'};
  transition: left 0.2s;
`;

// ── Info ──────────────────────────────────────────
export const InfoRow = styled.div`
  font-size: 0.88rem;
  color: #64748b;
  line-height: 2;
`;

export const InfoValue = styled.strong`
  color: ${({ $purple }) => $purple ? '#6366f1' : '#0f172a'};
`;

// ── Stats ─────────────────────────────────────────
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  @media (max-width: 600px) { grid-template-columns: repeat(2, 1fr); }
`;

export const StatCard = styled.div`
  background: #f8fafc;
  border-radius: 12px;
  padding: 16px;
  border: 1px solid #e2e8f0;
  border-top: 3px solid ${({ $color }) => $color || '#6366f1'};
  text-align: center;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StatNumber = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ $color }) => $color || '#0f172a'};
  line-height: 1;
  min-height: 36px;
`;

export const StatLabel = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 6px;
`;

// ── Doctor List ───────────────────────────────────
export const DoctorList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DoctorItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  color: #0f172a;
  min-height: 48px;
`;

export const DoctorBadge = styled.span`
  background: ${({ $active }) => $active ? '#eef2ff' : '#f1f5f9'};
  color: ${({ $active }) => $active ? '#6366f1' : '#94a3b8'};
  border: 1px solid ${({ $active }) => $active ? '#c7d2fe' : '#e2e8f0'};
  padding: 4px 10px;
  border-radius: 99px;
  font-size: 0.78rem;
  font-weight: 700;
  white-space: nowrap;
`;

// ── Patient Table ─────────────────────────────────
export const PatientTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
`;

export const PatientTh = styled.th`
  padding: 10px 14px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: #94a3b8;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-bottom: 1px solid #e2e8f0;
  background: #f8fafc;
  white-space: nowrap;
`;

export const PatientTr = styled.tr`
  border-bottom: 1px solid #f1f5f9;
  height: 52px;
  &:last-child { border-bottom: none; }
  &:hover { background: #f8fafc; }
`;

export const PatientTd = styled.td`
  padding: 12px 14px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  color: #475569;
  vertical-align: middle;
`;

export const StatusBadge = styled.span`
  padding: 4px 10px;
  border-radius: 99px;
  font-size: 0.78rem;
  font-weight: 700;
  background: ${({ $status }) =>
    $status === 'Confirmed' ? '#d1fae5' :
    $status === 'Pending'   ? '#fef3c7' : '#dbeafe'};
  color: ${({ $status }) =>
    $status === 'Confirmed' ? '#10b981' :
    $status === 'Pending'   ? '#f59e0b' : '#3b82f6'};
`;

export const BackBtn = styled.button`
  background: #f1f5f9;
  color: #64748b;
  border: 1px solid #e2e8f0;
  padding: 8px 18px;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
  transition: all 0.2s;
  &:hover { background: #e2e8f0; color: #0f172a; }
`;

// ── Doctor Header ─────────────────────────────────
export const DoctorHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 12px;
  margin-bottom: 20px;
`;

export const DoctorAvatarBox = styled.div`
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  background: rgba(255,255,255,0.2);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const DoctorHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DoctorHeaderName = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  color: #ffffff;
`;

export const DoctorHeaderSpec = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem;
  color: rgba(255,255,255,0.75);
`;

export const DoctorHeaderTotal = styled.div`
  margin-left: auto;
  text-align: right;
`;

export const DoctorHeaderCount = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: #ffffff;
  line-height: 1;
`;

export const DoctorHeaderCountLabel = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.75);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

// ── Summary Cards ─────────────────────────────────
export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const SummaryCard = styled.div`
  background: ${({ $bg }) => $bg || '#f8fafc'};
  border: 1px solid ${({ $border }) => $border || '#e2e8f0'};
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-height: 120px;
`;

export const SummaryIcon = styled.div`
  width: 36px;
  height: 36px;
  background: ${({ $iconBg }) => $iconBg || '#f1f5f9'};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`;

export const SummaryNumber = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: ${({ $color }) => $color || '#0f172a'};
  line-height: 1;
  min-height: 36px;
`;

export const SummaryLabel = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: ${({ $color }) => $color || '#64748b'};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ProgressBar = styled.div`
  height: 4px;
  background: ${({ $trackColor }) => $trackColor || '#e2e8f0'};
  border-radius: 99px;
  overflow: hidden;
  margin-top: auto;
`;

export const ProgressFill = styled.div`
  height: 100%;
  width: ${({ $percent }) => $percent || 0}%;
  background: ${({ $color }) => $color || '#6366f1'};
  border-radius: 99px;
  transition: width 0.5s ease;
`;

// ── Empty State ───────────────────────────────────
export const EmptySettings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  text-align: center;
  min-height: 250px;
`;

export const EmptyIcon = styled.div`
  font-size: 3.5rem;
  margin-bottom: 16px;
  line-height: 1;
`;

export const EmptyText = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 10px;
`;

export const EmptySubText = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  color: #64748b;
  max-width: 320px;
  line-height: 1.6;
  margin-bottom: 16px;
  strong { color: #6366f1; }
`;

export const EmptyHint = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.8rem;
  color: #6366f1;
  background: #eef2ff;
  border: 1px solid #c7d2fe;
  padding: 8px 16px;
  border-radius: 99px;
  font-weight: 600;
`;
