var bmi = angular.module('starter.controllers', [])


bmi.controller('BmiController', function($scope) {
  $scope.data = {};
  $scope.calculateBMI = function() {
    var person = new Person({
      weight: $scope.data.weight,
      height: $scope.data.height
    });
    person.calculate_bmi($scope.data.unit);
    $scope.person = person;
  };
});

bmi.controller('AboutController', function() {

});
