// include the Lo-Dash library
const _ = require("lodash");

let worker = function (/* arguments */ list) {
    let alphabeticalOrder = _.chain(list).sortBy().map((item) => {
        return item.toUpperCase() + 'CHAINED';
    }).value();

    return alphabeticalOrder;
}

// export the worker function as a nodejs module
module.exports = worker;
