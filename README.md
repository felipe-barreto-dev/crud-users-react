## 1 - Configurações inicias
- Git Alias
```bash
git config --global init.defaultBranch dev
```
- Extensões do vscode (Eslint, EditorConfig For VS Code)
- Adicionar  a seguinte regra no settings.json do vscode
 ```javascript
 "editor.formatOnSave": true, 
  "prettier.requireConfig": true, 
  "editor.codeActionsOnSave": { 
    "source.fixAll.eslint": true 
  },
```

## 2.1 - Iniciando o projeto
```bash
git init
npm init -y
git c "chore: add npm"
```

## 2.2 - Configurar padrões de convencional commits
> add .gitignore to avoid node_modules and .vscode and coverage
```bash
npm i -D git-commit-msg-linter
git c "chore: add linter"
```

## 3 - Instalação do TypeScript
```bash
npm i -D typescript @types/node
```
* Criar o tsconfig.json na raiz do projeto (usar template padrão)

```json
{
  "compilerOptions": {
    "target": "es6",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "jsx": "react",
    "rootDirs": ["src", "tests"],
    "baseUrl": "src",
    "paths": {
      "@/*": ["*"],
      "@/tests/*": ["../tests/*"]
    },
    "allowJs": true,
    "resolveJsonModule": true
  },
  "include": ["src", "tests"],
  "exclude": ["tests/e2e/cypress"]
}
```

```bash
git c "chore: add typescript"
```

## 4 - Instalação do Linter e Prettier
> add .eslintignore to avoid node_modules and .vscode and coverage and *.scss

```bash
npm i -D eslint 
npx eslint --init
```

```bash
? How would you like to use ESLint? ... 
> To check syntax and find problems
```

```bash
? What type of modules does your project use? ... 
> JavaScript modules (import/export)
  ```
  
```bash
? Which framework does your project use? ... 
> React
```

```bash
? Does your project use TypeScript? » Yes
```

```bash
? Where does your code run? ... 
√ Node
```

```bash
? What format do you want your config file to be in? ... 
> JSON
```

```bash
The config that you have selected requires the following dependencies:

eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest
√ Would you like to install them now? · Yes
? Which package manager do you want to use? ...
> npm
  yarn
  pnpm
```

Adicione a seguinte rule no arquivo .eslintrc
```json
"rules": { 
    "react/react-in-jsx-scope": "off", 
    "react/jsx-uses-react": "error", 
    "react/jsx-uses-vars": "error", 
    "no-unused-vars": "off" 
  },
```

Para corrigir alguns erros com o jest adicione a flag true em .eslintrc
```json
"env": {
    "browser": true,
    "es2021": true,
    "jest": true,
    "node": true
  }
```

Adicionar a seguinte configuração ao arquivo .eslintrc.json
```json
"settings": {
    "react": {
      "version": "detect"
    }
  }
```

```bash
npm i -D eslint-config-prettier eslint-plugin-prettier prettier
```

Faça as seguintes alterações no arquivo .eslintrc
```json
"extends": ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"]
```

Crie o arquivo .prettierrc e cole o seguinte código
```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "none",
  "jsxBracketSameLine": true
}
```

Adicione o seguinte script ao package.json
```json
"scripts": { 
    "start": "webpack-dev-server --open", 
    "test": "jest --passWithNoTests --no-cache --runInBand", 
    "lint": "eslint .", 
    "lint:fix": "eslint --fix", 
    "format": "prettier --write './**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"
  },
```

```bash
git c "chore: add eslint and prettier"
```

## 6 - Adicionar arquivo de configuração do Editorconfig
Clique com o botão direito na raiz do projeto e gere o arquivo de configuração .editorconfig
```bash
git c "chore: add editorconfig"
```

## 7 - Instalação do Lint Staged e Husky
```bash
npm i -D lint-staged husky
```

Criar na raiz do projeto o arquivo .lintstagedrc.json com o seguinte conteúdo
```json
{
  "*.{ts,tsx}": "eslint --fix"
}
```

Criar um script em package.json. 
```json
"scripts": {
    // ...
    "prepare": "husky install",
    // ...
  }
```

Para rodar o comando, seu package.json precisa estar no mesmo nível do .git, caso não esteja, isso pode ser resolvido da seguinte forma:

```json
"scripts": {
    // ...
    "prepare": "cd .. && husky install ./<your path>/.husky",
    // ...
  }
```

Execute:


```bash
npm run prepare
npx husky add .husky/pre-commit "npx lint-staged"
git c "chore: add lint-staged and husky"
```

## 8 - Instalação do Jest

```bash
npm i -D jest @types/jest ts-node ts-jest jest-environment-jsdom
```

Adicionar/Alterar na raiz do projeto o arquivo jest.config.js
```javascript
module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}', '!**/*.d.ts'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['\\\\node_modules\\\\', '\\.pnp\\.[^\\\\]+$'],
  roots: ['<rootDir>/src'],
  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
    '\\.scss$': 'identity-obj-proxy'
  }
};
```

Para configurar o Babel, crie um arquivo na raiz do projeto com o nome `babel.config.js` com o seguinte conteúdo

```javascript
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
}
```

```bash
git c "chore: add jest"
```

## 9 - Instalação do React

```bash
npm i react react-dom
npm i @types/react @types/react-dom -D
```

## 10 - Criando A pasta public
- Criar no diretório raiz uma pasta com o nome `public`
- adicione o seguinte arquivo
```html
<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
  <title>Crystal Clean</title>
</head>
<body>
  <main id="main"></main>
  <script crossorigin src="https://unpkg.com/react@17/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@17/umd/react-dom.production.min.js"></script>
  <script src="js/bundle.js"></script>
</body>
</html>
```

```npm
git c "feat: add index.html"
```

## 11 - Instalação do WebPack
```bash
npm i -D webpack webpack-cli webpack-dev-server clean-webpack-plugin
git c "chore: add webpack"
```

* Adicionar na raiz do projeto o arquivo webpack.config.js
```json
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main/index.tsx',
  output: {
    path: path.join(__dirname, 'public/js'),
    publicPath: '/public/js',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'scss'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    devMiddleware: {
      writeToDisk: true
    },
    static: './public',
    historyApiFallback: true
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  plugins: [new CleanWebpackPlugin()]
};
```

## 12 - Instalação do SASS

```bash
npm i -D node-sass sass-loader css-loader style-loader ts-loader identity-obj-proxy
```

* Crie uma pasta dentro de main chamada config e coloque o seguinte arquivo `sass-module.d.ts` dentro
```typescript
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}
```

## 12 - Configurando os primeiros componentes React (Presentation)

Dentro de main/index.tsx coloque o seguinte código

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import Login from '@/presentation/pages/login/login';

ReactDOM.render(<Login />, document.getElementById('main'));
```

* Dentro de src criar as seguintes pastas presentation/pages/login
* Dentro de login crie o arquivo `login.tsx`

```typescript
import React from 'react';
import Styles from './login-styles.scss';

const Login: React.FC = () => {
  return <div className={Styles.login}>Crystal Clean</div>;
};

export default Login;
```
 
* E também o arquivo `login-style.scss`

```scss
 * {
    font-family: 'Roboto', sans-serif;
}

.login {
    background-color: cyan;
}
```

## 13 - Instalação do Router DOM
```bash
npm i react-router-dom
npm i -D @types/react-router-dom
```

## 14 - Para testes nas views (presentation)
```bash
npm i -D @testing-library/react
```

## 15 - Visualizando a versão das dependências do projeto
```bash
sudo npm i -g npm-check
npm-check -u -s
```

## 16 - Install Coveralls
```bash
npm i -D coveralls
```

## 17 - Git Tag
```bash
git tag -a "1.x.x" -m "1.x.x"
git tag
git c "chore: release 1.x.x"
```
