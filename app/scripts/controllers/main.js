/*global alert, console */
'use strict';

(function () {

  /* @ngInject */
  function MainController($scope, $http) {

    $scope.test = 'hello';
    $scope.doPut = function () {
      console.log('putting...');
      $http({
        method: 'put',
        url: 'http://static.pizza.wixpress.com/_api/statics/add_file_named2',
        headers: {
          'X-Prospero-Filename': '98080808098.jpg',
          'X-Prospero-Mediasource': 'media'
        },
        data: 'alert(\'hello\');'
      }).success(function (data, status) {
        alert('** SUCCESS ** Status:' + status);
      }).error(function (data, status) {
        alert('** FAILED ** Status:' + status);
      });
    };

  }

  angular
    .module('sandboxAppInternal')
    .controller('MainController', MainController);

})();
