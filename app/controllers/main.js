(function(){

    angular
	    .module('app')
	    .controller('MainCtrl', MainCtrl);

    MainCtrl.$inject=['$scope', '$http', 'globalService'];

    function MainCtrl($scope, $http, globalService){

        var vm = this;
        vm.welcometext = globalService.getMessage();
        console.log(vm.welcometext);

    } 
})();