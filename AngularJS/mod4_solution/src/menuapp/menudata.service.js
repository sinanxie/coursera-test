(function(){
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {

    console.log("Running service.getAllCategories()");

    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/categories.json"
    }).then(function (result) {
      console.log(result.data);
      return result.data;
    });
    return response;
  }

  service.getItemsForCategory = function (categoryShortName) {
    console.log("categoryShortName:" + categoryShortName);
    var response = $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json",
      params: {
        category: categoryShortName
      }
    }).then(function (result) {
      console.log(result.data.menu_items);
      return result.data.menu_items;
    });
    return response;
  }
}

})();
