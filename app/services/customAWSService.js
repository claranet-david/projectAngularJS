// AWS Operations over SDK service

(function(){
	angular
		.module('app')
		.service('customAWSService', customAWSService);

		customAWSService.$inject = [];

		function customAWSService(){

			var vm = this;

			vm.roleArn = 'arn:aws:iam::419400150602:role/myAppFBRole';
			vm.bucketName = 'thabeat--js-framework';
			AWS.config.region = 'eu-west-1';
			
			vm.bucket = new AWS.S3({
			    params: {
			        Bucket: vm.bucketName
			    }
			});

		}
})();