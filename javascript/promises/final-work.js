const HTTP = require('q-io/http');

const SESSION_CACHE = 'http://localhost:7000';
const DATABASE = 'http://localhost:7001';

HTTP.read(SESSION_CACHE)
    .then((userID) => {
        HTTP.read(`${DATABASE}/${userID}`)
            .then((user) => {
                console.log(JSON.parse(user));
            })
            .catch((err) => {
                console.error(err);
            });
    });
