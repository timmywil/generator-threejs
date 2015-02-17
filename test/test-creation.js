/*global describe, beforeEach, it*/
'use strict';

var path = require('path');
var yeoman = require('yeoman-generator');
var helpers = yeoman.test;
var assert = yeoman.assert;

describe('threejs generator', function () {
	beforeEach(function (done) {
		helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
			if (err) {
				return done(err);
			}

			this.app = helpers.createGenerator('threejs:app', [
				'../../app'
			]);
			done();
		}.bind(this));
	});

	/**
	 * Mock a run through the generator
	 * @param {ThreeJSGenerator} app
	 * @param {Object} options Options to pass to the prompt
	 * @param {Function} complete
	 */
	function run(app, options, complete) {
		helpers.mockPrompt(app, options);
		app.options['skip-install'] = true;
		app.run(complete);
	}

	it('creates expected files', function (done) {
		var expected = [
			// add files you expect to exist here.
			'.jshintrc',
			'.editorconfig',
			'.gitignore',
			'app/index.html',
			'app/js/main.js',
			'app/css/main.css'
		];

		run(this.app, {
			'requirejs': true
		}, function() {
			assert.file(expected);
			assert.fileContent('bower.json', (/"name": "temp"/));
			assert.fileContent('package.json', (/"name": "temp"/));
			assert.fileContent('Gruntfile.js', (/watch:/));
			assert.fileContent('bowercopy.json', (/three\.js/));
			done();
		});
	});

	it('creates expected files in non-AMD mode', function (done) {
		var expected = [
			// add files you expect to exist here.
			'.jshintrc',
			'.editorconfig',
			'app/index.html',
			'app/js/main.js',
			'app/css/main.css'
		];

		run(this.app, {
			'requirejs': false
		}, function() {
			assert.file(expected);
			assert.fileContent('bower.json', (/"name": "temp"/));
			assert.fileContent('package.json', (/"name": "temp"/));
			assert.fileContent('Gruntfile.js', (/watch:/));
			assert.fileContent('bowercopy.json', (/three\.min\.js/));
			done();
		});
	});

	it('should generate a .yo-rc.json', function(done) {
		run(this.app, {
			'requirejs': true
		}, function() {
			assert.file(['.yo-rc.json']);
			done();
		});
	});
});
