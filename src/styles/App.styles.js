import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; }
  body {
    margin: 0;
    background: #f1f5f9;
    font-family: 'DM Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    color: #0f172a;
  }
`;

export const AppShell = styled.div`min-height: 100vh; background: #f1f5f9;`;
export const Content = styled.main`
  max-width: 1100px; 
  margin: 0 auto; 
  padding: 28px 24px;
  min-height: calc(100vh - 64px);
  /* ADD THIS: */
  contain: layout;           /* ← stops outside shifts */
`;
