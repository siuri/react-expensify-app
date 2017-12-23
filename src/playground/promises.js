const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     nane: 'Jung Hyun Kim',
        //     age: 41
        // });
        reject('Something went wrong!!!')
    }, 1500)
});

promise.then((data) => {
    console.log('1', data);
}).catch((error) => {
    console.log('error:', error);
});
