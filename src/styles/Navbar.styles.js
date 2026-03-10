import styled from 'styled-components';

export const Nav = styled.nav`
  background: #ffffff; padding: 0 32px; height: 64px;
  display: flex; align-items: center; justify-content: space-between;
  border-bottom: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
  position: sticky; top: 0; z-index: 100;
`;
export const Brand     = styled.div`display: flex; align-items: center; gap: 10px;`;
export const Logo      = styled.span`font-size: 1.5rem;`;
export const BrandName = styled.h1`
  font-family: 'Syne', sans-serif; font-size: 1.25rem; font-weight: 800;
  color: #0f172a; margin: 0;
  span { color: #6366f1; }
`;
export const NavLinks = styled.div`display: flex; gap: 8px;`;
export const NavBtn   = styled.button`
  background: ${({ $active }) => $active ? '#6366f1' : 'transparent'};
  color:      ${({ $active }) => $active ? '#ffffff' : '#64748b'};
  border: 1px solid ${({ $active }) => $active ? '#6366f1' : '#e2e8f0'};
  padding: 7px 18px; border-radius: 8px; font-family: 'DM Sans', sans-serif;
  font-size: 0.85rem; font-weight: 600; cursor: pointer; transition: all 0.2s;
  &:hover {
    background: ${({ $active }) => $active ? '#6366f1' : '#f1f5f9'};
    color: ${({ $active }) => $active ? '#ffffff' : '#0f172a'};
  }
`;
export const Badge = styled.span`
  background: #ef4444; color: white; font-size: 0.7rem; font-weight: 700;
  padding: 1px 6px; border-radius: 99px; margin-left: 4px;
`; 