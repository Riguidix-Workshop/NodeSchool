module.exports = {
    getAmount: function(coinType) {
        // COINS:
        // [p]enny
        // [n]ickel
        // [d]ime
        // [q]uarter

        var coins = {
            'p': 1,
            'n': 5,
            'd': 10,
            'q': 25
        }

        var coinsKeys = Object.keys(coins);

        var index = coinsKeys.indexOf(coinType);

        if (index != -1) {
            return coins[coinsKeys[index]];
        } else {
            throw new Error(`Unrecognized coin ${coinType}`);
        }
    }
};