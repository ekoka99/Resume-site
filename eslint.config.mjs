import {defineConfig, globalIgnores} from 'eslint/config';
import prettier from 'eslint-config-prettier/flat';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  prettier,
  {
    rules: {
      'react/display-name': 'off',
      'react-hooks/set-state-in-effect': 'off',
    },
  },
  globalIgnores(['out/**']),
]);
