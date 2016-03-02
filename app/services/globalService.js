//globalService defined just for testing purposes

(function(){
	angular
		.module('app')
		.service('globalService', globalService);

		globalService.$inject = [];

		function globalService(){
			var _message = "Hello There!";
			this.getMessage = function(){
				return _message;
			}
		};
})();