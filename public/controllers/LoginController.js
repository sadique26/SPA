angular.module('controllers')
.controller('LoginController', function($scope,$http){
$scope.message="LoginController";
$scope.loggedIn=function(){
	if($scope.password.length<6){
		console.log('password length must be minimum of 6 characters');
		return;

	}


		$http({
		method:"POST",
		url:'api/login',
		data:{username:$scope.username,password:$scope.password}
		}).then(function(resp){
			console.log(resp);
			$scope.message=resp.data.message;

			},
			function(err){
			// console.log(err);
			$scope.message = err.data.message;
		});

}

});
