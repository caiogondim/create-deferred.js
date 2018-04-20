function createDeferred() {
  const deferred = {
    promise: null,
    resolve: null,
    reject: null
  }

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })

  return deferred
}

module.exports = createDeferred
