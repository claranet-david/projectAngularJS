scriptsApp.config(function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'views/root.html',
          controller: 'RootCtrl'
        }
        ).
        when('/list', {
          templateUrl: 'views/list.html',
          controller: 'ListCtrl'
        }
        ).
        when('/test', {
          template: '<ul><li ng-repeat="country in countries">{{country.name}}</li><ul>',
          controller: 'CountryListCtrl'
        }
        ).
        when('/upload', {
          templateUrl: 'views/upload.html',
          controller: 'UploadCtrl'
        }
        ).
        // when('/:countryName', {
        //   template: '<h1>TODO create country detail view</h1>',
        //   controller: 'CountryDetailCtrl'
        // }
        // ).
        otherwise({
          // redirectTo: function(){
          //   return "/";
          // }
        });
});