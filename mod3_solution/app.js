(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "http://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

// List of matched menu items
var items = [];

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var list = this;

  list.searchTerm="";

  list.found = MenuSearchService.getItems();

  list.getMatchedMenuItems = function (searchTerm) {
    if (items) {
        MenuSearchService.clearAll();
    }
    MenuSearchService.getMatchedMenuItems(list.searchTerm);
    list.check = MenuSearchService.checkList();
    console.log("'found' is: ", list.found);
  }

  list.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };

  list.checkList = function () {
    if (items.length === 0 ) {
      return true;
    }
    return false;
  }

  console.log("'found' is: ", list.found);

}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    if (!searchTerm) {
      service.clearAll();
      return items;
    }
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (result){
      for (var i = 0; i < result.data.menu_items.length; i++) {
        var des = result.data.menu_items[i];
        if (des.description.toLowerCase().indexOf(searchTerm) !== -1){
          items.push(des);
        }
      }
      return items;
    });
    // return response;
  };

  service.getItems = function () {
    return items;
  }

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  }

  service.clearAll = function () {
    while (items.length > 0) {
      items.pop();
    }
  }

  service.checkList = function () {
    if (items.length === 0 ) {
      return true;
    }
    return false;
  }
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;
  //
  // list.checkList = function () {
  //   if (items.length === 0 ) {
  //     return true;
  //   }
  //   return false;
  // }
};

})();
