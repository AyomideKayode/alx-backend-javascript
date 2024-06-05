# Project: 0x06. Unittests in JS

![Can't Skip Tests](./js_unittests.jpeg)

## Resources

### Read or watch:-

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/api/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/en/guide/routing.html)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

## Tasks

### 0. Basic test with Mocha and Node assertion library | [package.json](./package.json), [0-calcul.js](./0-calcul.js), [0-calcul.test.js](./0-calcul.test.js) :-

**Install Mocha using npm:**

```bash
npm install mocha --save-dev
```

- Set up a scripts in your `package.json` to quickly run Mocha using `npm test`
- You have to use `assert`

**Create a new file named `0-calcul.js`:**

- Create a function named `calculateNumber`. It should accepts two arguments (number) `a` and `b`
- The function should round `a` and `b` and return the sum of it

**Test cases:**

- Create a file `0-calcul.test.js` that contains test cases of this function
- You can assume `a` and `b` are always number
- Tests should be around the “rounded” part

**Tips:**

- For the sake of the example, this test suite is slightly extreme and probably not needed
- However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

**Requirements:**

- You have to use `assert`
- You should be able to run the test suite using npm test `0-calcul.test.js`
- Every test should pass without any warning

Expected output

```bash
> const calculateNumber = require("./0-calcul.js");
> calculateNumber(1, 3)
4
> calculateNumber(1, 3.7)
5
> calculateNumber(1.2, 3.7)
5
> calculateNumber(1.5, 3.7)
6
> 
```

Run test

```bash
bob@dylan:~$ npm test 0-calcul.test.js 

> task_0@1.0.0 test /root
> ./node_modules/mocha/bin/mocha "0-calcul.test.js"

  calculateNumber
    ✓ ...
    ✓ ...
    ✓ ...
    ...

  130 passing (35ms)
bob@dylan:~$ 
```

### 1. Combining descriptions | [1-calcul.js](./1-calcul.js), [1-calcul.test.js](./1-calcul.test.js) :-

**Create a new file named `1-calcul.js`:**

- Upgrade the function you created in the previous task (`0-calcul.js`)
- Add a new argument named `type` at first argument of the function. `type` can be `SUM`, `SUBTRACT`, or `DIVIDE` (string)
- When type is `SUM`, round the two numbers, and add `a` and `b`
- When type is `SUBTRACT`, round the two numbers, and subtract `b` from `a`
- When type is `DIVIDE`, round the two numbers, and divide `a` with `b` - if the rounded value of `b` is equal to `0`, return the string `Error`

**Test cases:**

- Create a file `1-calcul.test.js` that contains test cases of this function
- You can assume `a` and `b` are always number
- Usage of `describe` will help you to organize your test cases

`Tips:`

- For the sake of the example, this test suite is slightly extreme and probably not needed
- However, remember that your tests should not only verify what a function is supposed to do, but also the edge cases

`Requirements:`

- You have to use `assert`
- You should be able to run the test suite using `npm test 1-calcul.test.js`
- Every test should pass without any warning

Expected output

```bash
> const calculateNumber = require("./1-calcul.js");
> calculateNumber('SUM', 1.4, 4.5)
6
> calculateNumber('SUBTRACT', 1.4, 4.5)
-4
> calculateNumber('DIVIDE', 1.4, 4.5)
0.2
> calculateNumber('DIVIDE', 1.4, 0)
'Error'
```

### 2. Basic test using Chai assertion library | [2-calcul_chai.js](./2-calcul_chai.js), [2-calcul_chai.test.js](./2-calcul_chai.test.js) :-

While using Node assert library is completely valid, a lot of developers prefer to have a behavior driven development style. This type being easier to read and therefore to maintain.

**Let’s install Chai with npm:**

```bash
npm install chai --save-dev
```

- Copy the file `1-calcul.js` in a new file `2-calcul_chai.js` (same content, same behavior)
- Copy the file `1-calcul.test.js` in a new file `2-calcul_chai.test.js`
- Rewrite the test suite, using `expect` from `Chai`

**Tips:**

- Remember that test coverage is always difficult to maintain. Using an easier style for your tests will help you
- The easier your tests are to read and understand, the more other engineers will be able to fix them when they are modifying your code

**Requirements:**

- You should be able to run the test suite using `npm test 2-calcul_chai.test.js`
- Every test should pass without any warning

| Task | File |
| ---- | ---- |
| 3. Spies | [utils.js](./utils.js), [3-payment.js](./3-payment.js), [3-payment.test.js](./3-payment.test.js) |
| 4. Stubs | [4-payment.js](./4-payment.js), [4-payment.test.js](./4-payment.test.js) |
| 5. Hooks | [5-payment.js](./5-payment.js), [5-payment.test.js](./5-payment.test.js) |
| 6. Async tests with done | [6-payment_token.js](./6-payment_token.js), [6-payment_token.test.js](./6-payment_token.test.js) |
| 7. Skip | [7-skip.test.js](./7-skip.test.js) |
| 8. Basic Integration testing | [8-api/package.json](./8-api/package.json), [8-api/api.js](./8-api/api.js), [8-api/api.test.js](./8-api/api.test.js) |
| 9. Regex integration testing | [9-api/api.js](./9-api/api.js), [9-api/api.test.js](./9-api/api.test.js), [9-api/package.json](./9-api/package.json) |
| 10. Deep equality & Post integration testing | [10-api/api.js](./10-api/api.js), [10-api/api.test.js](./10-api/api.test.js), [10-api/package.json](./10-api/package.json) |
