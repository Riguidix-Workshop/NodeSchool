var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    
    balanceManager.increaseBalance(value);
  },

  releaseChange: function(){
    var currentBalance = balanceManager.getBalance();

    balanceManager.decreaseBalance(currentBalance);

    return this.convertToChange(currentBalance);
  },

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);

    balanceManager.decreaseBalance(product.price);

    return product;
  }

};
