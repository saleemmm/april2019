myApp.controller('registerCtrl', ['$scope', function($scope) {
    $scope.formInfo = {};
    console.log($scope.formInfo);
    $scope.saveData = function() {
        $scope.firstNameRequired = '';
        $scope.lastNameRequired = '';
      $scope.emailRequired = '';
        $scope.ph_numbr = /^\+?\d{10}$/;
        $scope.genders = ["Female", "Male"];



        if (!$scope.formInfo.firstName) {
            $scope.firstNameRequired = 'firstName Required';
        }
        if (!$scope.formInfo.lastName) {
            $scope.lastNameRequired = 'lastName Required';
        }

        if (!$scope.formInfo.Email) {
        $scope.emailRequired = 'Email Required';
      }
        if (!$scope.formInfo.numbr) {
            $scope.ph_numbrRequired = 'ph_numbrRequired';
        }
        if (!$scope.formInfo.gender) {
            $scope.genderRequired = 'genderRequired';
        }


    };
  }])
