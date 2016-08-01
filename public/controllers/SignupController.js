angular.module('controllers')
.controller('SignupController',function($scope,$http){
	
	$scope.create = function(){
		if(!$scope.username){
			alert("Plaese enter username");
			return;
		}
		if(!$scope.password){
			alert("Enter passsword");
			return;
		}
		if($scope.password.length<6){			
			alert('Enter password of minimum 6 characters');
			return;
		}
		if($scope.password!=$scope.reEnterPassword){
			alert('password mismatch');
			return;
		}





		$http({
			method : "POST",
			url: "/api/signup",
			data : {username: $scope.username, password:$scope.password}
		}).then(function(resp){
			console.log(resp);
		}, function(err){
			console.log(err);
		});
	}


});