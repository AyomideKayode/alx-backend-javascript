# Project: 0x02. ES6 classes

## Resources

### Read or watch:-

- [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Metaprogramming](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/#symbolspecies)

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
```bash
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
```
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

## Tasks

0. [You used to attend a place like this at some point](./0-classroom.js) :

Implement a class named `ClassRoom`:

- Prototype: `export default class ClassRoom`
- It should accept one attribute named `maxStudentsSize` (Number) and assigned to `_maxStudentsSize`

```bash
bob@dylan:~$ cat 0-main.js
import ClassRoom from "./0-classroom.js";

const room = new ClassRoom(10);
console.log(room._maxStudentsSize)

ayomide@Kazzywiz:~/alx-backend-javascript/0x02-ES6_classes$ npm run dev 0-main.js 

> dev
> npx babel-node 0-main.js

10
ayomide@Kazzywiz:~/alx-backend-javascript/0x02-ES6_classes$ 
```

| Task | File |
| ---- | ---- |
| 1. Let's make some classrooms | [1-make_classrooms.js](./1-make_classrooms.js) |
| 2. A Course, Getters, and Setters | [2-hbtn_course.js](./2-hbtn_course.js) |
| 3. Methods, static methods, computed methods names..... MONEY | [3-currency.js](./3-currency.js) |
| 4. Pricing | [4-pricing.js](./4-pricing.js) |
| 5. A Building | [5-building.js](./5-building.js) |
| 6. Inheritance | [6-sky_high.js](./6-sky_high.js) |
| 7. Airport | [7-airport.js](./7-airport.js) |
| 8. Primitive - Holberton Class | [8-hbtn_class.js](./8-hbtn_class.js) |
| 9. Hoisting | [9-hoisting.js](./9-hoisting.js) |
| 10. Vroom | [10-car.js](./10-car.js) |
