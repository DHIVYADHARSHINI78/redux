import styled from 'styled-components';

export const PageTitle = styled.h2`
  font-family: 'Syne', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 20px;
  min-height: 34px;
  line-height: 1.4;
`;

export const DoctorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  margin-top: 8px;
  min-height: 120px;
`;

export const DoctorCard = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 24px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
  display: flex;
  align-items: flex-start;
  gap: 16px;
  cursor: pointer;
  transition: all 0.2s;
  min-height: 90px;
  box-sizing: border-box;
  &:hover {
    border-color: #6366f1;
    box-shadow: 0 4px 16px rgba(99,102,241,0.12);
    transform: translateY(-2px);
  }
`;

export const DoctorAvatar = styled.div`
  font-size: 2rem;
  width: 52px;
  height: 52px;
  background: #eef2ff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
`;

export const DoctorInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

export const DoctorName = styled.div`
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 0.95rem;
  color: #0f172a;
  margin-bottom: 4px;
  min-height: 22px;
  line-height: 1.4;
`;

export const DoctorSpec = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  color: #64748b;
  margin-bottom: 6px;
  min-height: 18px;
  line-height: 1.4;
`;

export const DoctorSummary = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.88rem;
  color: #0f172a;
  min-height: 20px;
  line-height: 1.4;
  margin-bottom: 12px;
`;

export const Highlight = styled.span`
  color: #6366f1;
  font-weight: 700;
  display: inline-block;
  min-width: 12px;
  text-align: center;
`;

export const StatsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 10px;
`;

export const StatPill = styled.span`
  background: ${({ $bg }) => $bg || '#f1f5f9'};
  color: ${({ $color }) => $color || '#64748b'};
  font-family: 'DM Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 99px;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  gap: 3px;
`;

export const ClickHint = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  color: #6366f1;
  font-weight: 600;
  margin-top: 4px;
  opacity: 0.7;
  transition: opacity 0.2s;
  ${DoctorCard}:hover & {
    opacity: 1;
  }
`;