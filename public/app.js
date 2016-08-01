var app=angular.module('myApp',['controllers','ngRoute']);
app.config(function($routeProvider,$locationProvider){
	$routeProvider
	.when('/',{
		template:"Welcome to homepage"
	})
	.when('/signup',{
		templateUrl:'views/signup.html',
		controller:'SignupController'

	})
	.when('/login',{
		templateUrl:'views/login.html',
		controller:'LoginController'
	})
	.when('/view1',{
		templateUrl:'views/view1.html',
		// controller:'ControllerTwo'
	})

	.otherwise({
		redirectTo : '/'

	});
	$locationProvider.html5Mode(true);
	

});

