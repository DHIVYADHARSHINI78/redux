import styled from 'styled-components';

export const DoctorGrid    = styled.div`display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px; margin-top: 8px;`;
export const DoctorCard    = styled.div`background: #ffffff; border-radius: 14px; padding: 20px 24px; border: 1px solid #e2e8f0; box-shadow: 0 1px 4px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 16px;`;
export const DoctorAvatar  = styled.div`font-size: 2rem; width: 52px; height: 52px; background: #eef2ff; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;`;
export const DoctorInfo    = styled.div``;
export const DoctorName    = styled.div`font-family: 'Syne', sans-serif; font-weight: 800; font-size: 0.95rem; color: #0f172a; margin-bottom: 4px;`;
export const DoctorSpec    = styled.div`font-family: 'DM Sans', sans-serif; font-size: 0.82rem; color: #64748b; margin-bottom: 6px;`;
export const DoctorSummary = styled.div`font-family: 'DM Sans', sans-serif; font-size: 0.88rem; color: #0f172a;`;
export const Highlight     = styled.span`color: #6366f1; font-weight: 700;`;
export const PageTitle     = styled.h2`font-family: 'Syne', sans-serif; font-size: 1.4rem; font-weight: 800; color: #0f172a; margin: 0 0 20px;`;