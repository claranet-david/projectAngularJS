scriptsApp.controller('CountryListCtrl', function ($scope, $http){
  $http.get('data/countries.json').success(function(data) {
    $scope.countries = data;
  });
});