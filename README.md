# Learn Hub Front

This repository contains two versions of the LearnHub application:

## React Version (Original)
The original React application using Vite with HMR and ESLint. Located in the root directory.

## Angular Version (Migration)
A complete migration to Angular 18 (LTS) located in the `/srcAngular` directory.

### Key Features of Angular Migration:
- **Framework**: Angular 18.2.14 (LTS)
- **Architecture**: Standalone Components following SOLID principles
- **Styling**: TailwindCSS 3.x
- **State Management**: RxJS BehaviorSubject
- **HTTP Client**: Angular HttpClient with interceptors

### Quick Start - Angular Version

```bash
cd srcAngular
npm install
npm start
```

For detailed Angular documentation, see [srcAngular/README_ANGULAR.md](./srcAngular/README_ANGULAR.md)

---

## React Version Details

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
