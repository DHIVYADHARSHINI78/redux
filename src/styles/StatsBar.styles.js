import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 28px;

  @media (max-width: 768px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 480px) { grid-template-columns: 1fr; }
`;

export const Card = styled.div`
  background: #ffffff;
  border-radius: 14px;
  padding: 20px 24px;
  border: 1px solid #e2e8f0;
  border-top: 4px solid ${({ $color }) => $color || '#6366f1'};
  box-shadow: 0 1px 4px rgba(0,0,0,0.05);
`;

export const CardLabel = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
`;

export const CardNumber = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: ${({ $color }) => $color || '#0f172a'};
  line-height: 1;
`;