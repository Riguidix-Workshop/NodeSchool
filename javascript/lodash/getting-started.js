// include the Lo-Dash library
const _ = require("lodash");

let worker = function (/* arguments */ list) {
    return _.filter(list, { active: true});
}

// export the worker function as a nodejs module
module.exports = worker;
