import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin-bottom: 28px;
  min-height: 110px;             /* ← ADD — grid area reserved */

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
  min-height: 100px;             /* ← ADD — card height stable */
  box-sizing: border-box;        /* ← ADD — padding no shift */
  display: flex;                 /* ← ADD */
  flex-direction: column;        /* ← ADD */
  justify-content: space-between;/* ← ADD — label + number stable */
`;

export const CardLabel = styled.div`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
  min-height: 16px;              /* ← ADD — font load stable */
  line-height: 1.4;              /* ← ADD — stable line height */
  white-space: nowrap;           /* ← ADD — label no wrap */
`;

export const CardNumber = styled.div`
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: ${({ $color }) => $color || '#0f172a'};
  line-height: 1;                /* ← already good ✅ */
  min-height: 40px;              /* ← ADD — number area reserved */
  display: flex;                 /* ← ADD */
  align-items: center;           /* ← ADD — number vertically stable */
  min-width: 24px;               /* ← ADD — space for number reserved */
`;