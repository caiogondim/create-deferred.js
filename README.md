# create-deferred

Create deferred object (promise instance that can be resolved/reject from the
outside).

## Installation

```console
npm install --save create-deferred
```

## Usage

```js
const createDeferred = require('create-deferred')

const deferred = createDeferred()

deferred.promise // Promise object
deferred.resolve() // resolves above promise
deferred.rejects() // rejects above promise
```

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
