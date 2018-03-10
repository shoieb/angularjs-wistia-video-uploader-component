(function () {
    'use strict';

    angular.module("app")
        .component("wistiaUploader", {
            templateUrl: './app/uploader/uploader.html',
            controller:  ['$scope', 'appSettings', uploaderController]  
    });

    function uploaderController($scope, appSettings){
        $scope.responseMessage = '';
        $scope.progressStyle = { 'width' : '0%', background : '#ff7400'};    
    
        angular.element('#fileupload').fileupload({                        
            url : appSettings.wistiaApi + appSettings.wistiaApiPassword,        
            add: function (e, data) {                               
                data.submit();
            },
            start: function(e){            
                $scope.progressStyle = {'width' : '0%', background : '#ff7400'};                        
                $scope.responseMessage = 'Uploading file...';         
                $scope.$apply();
            },
            progress: function (e, data) {          
                var progress = parseInt(data.loaded / data.total * 100, 10);            
                $scope.progressStyle = {'width' : progress + '%', background : '#ff7400'};
                $scope.$apply();
            },
            done: function (e, data) {                                                                
                $scope.progressStyle = {'width' : '100%', background : '#5cb85c'};       
                var container = angular.element(document.querySelector('#video-container'));
                container.append('<div class="wistia_embed wistia_async_' + data.result.hashed_id + ' video-item"></div>');            
                $scope.responseMessage = 'Your file has been uploaded!';
                $scope.$apply();            
            },
            fail: function(e, data){                        
                $scope.progressStyle = {'width' : '100%', background : 'red'};
                $scope.responseMessage = 'An error has occurred: "' + data.errorThrown + '".' + ' Please check if Wistia account exceeded uploaded videos limit.';
                $scope.$apply();
            }
        });  
    }

})();