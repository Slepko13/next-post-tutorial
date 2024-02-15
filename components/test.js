let promise = new Promise( resolve => resolve('Main'));

promise
    .then(console.log)
    .then(data => {
        let promise = new Promise( resolve => resolve('Inner'));
       promise.then(console.log)
    })
.then(() => console.log('end'))
