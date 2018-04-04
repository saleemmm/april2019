myApp.controller('dash_board', ['$scope', function($scope){
        $scope.user_password = "";
        $scope.confirm_password = "";

    }])
    .directive('passwordVerify', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, elem, attrs, ngModel) {
                scope.$watch(attrs.ngModel, function() {
                    if (scope.confirm_password === scope.user_password) {
                        scope.pw.confirm_password.$setValidity('passwordVerify', true);
                        scope.pw.user_password.$setValidity('passwordVerify', true);
                    } else if (scope.confirm_password !== scope.user_password) {
                        scope.pw.confirm_password.$setValidity('passwordVerify', false);
                        scope.pw.user_password.$setValidity('passwordVerify', false);
                    }
                });
            }
        };
    });
