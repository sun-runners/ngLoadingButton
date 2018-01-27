'use strict';

angular.module('app', [
    'ui.router',
    'ngAria',
    'ngResource',
    'ngMaterial',
    'ngLoadingButton',
    'fullPage.js'
  ]).run(function($rootScope, $timeout, $state){

  $rootScope.window = window;
  $rootScope.$state = $state;
});
