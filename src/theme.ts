import { Button, createTheme, CSSVariablesResolver, rem } from '@mantine/core';

export const theme = createTheme({
  /** Put your mantine theme override here */
  colors: {
    /** neutral 4 and 5 are generated using Mantine colors generator using neutral 2 as the base color */
    neutral: [
      'hsl(200, 60%, 99%)',
      'hsl(0, 0%, 93%)',
      'hsl(217, 61%, 90%)',
      'hsl(0, 0%, 78%)',
      '#628cd2', // DO NOT USE
      '#4c7ccd', // DO NOT USE
      'hsl(226, 11%, 37%)',
      'hsl(225, 23%, 24%)',
      'hsl(226, 25%, 17%)',
      'hsl(227, 75%, 14%)',
    ],
    /** red uses Mantine default colors with overrides for the 4, 5, and 7 indices */
    red: [
      '#fff5f5',
      '#ffe3e3',
      '#ffc9c9',
      '#ffa8a8',
      'hsl(3, 86%, 64%)',
      'hsl(3, 71%, 56%)',
      '#fa5252',
      'hsl(3, 77%, 44%)',
      '#e03131',
      '#c92a2a',
    ],
  },
  white: 'var(--mantine-color-neutral-0)',
  black: 'var(--mantine-color-neutral-9)',
  primaryColor: 'red',
  primaryShade: {
    light: 7,
    dark: 4,
  },
  fontFamily: "'Noto Sans', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
  fontSizes: {
    xxl: rem(34),
  },
  spacing: {
    '0': '0',
    '025': rem(2),
    '050': rem(4),
    '075': rem(6),
    '100': rem(8),
    '125': rem(10),
    '150': rem(12),
    '200': rem(16),
    '250': rem(20),
    '300': rem(24),
    '400': rem(32),
    '500': rem(40),
    '600': rem(48),
    '800': rem(64),
    '1000': rem(80),
  },
  radius: {
    '0': '0',
    '4': rem(4),
    '6': rem(6),
    '8': rem(8),
    '10': rem(10),
    '12': rem(12),
    '16': rem(16),
    '20': rem(20),
    '24': rem(24),
    full: '999rem',
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: 'full',
      },
    }),
  },
  other: {
    lightGradient: 'linear-gradient(180deg, #EBF2FC 0%, #EEFBF9 100%)',
    darkGradient: 'linear-gradient(180deg, #04091B 0%, #091540 100%)',
  },
});

export const resolver: CSSVariablesResolver = (theme) => ({
  variables: {},
  light: {
    '--mantine-color-background': theme.other.lightGradient,
  },
  dark: {
    '--mantine-color-background': theme.other.darkGradient,
  },
});
