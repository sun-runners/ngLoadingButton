(function(angular) {
  var ngLoadingButtonUID = {
  	_current: 0,
  	getNew: function(){
  		this._current++;
  		return this._current;
  	}
  };
  angular.module('ngLoadingButton', ['ng'])
    .directive('ngLoadingButton', ['$interval', function($interval) {
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
        template: require("html-loader!./template.html")
      };
    }]);
  })(angular);
