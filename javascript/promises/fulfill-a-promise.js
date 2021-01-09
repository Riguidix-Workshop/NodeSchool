'use strict';

require('es6-promise');

var promise = new Promise((fulfill, reject) => {
    setTimeout(() => {
        fulfill('FULFILLED!');
    }, 300);
});

promise.then((fulfilled) => {
    console.log(fulfilled);
});