// include the Lo-Dash library
const _ = require("lodash");

let worker = function (/* arguments */ countries) {
    let groups = {
        hot: [],
        warm: []
    };

    const check_temp = (item) => item > 19;

    _.forEach(countries, function (town, townname) {

        if (_.every(town, check_temp)) {
            groups.hot.push(townname);
        } else if (_.some(town, check_temp)) {
            groups.warm.push(townname);
        }

    });

    return groups;

}

// export the worker function as a nodejs module
module.exports = worker;
