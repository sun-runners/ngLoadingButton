ngLoadingButton
=======

A library that animates buttons when loading



DEMO
-------
https://kimsunwook.github.io/ngLoadingButton/index



INSTALL
-------

```
bower install ngLoadingButton --save
```



USAGE
-----

Make sure you include the module 'ngLoadingButton' in your application config

```
var app = angular.module('myApp', [
  'ngLoadingButton',
  ...
]);
```

You can choose among 11 modes from SpinKit (https://github.com/tobiasahlin/SpinKit).
  - rotating-plane
  - double-bounce
  - wave
  - wandering-cubes
  - spinner-pulse
  - chasing-dots
  - three-bounce
  - circle
  - cube-grid
  - fading-circle
  - folding-cube

```
<ng-loading-button
  nlb-loading="loading"
  nlb-mode="'rotating-plane'"
  ng-click="save();">
  Save
</ng-loading-button>
```

When loading takes a certain amount of time, such as saving or deleting, you can give the button an animation effect.

So you can easily prevent the user from clicking the button more than once when loading.

```
angular.module('app', ['ngLoadingButton']).run(function($rootScope, $timeout){
  $rootScope.loading = false;
  $rootScope.save = function(){
    $rootScope.loading = true;
    $timeout(function(){
      $rootScope.loading = false;
    }, 5000);
  };
});
```



Easy!
