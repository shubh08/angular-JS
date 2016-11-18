(function () {
  angular.module('nameCalculator',[])
  .controller('nameController',function ($scope) {

    $scope.name="Shubham";
    $scope.nameLength=0;
    //$scope.nameLength=nameCalculator();

    $scope.nameLengthCalculator=function(){

      var length=namee($scope.name);
      $scope.nameLength=length;

    }

    function namee(String) {

      return String.length;

    }
  })
})();
