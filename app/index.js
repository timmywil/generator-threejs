'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

function ThreejsGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	console.log(config);

	this.on('end', function () {
		this.installDependencies({
			bower: false,
			skipInstall: options['skip-install']
		});
	});

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
}

util.inherits(ThreejsGenerator, yeoman.generators.Base);

ThreejsGenerator.prototype.askFor = function askFor() {
	var done = this.async();

	// have Yeoman greet the user.
	console.log(this.yeoman);

	var prompts = [{
		type: 'confirm',
		name: 'requirejs',
		message: 'Would you like to include RequireJS (for AMD support)?',
		default: true
	}];

	this.prompt(prompts, function (props) {
		this.requirejs = props.requirejs;

		done();
	}.bind(this));
};

ThreejsGenerator.prototype.gruntfile = function gruntfile() {
  this.copy('Gruntfile.js');
};

ThreejsGenerator.prototype.packageJSON = function packageJSON() {
	this.copy('_package.json', 'package.json');
};

ThreejsGenerator.prototype.bower = function bower() {
	this.template('_bower.json', 'bower.json');
	this.copy('bowerrc', '.bowerrc');
	this.copy('_bowercopy.json', 'bowercopy.json');
};

ThreejsGenerator.prototype.editorconfig = function editorconfig() {
	this.copy('editorconfig', '.editorconfig');
	this.copy('jshintrc', '.jshintrc');
};

ThreejsGenerator.prototype.app = function app() {
	this.mkdir('app');
	this.mkdir('app/js');
	this.mkdir('app/css');
	this.template('index.html', 'app/index.html');
	this.template('main.js', 'app/js/main.js');
	this.copy('main.css', 'app/css/main.css');
};

/* Export
---------------------------------------------------------------------- */
module.exports = ThreejsGenerator;
