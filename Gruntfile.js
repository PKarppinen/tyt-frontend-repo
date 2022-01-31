
module.exports = function (grunt) {
  
	var conf;
	if (grunt.option('apiIP')) {
		conf = { apiUrl: 'https://' + grunt.option('apiIP') + ':8080' };
	} else {
		conf = { apiUrl: 'https://localhost:8080' };
	}
	
	grunt.log.write('API URL: ' + conf.apiUrl);
	
	grunt.initConfig({
		'template': {
            'process-js-template': {
                'options': {
                    'data': conf
                },
                'files': {
                    'js/src/configs/config.js': ['js/src/configs/config.js.tpl'] 	
                }
            }
        },
		'copy': {
			main: {
				files: [
					{
						cwd: 'js/vendor',  	
						src: '**/*',            
						dest: 'dist/js/vendor',        
						expand: true
					},
					{
						cwd: 'css/vendor',  	
						src: '**/*',            
						dest: 'dist/css/vendor',        
						expand: true
					}
				],
			}				
		},
		'concat': {
			js: {
				src: ['js/src/**/*.js'],
				dest: 'dist/js/trail-your-trails.min.js'
			}
		},
		'uglify': {
			options: {
				mangle: false,
				// the banner is inserted at the top of the output
				banner: '/*! trail-your-trails.min.js <%= grunt.template.today("dd-mm-yyyy") %> */\n'
			},
			js: {
				src: ['dist/js/trail-your-trails.min.js'],
				dest: 'dist/js/trail-your-trails.min.js'
			}						
		},
		'cssmin': {			
			options: {
				banner: 'trail-your-trails.min.css',
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'dist/css/trail-your-trails.min.css': ['css/main.css']
				}
			}			
		}
	});
	
	grunt.loadNpmTasks('grunt-template');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
		
	grunt.registerTask('default', ['template', 'copy', 'concat', 'uglify', 'cssmin']);
	grunt.registerTask('build', ['default']);
}