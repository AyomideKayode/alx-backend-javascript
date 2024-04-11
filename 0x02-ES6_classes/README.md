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

1. [Let's make some classrooms](./1-make_classrooms.js) :

Import the `ClassRoom` class from `0-classroom.js`.

Implement a function named `initializeRooms`. It should return an array of 3 `ClassRoom` objects with the sizes 19, 20, and 34 (in this order).

```bash
bob@dylan:~$ cat 1-main.js
import initializeRooms from './1-make_classrooms.js';

console.log(initializeRooms());

bob@dylan:~$ 
ayomide@Kazzywiz:~/alx-backend-javascript/0x02-ES6_classes$ npm run dev 1-main.js 

> dev
> npx babel-node 1-main.js

[
  ClassRoom { _maxStudentsSize: 19 },
  ClassRoom { _maxStudentsSize: 20 },
  ClassRoom { _maxStudentsSize: 34 }
]
ayomide@Kazzywiz:~/alx-backend-javascript/0x02-ES6_classes$  
```

2. [A Course, Getters, and Setters](./2-hbtn_course.js) :

Implement a class named `HolbertonCourse`:

- Constructor attributes:
  - `name` (String)
  - `length` (Number)
  - `students` (array of Strings)

- Make sure to verify the type of attributes during object creation
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter and setter for each attribute.

```bash
bob@dylan:~$ cat 2-main.js
import HolbertonCourse from "./2-hbtn_course.js";

const c1 = new HolbertonCourse("ES6", 1, ["Bob", "Jane"])
console.log(c1.name);
c1.name = "Python 101";
console.log(c1);

try {
    c1.name = 12;
} 
catch(err) {
    console.log(err);
}

try {
    const c2 = new HolbertonCourse("ES6", "1", ["Bob", "Jane"]);
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 2-main.js 
ES6
HolbertonCourse {
  _name: 'Python 101',
  _length: 1,
  _students: [ 'Bob', 'Jane' ]
}
TypeError: Name must be a string
    ...
TypeError: Length must be a number
    ...
bob@dylan:~$ 
```

3. [Methods, static methods, computed methods names..... MONEY](./3-currency.js) :

Implement a class named `Currency`:

- - Constructor attributes:
  - code (String)
  - name (String)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullCurrency` that will return the attributes in the following format `name (code)`.

```bash
bob@dylan:~$ cat 3-main.js
import Currency from "./3-currency.js";

const dollar = new Currency('$', 'Dollars');
console.log(dollar.displayFullCurrency());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 3-main.js 
Dollars ($)
bob@dylan:~$ 
```

4. [Pricing](./4-pricing.js) :

Import the class `Currency` from `3-currency.js`

Implement a class named `Pricing`:

- Constructor attributes:
  - `amount` (Number)
  - `currency` (Currency)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullPrice` that returns the attributes in the following format `amount currency_name (currency_code)`.
- Implement a static method named `convertPrice`. It should accept two arguments: `amount` (Number), `conversionRate` (Number). The function should return the amount multiplied by the conversion rate.

```bash
bob@dylan:~$ cat 4-main.js
import Pricing from './4-pricing.js';
import Currency from './3-currency.js';

const p = new Pricing(100, new Currency("EUR", "Euro"))
console.log(p);
console.log(p.displayFullPrice());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 4-main.js 
Pricing {
  _amount: 100,
  _currency: Currency { _code: 'EUR', _name: 'Euro' }
}
100 Euro (EUR)
bob@dylan:~$ 
```

5. [A Building](./5-building.js) :

Implement a class named `Building`:

- Constructor attributes:
  - `sqft` (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter for each attribute.
- Consider this class as an abstract class. And make sure that any class that extends from it should implement a method named `evacuationWarningMessage`.
  - If a class that extends from it does not have a `evacuationWarningMessage` method, throw an error with the message `Class extending Building must override evacuationWarningMessage`

```bash
bob@dylan:~$ cat 5-main.js
import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200)
}
catch(err) {
    console.log(err);
}

bob@dylan:~$ 
bob@dylan:~$ npm run dev 5-main.js 
Building { _sqft: 100 }
Error: Class extending Building must override evacuationWarningMessage
    ...
bob@dylan:~$ 
```

6. [Inheritance](./6-sky_high.js) :

Import `Building` from `5-building.js`.

Implement a class named `SkyHighBuilding` that extends from `Building`:

- Constructor attributes:
  - `sqft` (Number) (must be assigned to the parent class `Building`)
  - `floors` (Number)
- Each attribute must be stored in an “underscore” attribute version (ex: `name` is stored in `_name`)
- Implement a getter for each attribute.
- Override the method named `evacuationWarningMessage` and return the following string `Evacuate slowly the NUMBER_OF_FLOORS floors`.

```bash
bob@dylan:~$ cat 6-main.js
import SkyHighBuilding from './6-sky_high.js';

const building = new SkyHighBuilding(140, 60);
console.log(building.sqft);
console.log(building.floors);
console.log(building.evacuationWarningMessage());

bob@dylan:~$ 
bob@dylan:~$ npm run dev 6-main.js 
140
60
Evacuate slowly the 60 floors
bob@dylan:~$ 
```

| Task | File |
| ---- | ---- |
| 7. Airport | [7-airport.js](./7-airport.js) |
| 8. Primitive - Holberton Class | [8-hbtn_class.js](./8-hbtn_class.js) |
| 9. Hoisting | [9-hoisting.js](./9-hoisting.js) |
| 10. Vroom | [10-car.js](./10-car.js) |
