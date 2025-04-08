// Resolving a promise with the value 3
const resolvedPromise = Promise.resolve(3);
resolvedPromise.then(value => console.log('Resolved with:', value));

// Rejecting a promise with the string "Boo!"
const rejectedPromise = Promise.reject("Boo!");
rejectedPromise.catch(error => console.log('Rejected with:', error));
