// include the Lo-Dash library
const _ = require("lodash");

let sortItems = function (/* arguments */ items) {
    // return _.orderBy(items, 'quantity', 'desc');
    return _.sortBy(items, 'quantity').reverse();
}

// export the worker function as a nodejs module
module.exports = sortItems;
