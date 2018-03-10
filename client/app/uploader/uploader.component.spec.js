'use strict';

describe('wistiaUploader', function(){
    var controller;
    var myScope;
    var appSettings;
    //Load the module that contains the 'uploaderController' component before each test
    beforeEach(angular.mock.module('app'));

    beforeEach(inject(function ($compile, $rootScope, $componentController) {
        myScope = $rootScope.$new();        
        controller = $componentController('wistiaUploader', {$scope: myScope});        
    }));    
  
    describe('uploaderController', function(){
        it('component controller should be defined', function() {
            expect(controller).toBeDefined();                        
        });
        it('component controller scope should be defined', function() {
            expect(myScope).toBeDefined();                        
        });
        it('should have empty responseMessage at start', function () {          
            expect(myScope.responseMessage).toBe('');         
        });
        it('should have a modified responseMessage', function () {                  
            myScope.responseMessage = 'my new message';
            expect(myScope.responseMessage).toBe('my new message'); 
        });
        it('should have a scope progressStyle object set', function () {                              
            expect(myScope.progressStyle).toBeDefined();             
        });
        it('should have a scope progressStyle width set', function () {                                          
            expect(myScope.progressStyle.width).toBeDefined();            
        });        
        it('should have a scope progressStyle width value set', function () {                                                      
            expect(myScope.progressStyle.width).toEqual('0%');             
        });
        it('should have a scope progressStyle background set', function () {                                          
            expect(myScope.progressStyle.background).toBeDefined();                        
        });
        it('should have a scope progressStyle background value set', function () {                                                      
            expect(myScope.progressStyle.background).toEqual('#ff7400');             
        });
    });    
});