(function(){
  angular
    .module('app')
    .config(function($routeProvider) {
          $routeProvider.
            when('/', {
              templateUrl: 'views/root.html',
              controller: 'RootCtrl as root'
            }
            ).
            when('/list', {
              templateUrl: 'views/list.html',
              controller: 'ListCtrl as list'
            }
            ).
            when('/test', {
              template: '<div>{{countrylist.name}}</div><ul><li ng-repeat="country in countrylist.countries">{{country.name}}</li><ul>',
              controller: 'CountryListCtrl as countrylist'
            }
            ).
            when('/upload', {
              templateUrl: 'views/upload.html',
              controller: 'UploadCtrl as upload'
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
})();