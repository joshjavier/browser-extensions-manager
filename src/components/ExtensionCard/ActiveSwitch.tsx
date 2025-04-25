import { useState } from 'react';
import { Switch } from '@mantine/core';
import classes from './ActiveSwitch.module.css';

interface ActiveSwitchProps {
  active: boolean;
}

export function ActiveSwitch({ active }: ActiveSwitchProps) {
  const [checked, setChecked] = useState(active);

  return (
    <Switch
      classNames={classes}
      aria-label="Toggle active state"
      checked={checked}
      onChange={() => setChecked(!checked)}
    />
  );
}
