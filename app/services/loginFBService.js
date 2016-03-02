// loginFBService

(function(){
	angular
		.module('app')
		.service('loginFBService', loginFBService);

		loginFBService.$inject = ['customAWSService']

		function  loginFBService(customAWSService){
			/*!
			* Login to your application using Facebook.
			* Uses the Facebook SDK for JavaScript available here:
			* https://developers.facebook.com/docs/javascript/gettingstarted/
			*/
			
			//Facebook app Id
			var appId = '524137347748230';
			var fbUserId;

			window.fbAsyncInit = function () {
			      FB.init({
			          appId: appId
			      });
			      FB.login(function (response) {
			          customAWSService.bucket.config.credentials = new AWS.WebIdentityCredentials({
			              ProviderId: 'graph.facebook.com',
			              RoleArn: customAWSService.roleArn,
			              WebIdentityToken: response.authResponse.accessToken
			          });
			          fbUserId = response.authResponse.userID;
			          //button1.style.display = 'block';
			          //button2.style.display = 'block';
			          
			          
			          document.getElementById('logmessage').innerHTML = 'LOGGED IN!';
			          document.getElementById('logmessage').className = 'ok';       
			          document.getElementById('navigationmenu').style.display = 'block';
			          // window.location.replace(adresstogo);
			          
			      });
			  };
			   // Load the Facebook SDK asynchronously
			  (function (d, s, id) {
			      var js, fjs = d.getElementsByTagName(s)[0];
			      if (d.getElementById(id)) {
			          return;
			      }
			      js = d.createElement(s);
			      js.id = id;
			      js.src = "//connect.facebook.net/en_US/all.js";
			      fjs.parentNode.insertBefore(js, fjs);
			  }(document, 'script', 'facebook-jssdk'));

		}
})();