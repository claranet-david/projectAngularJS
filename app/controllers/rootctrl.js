(function(){
	angular
		.module('app')
		.controller('RootCtrl', RootCtrl);

		RootCtrl.$inject=['$scope', '$http', 'globalService', 'loginFBService'];

		function RootCtrl($scope, $http, globalService, loginFBService){

			console.log(globalService.getMessage());

		}
		
})();