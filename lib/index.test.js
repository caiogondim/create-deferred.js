const typeFrom = require('type-from')
const createDeferred = require('./index')

it('exports a Promise', () => {
  const deferred = createDeferred()
  expect(typeFrom(deferred.promise)).toEqual('promise')
})

it('exports resolve method', done => {
  const deferred = createDeferred()
  expect(typeFrom(deferred.resolve)).toEqual('function')

  deferred.promise.then(() => done())
  deferred.resolve()
})

it('exports reject method', done => {
  const deferred = createDeferred()
  expect(typeFrom(deferred.resolve)).toEqual('function')

  deferred.promise.catch(() => {}).then(() => done())
  deferred.reject()
})
