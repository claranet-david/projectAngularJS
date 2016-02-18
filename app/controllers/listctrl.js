scriptsApp.controller('ListCtrl', function ($scope, $http){

    // $scope.loader = document.getElementById('loadJSON');
    // $scope.loader.addEventListener('click', function(){
    //     $scope.urldata;
    //     bucket.getSignedUrl('getObject', { Key: 'data.json' }, function (err, url) {
    //        $scope.urldata = url;
    //        if (url) {
    //             console.log("The URL is " + $scope.urldata);
    //             $http.get($scope.urldata).success(function(data) {
    //               $scope.entries = data;
    //             });
    //         }

    //     });

    // }, false);

    $scope.filterOptions = {
                files: [
                    {id : 1, name : 'ALL', type: "all" },
                    {id : 2, name : 'ebextensions', type: "ebextension" },
                    {id : 3, name : 'packages', type: "package"},
                    {id : 4, name : 'scripts', type: "script" }
                ]
    };
    //*** Mapped to the model to filter ***/
    $scope.filterItem = {
        files: $scope.filterOptions.files[0]
    };

    $scope.customFilter = function (data) {
            if (data.type === $scope.filterItem.files.type) {
              return true;
            } else if ($scope.filterItem.files.type === "all") {
              return true;
            } else {
              return false;
            }
    };
    $http.get("data/data.json").success(function(data) {
        $scope.entries = data;
    });
});