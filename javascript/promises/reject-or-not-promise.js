'use strict';

require('es6-promise');

var promise = new Promise((fulfill, reject) => {
    fulfill('I FIRED');

    reject(new Error('I DID NOT FIRE'));
});

function onRejected (error) {
    console.log(error.message);
}

promise.then((fulfilled) => {
    console.log(fulfilled);
}, (onRejected) => {
    onRejected(onRejected);
});