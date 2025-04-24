import { ActionIcon, useComputedColorScheme, useMantineColorScheme } from '@mantine/core';
import IconMoon from './icon-moon.svg?react';
import IconSun from './icon-sun.svg?react';
import classes from './ColorSchemeToggle.module.css';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();

  const toggleColorScheme = () => {
    setColorScheme(computedColorScheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ActionIcon
      onClick={toggleColorScheme}
      color="neutral"
      variant="light"
      size={50}
      radius="12"
      className={classes.button}
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === 'dark' ? <IconSun /> : <IconMoon />}
    </ActionIcon>
  );
}
