var balanceManager = require('./balanceManager');
var changeHandler = require('./changeHandler');
var productInventory = require('./productInventory');

module.exports = {
  getProducts: function() { 
    return products;
  },

  insertCoin: function(coinType){
    var value = changeHandler.getAmount(coinType);
    
    balanceManager.increaseBalance(value);
  },

  releaseChange: function(){
    var balance = balanceManager.getBalance();

    balanceManager.decreaseBalance(balance);

    return changeHandler.convertToChange(balance);
  },

  vendProduct: function(productId){
    var product = productInventory.getProduct(productId);

    balanceManager.decreaseBalance(product.price);

    return product;
  }

};
