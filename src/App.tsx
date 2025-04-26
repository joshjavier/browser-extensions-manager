import '@mantine/core/styles.css';
import './global.css';

import { Container, MantineProvider } from '@mantine/core';
import { AppHeader } from './components/AppHeader';
import { Router } from './Router';
import { resolver, theme } from './theme';

export default function App() {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      <AppHeader />
      <Container variant="wrapper" component="main">
        <Router />
      </Container>
    </MantineProvider>
  );
}
