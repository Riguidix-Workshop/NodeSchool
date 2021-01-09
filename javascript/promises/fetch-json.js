const qio = require('q-io/http');

qio
    .read('http://localhost:1337')
    .then((json) => console.log(JSON.parse(json)))
    .catch((err) => console.error(err));
