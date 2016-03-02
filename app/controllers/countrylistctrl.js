(function(){

	angular
		.module('app')
		.controller('CountryListCtrl', CountryListCtrl);

	CountryListCtrl.$inject = ['$scope','$http'];


	function CountryListCtrl($scope, $http){

		var vm = this;

		vm.name = 'TEST NAME OWN SCOPE';

		console.log(vm.name);

		$http.get('data/countries.json').success(function(data) {
			vm.countries = data;
		});

	}
})();