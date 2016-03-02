(function(){
    angular
        .module('app')
        .controller('ListCtrl', ListCtrl);

        ListCtrl.$inject = ['$scope', '$http'];

        function ListCtrl($scope, $http){

            var vm = this;

            // vm.loader = document.getElementById('loadJSON');
            // vm.loader.addEventListener('click', function(){
            //     vm.urldata;
            //     bucket.getSignedUrl('getObject', { Key: 'data.json' }, function (err, url) {
            //        vm.urldata = url;
            //        if (url) {
            //             console.log("The URL is " + vm.urldata);
            //             $http.get(vm.urldata).success(function(data) {
            //               vm.entries = data;
            //             });
            //         }

            //     });

            // }, false);

            vm.filterOptions = {
                        files: [
                            {id : 1, name : 'ALL', type: "all" },
                            {id : 2, name : 'ebextensions', type: "ebextension" },
                            {id : 3, name : 'packages', type: "package"},
                            {id : 4, name : 'scripts', type: "script" }
                        ]
            };
            //*** Mapped to the model to filter ***/
            vm.filterItem = {
                files: vm.filterOptions.files[0]
            };

            vm.customFilter = function (data) {
                    if (data.type === vm.filterItem.files.type) {
                      return true;
                    } else if (vm.filterItem.files.type === "all") {
                      return true;
                    } else {
                      return false;
                    }
            };
            $http.get("data/data.json").success(function(data) {
                vm.entries = data;
            });
        }

})();