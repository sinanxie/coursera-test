(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyShoppingController', ToBuyShoppingController)
.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
function ToBuyShoppingController(ShoppingListCheckOffService) {
  var ToBuyController = this;

  ToBuyController.items = ShoppingListCheckOffService.getToBuyItems();

  ToBuyController.boughtItem = function (itemIndex) {
    var item = ShoppingListCheckOffService.getItem(itemIndex);
    ShoppingListCheckOffService.checkOffItem(itemIndex);
    ShoppingListCheckOffService.addBoughtItem(item.name, item.quantity);
  }
}


AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
  var AlreadyBoughtController = this;

  AlreadyBoughtController.items = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of to buy
  var toBuy = [
    {
      name: "cookies",
      quantity: 10
    },
    {
      name: "apples",
      quantity: 8
    },
    {
      name: "oranges",
      quantity: 5
    },
    {
      name: "eggs",
      quantity: 12
    },
    {
      name: "breads",
      quantity: 4
    },
  ];

  // List of bought items
  var bought = [];

  service.checkOffItem = function (itemIndex) {
    toBuy.splice(itemIndex, 1);
  };

  service.addBoughtItem = function (itemName, quantity) {
    var item = {
      name: itemName,
      quantity: quantity
    };

    bought.push(item);
  }

  service.getItem = function (itemIndex) {
    return toBuy[itemIndex];
  }

  service.getToBuyItems = function () {
    return toBuy;
  };

  service.getBoughtItems = function () {
    return bought;
  };
}


})();
