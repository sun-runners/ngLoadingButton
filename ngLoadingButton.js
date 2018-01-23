/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = "<button>\n  <div ng-transclude ng-show=\"!loading\"></div>\n  <div ng-show=\"loading\" style=\"display:block; position:absolute; top:50%; left:50%; transform: translate( -50%, -50% );\">\n    <div class=\"sk-rotating-plane\" ng-if=\"mode=='rotating-plane'\"></div>\n    <div class=\"sk-double-bounce\" ng-if=\"mode=='double-bounce'\">\n      <div class=\"sk-child sk-double-bounce1\"></div>\n      <div class=\"sk-child sk-double-bounce2\"></div>\n    </div>\n    <div class=\"sk-wave\" ng-if=\"mode=='wave'\">\n      <div class=\"sk-rect sk-rect1\"></div>\n      <div class=\"sk-rect sk-rect2\"></div>\n      <div class=\"sk-rect sk-rect3\"></div>\n      <div class=\"sk-rect sk-rect4\"></div>\n      <div class=\"sk-rect sk-rect5\"></div>\n    </div>\n    <div class=\"sk-wandering-cubes\" ng-if=\"mode=='wandering-cubes'\">\n      <div class=\"sk-cube sk-cube1\"></div>\n      <div class=\"sk-cube sk-cube2\"></div>\n    </div>\n    <div class=\"sk-spinner sk-spinner-pulse\" ng-if=\"mode=='spinner-pulse'\"></div>\n    <div class=\"sk-chasing-dots\" ng-if=\"mode=='chasing-dots'\">\n      <div class=\"sk-child sk-dot1\"></div>\n      <div class=\"sk-child sk-dot2\"></div>\n    </div>\n    <div class=\"sk-three-bounce\" ng-if=\"mode=='three-bounce'\">\n      <div class=\"sk-child sk-bounce1\"></div>\n      <div class=\"sk-child sk-bounce2\"></div>\n      <div class=\"sk-child sk-bounce3\"></div>\n    </div>\n    <div class=\"sk-circle\" ng-if=\"mode=='circle'\">\n      <div class=\"sk-circle1 sk-child\"></div>\n      <div class=\"sk-circle2 sk-child\"></div>\n      <div class=\"sk-circle3 sk-child\"></div>\n      <div class=\"sk-circle4 sk-child\"></div>\n      <div class=\"sk-circle5 sk-child\"></div>\n      <div class=\"sk-circle6 sk-child\"></div>\n      <div class=\"sk-circle7 sk-child\"></div>\n      <div class=\"sk-circle8 sk-child\"></div>\n      <div class=\"sk-circle9 sk-child\"></div>\n      <div class=\"sk-circle10 sk-child\"></div>\n      <div class=\"sk-circle11 sk-child\"></div>\n      <div class=\"sk-circle12 sk-child\"></div>\n    </div>\n    <div class=\"sk-cube-grid\" ng-if=\"mode=='cube-grid'\">\n      <div class=\"sk-cube sk-cube1\"></div>\n      <div class=\"sk-cube sk-cube2\"></div>\n      <div class=\"sk-cube sk-cube3\"></div>\n      <div class=\"sk-cube sk-cube4\"></div>\n      <div class=\"sk-cube sk-cube5\"></div>\n      <div class=\"sk-cube sk-cube6\"></div>\n      <div class=\"sk-cube sk-cube7\"></div>\n      <div class=\"sk-cube sk-cube8\"></div>\n      <div class=\"sk-cube sk-cube9\"></div>\n    </div>\n    <div class=\"sk-fading-circle\" ng-if=\"mode=='fading-circle'\">\n      <div class=\"sk-circle1 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle2 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle3 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle4 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle5 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle6 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle7 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle8 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle9 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle10 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle11 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle12 sk-circle\" style=\"margin: 0;\"></div>\n    </div>\n    <div class=\"sk-folding-cube\" ng-if=\"mode=='folding-cube'\">\n      <div class=\"sk-cube1 sk-cube\"></div>\n      <div class=\"sk-cube2 sk-cube\"></div>\n      <div class=\"sk-cube4 sk-cube\"></div>\n      <div class=\"sk-cube3 sk-cube\"></div>\n    </div>\n  </div>\n</button>\n";

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

(function(angular) {
  angular.module('ngLoadingButton', ['ng'])
    .directive('ngLoadingButton', function() {
      return {
        link: function(scope, element, attrs) {
        },
        replace: true,
        transclude: true,
        scope: {
          loading:"=nlbLoading",
          mode:"=nlbMode"
        },
        restrict: 'EA',
        template: __webpack_require__(0)
      };
    });
})(angular);


/***/ }
/******/ ]);