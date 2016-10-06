(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.name = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function () {
    $scope.message = checkNum($scope.name);
  };

  function checkNum(string){
    var strArr = string.split(",");
    var totalNum = 0;
    for (var i = 0; i < strArr.length; i++) {
      if (strArr[i].length!=0) {
        totalNum ++;
      }
    }
    $scope.myStyle = {
      "color" : "green",
      "border": "2px solid green",
      // "display": "inline-block"
    };
    if (totalNum == 0) {
      $scope.myStyle = {
        "color" : "red",
        "border": "2px solid red"
      };
      return "Please enter data first";
    } else if (totalNum < 4) {
      return "Enjoy!";
    } else {
      return "Too much!";
    };
  };

};


})();
