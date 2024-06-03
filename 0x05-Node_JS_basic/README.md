# Project: 0x05. NodeJS Basics

![NodeJS Basics](./nodejs_basics.jpeg)

## Resources

### Read or watch:-

- [Node JS getting started](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Process API doc](https://node.readthedocs.io/en/latest/api/process/)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://github.com/remy/nodemon#nodemon)

## Tasks

### 0. [Executing basic javascript with Node JS](./0-console.js) :-

In the file 0-console.js, create a function named displayMessage that prints in STDOUT the string argument.

```bash
bob@dylan:~$ cat 0-main.js
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");

bob@dylan:~$ node 0-main.js
Hello NodeJS!
bob@dylan:~$
```

| Task | File |
| ---- | ---- |
| 1. Using Process stdin | [1-stdin.js](./1-stdin.js) |
| 2. Reading a file synchronously with Node JS | [2-read_file.js](./2-read_file.js) |
| 3. Reading a file asynchronously with Node JS | [3-read_file_async.js](./3-read_file_async.js) |
| 4. Create a small HTTP server using Node's HTTP module | [4-http.js](./4-http.js) |
| 5. Create a more complex HTTP server using Node's HTTP module | [5-http.js](./5-http.js) |
| 6. Create a small HTTP server using Express | [6-http_express.js](./6-http_express.js) |
| 7. Create a more complex HTTP server using Express | [7-http_express.js](./7-http_express.js) |
| 8. Organize a complex HTTP server using Express | [full_server/utils.js](./full_server/utils.js), [full_server/controllers/AppController.js](./full_server/controllers/AppController.js), [full_server/controllers/StudentsController.js](./full_server/controllers/StudentsController.js), [full_server/routes/index.js](./full_server/routes/index.js), [full_server/server.js](./full_server/server.js) |
