import { Container, Paper } from '@mantine/core';
import { LogoContainer } from '../LogoContainer';
import { SettingsContainer } from '../SettingsContainer';
import classes from './AppHeader.module.css';

export function AppHeader() {
  return (
    <Container className={classes.container} variant="wrapper" component="header">
      <Paper className={classes.box} withBorder>
        <LogoContainer />
        <SettingsContainer />
      </Paper>
    </Container>
  );
}
