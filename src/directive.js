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
        template: require("html-loader!./template.html")
      };
    });
})(angular);
