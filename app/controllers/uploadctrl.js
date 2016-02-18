scriptsApp.controller('UploadCtrl', function ($scope, $http, $routeParams){
    var fileChooser = document.getElementById('file-chooser');
    var button = document.getElementById('upload-button');
    var results = document.getElementById('results');
    $scope.fileName; 
    $scope.file;
    $scope.obj = {};

    // if($scope.file) console.log("FILE IS NOT EMPTY!" + $scope.file);
    //     else console.log("IT IS EMPTY");

    button.addEventListener('click', function() {
      
      $scope.file = fileChooser.files[0];

      if ($scope.file) {
        results.innerHTML = '';
        //console.log($scope.file.name);
        $scope.fileName = String($scope.file.name);
        $scope.populate();

        var params = {
            Key: "test/" + $scope.obj.location, 
            ContentType: $scope.file.type, 
            Body: $scope.file
        };
        
        bucket.upload(params, function (err, data) {
          results.innerHTML = err ? 'ERROR!' + String(err) : 'UPLOADED.';
        });
      } else {
        results.innerHTML = 'Nothing to upload.';
      }
    }, false);

    
    $scope.stringyObj = JSON.stringify($scope.obj,null,"    ");
    $scope.populate = function(){
        $scope.obj.label = $scope.fileLabel;
        $scope.obj.description = $scope.fileDescription;
        $scope.obj.date = $scope.fileDate;
        $scope.obj.type = $scope.fileType;
        $scope.obj.tags = $scope.fileTags;
        if($scope.file){
            $scope.obj.location = String($scope.fileType+"s/"+$scope.fileName);
        }
        console.log(JSON.stringify($scope.obj,null,"    "));
    };



});