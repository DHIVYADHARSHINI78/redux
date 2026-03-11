import styled, { keyframes } from 'styled-components';

const backdropIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(24px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0)    scale(1);    }
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(8, 15, 35, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  padding: 16px;
  animation: ${backdropIn} 0.2s ease both;
`;

export const Modal = styled.div`
  background: #ffffff;
  border-radius: 24px;
  padding: 0;
  width: 100%;
  max-width: 500px;
  max-height: 92vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 0 0 1px rgba(99,102,241,0.08),
    0 8px 32px rgba(15,23,42,0.12),
    0 32px 80px rgba(15,23,42,0.18);
  animation: ${slideUp} 0.28s cubic-bezier(0.22, 1, 0.36, 1) both;

  @media (max-width: 480px) {
    border-radius: 20px;
    max-height: 96vh;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 22px 28px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 60%, #a78bfa 100%);
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  &::before, &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.07);
  }
  &::before { width: 180px; height: 180px; top: -70px; right: -50px; }
  &::after  { width: 90px;  height: 90px;  bottom: -35px; left: 16px; }

  @media (max-width: 480px) {
    padding: 18px 22px;
  }
`;

export const ModalTitle = styled.h3`
  font-family: 'Syne', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0;
  letter-spacing: -0.01em;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  gap: 10px;

  .icon {
    width: 36px;
    height: 36px;
    background: rgba(255,255,255,0.2);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    flex-shrink: 0;
  }
`;

export const CloseBtn = styled.button`
  background: rgba(255,255,255,0.15);
  border: 1px solid rgba(255,255,255,0.25);
  color: #ffffff;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.18s ease;
  position: relative;
  z-index: 1;
  flex-shrink: 0;

  &:hover {
    background: rgba(255,255,255,0.28);
    transform: rotate(90deg) scale(1.05);
  }
`;

export const ModalBody = styled.div`
  padding: 28px 28px 24px;
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: #e0e7ff; border-radius: 99px; }

  @media (max-width: 480px) {
    padding: 22px 20px 20px;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 14px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  grid-column: ${({ $full }) => $full ? '1 / -1' : 'auto'};
`;

export const Label = styled.label`
  font-family: 'DM Sans', sans-serif;
  font-size: 0.71rem;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const Input = styled.input`
  background: #f8fafc;
  border: 1.5px solid #e8edf5;
  border-radius: 12px;
  padding: 11px 14px;
  color: #0f172a;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  outline: none;
  transition: all 0.18s ease;
  width: 100%;
  height: 46px;
  box-sizing: border-box;

  &:hover:not(:focus) {
    border-color: #c7d2fe;
    background: #fafbff;
  }
  &:focus {
    border-color: #6366f1;
    background: #fafbff;
    box-shadow: 0 0 0 3.5px rgba(99,102,241,0.12);
  }
  &::placeholder { color: #c8d3e0; }
  &[type='date'] { cursor: pointer; color-scheme: light; }
`;

export const Select = styled.select`
  background: #f8fafc;
  border: 1.5px solid #e8edf5;
  border-radius: 12px;
  padding: 11px 38px 11px 14px;
  color: #0f172a;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.9rem;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 46px;
  box-sizing: border-box;
  transition: all 0.18s ease;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9'%3E%3Cpath d='M1 1l6 6 6-6' stroke='%236366f1' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;

  &:hover:not(:focus) {
    border-color: #c7d2fe;
    background-color: #fafbff;
  }
  &:focus {
    border-color: #6366f1;
    background-color: #fafbff;
    box-shadow: 0 0 0 3.5px rgba(99,102,241,0.12);
  }
`;

export const SubmitBtn = styled.button`
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: #ffffff;
  border: none;
  height: 50px;
  border-radius: 14px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
  transition: all 0.2s ease;
  letter-spacing: 0.02em;
  box-shadow: 0 4px 16px rgba(99,102,241,0.4);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%);
    transform: translateX(-100%);
    transition: transform 0.4s ease;
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(99,102,241,0.5);
  }
  &:hover::after { transform: translateX(100%); }
  &:active {
    transform: translateY(0);
    box-shadow: 0 3px 10px rgba(99,102,241,0.35);
  }
`;

export const ErrorMsg = styled.span`
  color: #ef4444;
  font-size: 0.73rem;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  min-height: 16px;
  display: flex;
  align-items: center;
  gap: 4px;

  &::before { content: '⚠'; font-size: 0.68rem; }
`;