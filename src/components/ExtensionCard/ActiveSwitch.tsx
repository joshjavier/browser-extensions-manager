import { Switch } from '@mantine/core';
import { Extension, toggleActive } from '@/pages/Home/Home.state';
import classes from './ActiveSwitch.module.css';

type ActiveSwitchProps = Pick<Extension, 'id' | 'isActive'>;

export function ActiveSwitch({ id, isActive }: ActiveSwitchProps) {
  return (
    <Switch
      classNames={classes}
      aria-label="Toggle active state"
      checked={isActive}
      onChange={() => toggleActive(id)}
    />
  );
}
