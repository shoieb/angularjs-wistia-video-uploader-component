module.exports = function(config) {
    config.set({  
      basePath: './client/',  
      files: [  
        'https://fast.wistia.com/assets/external/E-v1.js',               
        'bower_components/jquery/dist/jquery.min.js',                                    
        'bower_components/angular/angular.min.js',
        'bower_components/angular-mocks/angular-mocks.js',                                        
        'bower_components/angular-ui-router/release/angular-ui-router.min.js',            
        'bower_components/jquery-ui/jquery-ui.min.js',                            
        'vendors/blueimp/jquery.ui.widget.js',                   
        'vendors/blueimp/jquery.iframe-transport.js',
        'vendors/blueimp/jquery.fileupload.js',
        'vendors/blueimp/jquery.fileupload-process.js',                                     
        'vendors/blueimp/jquery.fileupload-image.js',
        'vendors/blueimp/jquery.fileupload-video.js',
        'app/app.js',                                                                
        'app/app.settings.js',
        'app/uploader/uploader.component.js',                                                                
        'app/uploader/uploader.component.spec.js'                                                            
      ],  
      autoWatch: true,  
      frameworks: ['jasmine'],  
      browsers: ['Chrome'],  
      plugins: [       
        'karma-chrome-launcher',        
        'karma-jasmine',
        'karma-junit-reporter'
      ],  
      junitReporter: {
        outputFile: 'test_out/unit.xml',
        suite: 'unit'
      }  
    });
  };