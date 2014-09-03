var indexController = angular.module('indexController', []);

indexController.controller('indexCtrl', ['$scope', '$http',
  function ($scope, $http) {
  	$http({
  		"method":"GET",
  		"url":"/screens"
  	}).success(function(data){
  		$scope.formTemplate = data;
  	});
    

    $scope.formData = {
    	"first": "Marty",
    	"last": "Elvidge",
    	"fileId":1056,
    	"submissionId": 100456
    };

    $scope.processForm = function() {
		alert(JSON.stringify($scope.formData));
    };

  }]);