/**
 * @param  {[type]} data [description]
 * @return {[type]}      [description]
 */
function getPopulations(data) {
    return _.forEach(data, function(item) {
        if (item.population > 1) {
            item.size = 'big';
        } else if (item.population > 0.5) {
            item.size = 'med'
        } else {
            item.size = 'small'
        }
    });
}

// include the Lo-Dash library
const _ = require("lodash");

let worker = function (/* arguments */ items) {
    return getPopulations(items);
}

// export the worker function as a nodejs module
module.exports = worker;
