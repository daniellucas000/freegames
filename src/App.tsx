// import { useState } from 'react';

// import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
// import { darkTheme, lightTheme } from './styles/themes';

import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

export function App() {
  // const [theme, setTheme] = useState('light');
  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <>
      <Header />
      <Outlet />

      <GlobalStyle />
    </>
    // </ThemeProvider>
  );
}
