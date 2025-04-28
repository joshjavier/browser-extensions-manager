import mantine from 'eslint-config-mantine';
import valtio from 'eslint-plugin-valtio';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  ...mantine,
  valtio.configs['flat/recommended'],
  { ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}', './.storybook/main.ts'] },
  {
    files: ['**/*.story.tsx'],
    rules: { 'no-console': 'off' },
  }
);
