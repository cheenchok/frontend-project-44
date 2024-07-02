import globals from 'globals';

import path from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

const airbnb = compat.extends('airbnb');

export default [
  { languageOptions: { globals: globals.browser } },
  ...airbnb,
  {
    rules: {
      'import/no-named-as-default': 0,
      'import/no-named-as-default-member': 0,
      'import/extensions': 0,
      'no-console': 0,
      'no-restricted-syntax': 0,
    },
  },
  { ignores: ['**/*.config.js'] },
];
