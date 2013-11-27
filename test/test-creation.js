/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;

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

	it('creates expected files', function (done) {
		var expected = [
			// add files you expect to exist here.
			'.jshintrc',
			'.editorconfig',
			['bower.json', (/"name": "temp"/)],
			['package.json', (/"name": "temp"/)],
			['bowercopy.json', (/three\.js/)],
			['Gruntfile.js', (/watch:/)],
			'app/index.html',
			'app/js/main.js',
			'app/css/main.css'
		];

		helpers.mockPrompt(this.app, {
			'requirejs': true
		});
		this.app.options['skip-install'] = true;
		this.app.run({}, function () {
			helpers.assertFiles(expected);
			done();
		});
	});

	it('creates expected files in non-AMD mode', function (done) {
		var expected = [
			// add files you expect to exist here.
			'.jshintrc',
			'.editorconfig',
			['bower.json', (/"name": "temp"/)],
			['package.json', (/"name": "temp"/)],
			['bowercopy.json', (/three\.min\.js/)],
			['Gruntfile.js', (/watch:/)],
			'app/index.html',
			'app/js/main.js',
			'app/css/main.css'
		];

		helpers.mockPrompt(this.app, {
			'requirejs': false
		});
		this.app.options['skip-install'] = true;
		this.app.run({}, function () {
			helpers.assertFiles(expected);
			done();
		});
	});
});
