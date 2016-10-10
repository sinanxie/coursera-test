(function(){
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'src/menuapp/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
