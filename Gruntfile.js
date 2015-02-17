/**
 * Gruntfile.js
 *
 * Copyright (c) 2012 quickcue
 */

module.exports = function(grunt) {
	'use strict';

	// Load dev dependencies
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take for build time optimizations
	require('time-grunt')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		bump: {
			options: {
				commitMessage: 'Release %VERSION%',
				createTag: true,
				tagName: '%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: false
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			grunt: [ 'Gruntfile.js' ],
			main: [ 'app/*.js', 'test/*.js' ]
		},
		jsonlint: {
			pkg: {
				src: 'package.json'
			}
		},
		simplemocha: {
			options: {
				ui: 'bdd',
				reporter: 'spec',
				bail: true,
				timeout: 5000
			},
			load: {
				src: 'test/test-load.js'
			},
			creation: {
				src: 'test/test-creation.js'
			}
		},
		watch: {
			// Watch javascript files for linting
			grunt: {
				files: [
					'<%= jshint.grunt %>'
				],
				tasks: ['jshint:grunt']
			},
			main: {
				files: [
					'<%= jshint.main %>',
					'app/templates/*'
				],
				tasks: ['jshint:main', 'simplemocha']
			},
			json: {
				files: [
					'package.json'
				],
				tasks: ['jsonlint']
			}
		}
	});

	grunt.registerTask('default', ['newer:jsonlint', 'newer:jshint', 'simplemocha']);
};
