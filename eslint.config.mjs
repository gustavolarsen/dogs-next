import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierPluguin from 'eslint-plugin-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:prettier/recommended',
    'prettier',
  ),
  {
    plugins: {
      prettier: prettierPluguin,
    },
    rules: {
      'prettier/prettier': 'error', // exibe erro se o código não estiver formatado
    },
  },
];

export default eslintConfig;
