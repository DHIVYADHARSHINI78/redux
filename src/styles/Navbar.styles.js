// Navbar.styles.js
import styled from 'styled-components';

export const Nav = styled.nav`
  background: #ffffff;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  position: sticky;
  top: 0;
  z-index: 100;
  box-sizing: border-box;

  /* Tablet */
  @media (max-width: 768px) {
    padding: 0 16px;
    flex-wrap: wrap;
    height: auto;
    min-height: 64px;
    gap: 8px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  /* Mobile */
  @media (max-width: 480px) {
    padding: 10px 12px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 140px;
  flex-shrink: 0;
`;

export const Logo = styled.span`
  font-size: 1.4rem;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  flex-shrink: 0;
  background: #f1f5f9;
  border-radius: 8px;
`;

export const BrandName = styled.h1`
  font-family: 'Syne', sans-serif;
  font-size: 1.2rem;
  font-weight: 800;
  color: #0f172a;
  margin: 0;
  white-space: nowrap;
  line-height: 1.4;

  span {
    color: #6366f1;
  }

  @media (max-width: 360px) {
    font-size: 1rem;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;           /* buttons wrap on small screens */

  @media (max-width: 480px) {
    width: 100%;
    justify-content: flex-start;
    gap: 6px;
  }
`;

export const NavBtn = styled.button`
  background: ${({ $active }) => ($active ? '#6366f1' : 'transparent')};
  color: ${({ $active }) => ($active ? '#ffffff' : '#64748b')};
  border: 1px solid ${({ $active }) => ($active ? '#6366f1' : '#e2e8f0')};
  padding: 0 16px;
  border-radius: 8px;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, border-color 0.2s;
  height: 36px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: ${({ $active }) => ($active ? '#5457e5' : '#f1f5f9')};
    color: ${({ $active }) => ($active ? '#ffffff' : '#0f172a')};
    border-color: ${({ $active }) => ($active ? '#5457e5' : '#cbd5e1')};
  }

  /* Hide label text on very small screens, keep badge visible */
  @media (max-width: 360px) {
    padding: 0 10px;
    font-size: 0.75rem;
  }
`;

export const Badge = styled.span`
  background: #ef4444;
  color: white;
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0 5px;
  border-radius: 99px;
  min-width: 18px;
  height: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  flex-shrink: 0;
`;