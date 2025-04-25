import { Switch } from '@mantine/core';
import classes from './ActiveSwitch.module.css';

export function ActiveSwitch() {
  return <Switch classNames={classes} aria-label="Toggle active state" />;
}
