import { createTheme } from '@mantine/core';

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
  primaryColor: 'red',
  primaryShade: {
    light: 7,
    dark: 4,
  },
  fontFamily: "'Noto Sans', system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji'",
  fontSizes: {
    xxl: rem(34),
  },
});
