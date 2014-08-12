/*global alert, console */
'use strict';

(function () {

  /* @ngInject */
  function MainController($scope, $http) {
    var image;
    var ready = false;

    $http.get('https://dl.dropboxusercontent.com/u/80497/photoHosting/design.png')
    .success(function (res) {
      image = res;
      ready = true;
      console.log('succeeded, img.length:' + image.length);
    }).error(function (res, status) {
      console.log('failed, status:' + status);
    });

    $scope.test = 'hello';
    $scope.doPut = function () {
      console.log('putting...');
      $http({
        method: 'put',
        //url: 'http://static.pizza.wixpress.com/_api/add_file_named2',
        url: 'http://static.pizza.wixpress.com/_api/add_file_named2',
        headers: {
          'X-Prospero-Filename': '98080808098.jpg',
          'X-Prospero-Mediasource': 'media'
        },
        data: image
      }).success(function (data, status) {
        debugger;
        alert('** SUCCESS ** Status:' + status);
      }).error(function (data, status) {
        debugger;
        alert('** FAILED ** Status:' + status);
      });
    };

    $scope.isReady = function () {
      return ready;
    };

  }

  angular
    .module('sandboxAppInternal')
    .controller('MainController', MainController);

})();
