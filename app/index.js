'use strict';
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
	init: function() {
		this.on('end', function () {
			this.installDependencies({
				bower: false,
				skipInstall: this.options['skip-install'],
				callback: function() {
					this.log.ok('Run `grunt serve` to start the server.');
				}.bind(this)
			});
		});

		this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
	},
	askFor: function() {
		var done = this.async();

		// have Yeoman greet the user.
		console.log(this.yeoman);

		var prompts = [{
			type: 'confirm',
			name: 'requirejs',
			message: 'Would you like to include RequireJS (for AMD support)?',
			'default': true
		}];

		this.prompt(prompts, function (props) {
			this.requirejs = props.requirejs;

			done();
		}.bind(this));
	},
	gruntfile: function() {
		this.copy('Gruntfile.js');
	},
	packageJSON: function() {
		this.copy('_package.json', 'package.json');
	},
	bower: function() {
		this.template('_bower.json', 'bower.json');
		this.copy('bowerrc', '.bowerrc');
		this.copy('_bowercopy.json', 'bowercopy.json');
	},
	dotfiles: function() {
		this.copy('editorconfig', '.editorconfig');
		this.copy('jshintrc', '.jshintrc');
		this.copy('gitignore', '.gitignore');
	},
	app: function() {
		this.mkdir('app');
		this.mkdir('app/js');
		this.mkdir('app/css');
		this.template('index.html', 'app/index.html');
		this.template('main.js', 'app/js/main.js');
		this.copy('main.css', 'app/css/main.css');
	}
});
