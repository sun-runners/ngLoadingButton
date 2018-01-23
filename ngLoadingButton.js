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

module.exports = "<button id=\"{{id}}\" ng-disabled=\"loading\">\n  <div ng-transclude ng-show=\"!loading\" style=\"display:block; position:absolute; top:50%; left:50%; transform: translate( -50%, -50% );\"></div>\n  <div ng-show=\"loading && text\" style=\"display:block; position:absolute; top:50%; left:50%; transform: translate( -50%, -50% );\">\n    {{text}}{{'.'.repeat(count)}}\n  </div>\n  <div ng-show=\"loading && !text\" style=\"display:block; position:absolute; float:none; top:50%; left:50%; transform: translate( -50%, -50% );\"\n  ng-switch on=\"mode\">\n    <div class=\"sk-rotating-plane\" ng-switch-when=\"rotating-plane\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n    <div class=\"sk-double-bounce\" ng-switch-when=\"double-bounce\">\n      <div class=\"sk-child sk-double-bounce1\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-child sk-double-bounce2\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n    </div>\n    <div class=\"sk-wave\" ng-switch-when=\"wave\">\n      <div class=\"sk-rect sk-rect1\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-rect sk-rect2\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-rect sk-rect3\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-rect sk-rect4\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-rect sk-rect5\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n    </div>\n    <div class=\"sk-wandering-cubes\" ng-switch-when=\"wandering-cubes\">\n      <div class=\"sk-cube sk-cube1\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-cube sk-cube2\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n    </div>\n    <div class=\"sk-spinner sk-spinner-pulse\" ng-switch-when=\"spinner-pulse\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n    <div class=\"sk-chasing-dots\" ng-switch-when=\"chasing-dots'\">\n      <div class=\"sk-child sk-dot1\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-child sk-dot2\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n    </div>\n    <div class=\"sk-three-bounce\" ng-switch-when=\"three-bounce\">\n      <div class=\"sk-child sk-bounce1\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-child sk-bounce2\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-child sk-bounce3\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n    </div>\n    <div class=\"sk-circle\" ng-switch-when=\"circle\">\n      <div class=\"sk-circle1 sk-child\"></div>\n      <div class=\"sk-circle2 sk-child\"></div>\n      <div class=\"sk-circle3 sk-child\"></div>\n      <div class=\"sk-circle4 sk-child\"></div>\n      <div class=\"sk-circle5 sk-child\"></div>\n      <div class=\"sk-circle6 sk-child\"></div>\n      <div class=\"sk-circle7 sk-child\"></div>\n      <div class=\"sk-circle8 sk-child\"></div>\n      <div class=\"sk-circle9 sk-child\"></div>\n      <div class=\"sk-circle10 sk-child\"></div>\n      <div class=\"sk-circle11 sk-child\"></div>\n      <div class=\"sk-circle12 sk-child\"></div>\n    </div>\n    <style> #{{id}} div.sk-circle div.sk-child:before { background-color: {{color||'black'}}; } </style>\n    <div class=\"sk-cube-grid\" ng-switch-when=\"cube-grid\">\n      <div class=\"sk-cube sk-cube1\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-cube sk-cube2\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-cube sk-cube3\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-cube sk-cube4\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-cube sk-cube5\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-cube sk-cube6\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-cube sk-cube7\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-cube sk-cube8\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n      <div class=\"sk-cube sk-cube9\" ng-style=\"{'background-color':'{{color||'black'}}'}\"></div>\n    </div>\n    <div class=\"sk-fading-circle\" ng-switch-when=\"fading-circle\">\n      <div class=\"sk-circle1 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle2 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle3 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle4 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle5 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle6 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle7 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle8 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle9 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle10 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle11 sk-circle\" style=\"margin: 0;\"></div>\n      <div class=\"sk-circle12 sk-circle\" style=\"margin: 0;\"></div>\n    </div>\n    <style> #{{id}} div.sk-fading-circle div.sk-circle:before { background-color: {{color||'black'}}; } </style>\n    <div class=\"sk-folding-cube\" ng-switch-when=\"folding-cube\">\n      <div class=\"sk-cube1 sk-cube\"></div>\n      <div class=\"sk-cube2 sk-cube\"></div>\n      <div class=\"sk-cube4 sk-cube\"></div>\n      <div class=\"sk-cube3 sk-cube\"></div>\n    </div>\n    <style> #{{id}} div.sk-folding-cube div.sk-cube:before { background-color: {{color||'black'}}; } </style>\n  </div>\n</button>\n";

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

(function(angular) {
  var ngLoadingButtonUID = {
  	_current: 0,
  	getNew: function(){
  		this._current++;
  		return this._current;
  	}
  };
  angular.module('ngLoadingButton', ['ng'])
    .directive('ngLoadingButton', function($interval) {
      return {
        link: function(scope, element, attrs) {
          scope.id = 'ngLoadingButton_'+ngLoadingButtonUID.getNew();

          // Watch Function Section
          var interval_time;
          scope.count = 0;
          scope.$watch('loading', function(){
            if(scope.loading){
              interval_time = $interval(function(){
                if(scope.count>=3) scope.count = 1;
                else scope.count += 1;
              }, 300);
            } else{
              $interval.cancel(interval_time);
              scope.count = 0;
            }
          });
        },
        replace: true,
        transclude: true,
        scope: {
          loading:"=nlbLoading",
          mode:"=nlbMode",
          color:"=nlbColor",
          text:"=nlbText"
        },
        restrict: 'EA',
        template: __webpack_require__(0)
      };
    });
})(angular);


/***/ }
/******/ ]);