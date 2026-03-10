import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; background: #f1f5f9; font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; color: #0f172a; }
`;

export const AppShell = styled.div`min-height: 100vh; background: #f1f5f9;`;
export const Content  = styled.main`max-width: 1100px; margin: 0 auto; padding: 28px 24px;`;