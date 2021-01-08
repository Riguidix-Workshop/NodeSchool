module.exports = {
    getAmount: function(coinType) {
        // COINS:
        // [p]enny
        // [n]ickel
        // [d]ime
        // [q]uarter
        var coinsKeys = Object.keys(coins);

        var index = coinsKeys.indexOf(coinType);

        if (index != -1) {
            return coins[coinsKeys[index]];
        } else {
            throw new Error(`Unrecognized coin ${coinType}`);
        }
    },

    convertToChange: function(balance) {
        var result = [];

        while (balance > 0) {
            if (balance - 25 >= 0) {
                result.push('q');

                balance -= 25;
            } else if (balance - 10 >= 0) {
                result.push('d');

                balance -= 10;
            } else if (balance - 5 >= 0) {
                result.push('n');

                balance -= 5;
            } else if (balance - 1 >= 0) {
                result.push('p');

                balance -= 1;
            }

        }

        return result.sort();
    }
};