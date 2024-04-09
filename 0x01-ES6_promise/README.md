# Project: 0x01. ES6 Promises

![ES6-Promises](./main-js_files/es6-promises.jpeg)

## Resources

### Read or watch:-

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/articles/promises)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

## Project Setup

## Install NodeJS 12.11.x

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Verify NodeJS and npm versions:-

```bash
nodejs -v
npm -v
```

## Install Jest, Babel, and ESLint

Run the following command in your project directory to install `Jest`, `Babel`, and `ESLint`:

```bash
npm install
```

## Configuration Files

Add the files below to your project directory

### `package.json`

<details>
<summary>Click to show/hide file contents</summary>
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
</details>

### `babel.config.js`

<details>
<summary>Click to show/hide file contents</summary>
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
</details>

### `utils.js`

<details>
<summary>Click to show/hide file contents</summary>
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1',
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva',
  });
}
</details>

### `.eslintrc.js`

<details>
<summary>Click to show/hide file contents</summary>
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
</details>

- Don't forget to run npm install to install the dependencies specified in package.json.

## Response Data Format

`uploadPhoto` returns a response with the format:

```json
{
  "status": 200,
  "body": "photo-profile-1"
}
```

`createUser` returns a response with the format

```json
{
  "firstName": "Guillaume",
  "lastName": "Salva"
}
```

0. [Keep every promise you make and only make promises you can keep](./0-promise.js) :

Return a Promise using this prototype function getResponseFromAPI()

```bash
bob@dylan:~$ cat 0-main.js
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);

bob@dylan:~$ 
bob@dylan:~$ npm run dev 0-main.js 
true
bob@dylan:~$ 
```

## Tasks

| Task | File |
| ---- | ---- |
| 1. Don't make a promise...if you know you can't keep it | [1-promise.js](./1-promise.js) |
| 2. Catch me if you can! | [2-then.js](./2-then.js) |
| 3. Handle multiple successful promises | [3-all.js](./3-all.js) |
| 4. Simple promise | [4-user-promise.js](./4-user-promise.js) |
| 5. Reject the promises | [5-photo-reject.js](./5-photo-reject.js) |
| 6. Handle multiple promises | [6-final-user.js](./6-final-user.js) |
| 7. Load balancer | [7-load_balancer.js](./7-load_balancer.js) |
| 8. Throw error / try catch | [8-try.js](./8-try.js) |
| 9. Throw an error | [9-try.js](./9-try.js) |
