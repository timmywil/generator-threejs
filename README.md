# generator-threejs [![Build Status](https://secure.travis-ci.org/timmywil/generator-threejs.png?branch=master)](https://travis-ci.org/timmywil/generator-threejs)

A generator for [Yeoman](http://yeoman.io) that builds basic scaffolding based on common best practices for a project using [three.js](https://github.com/mrdoob/three.js).

The generated project includes a local server for *live reloading* and *linting* as you develop (see the [Development Server](https://github.com/timmywil/generator-threejs#development-server) section below for how to run the server).

The starting javascript is exactly the same as the usage guide in the [three.js README](https://github.com/mrdoob/three.js/blob/master/README.md).

[Requirejs](http://requirejs.org) is optionally included.


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![Yeoman](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Usage

To install generator-threejs from npm, run:

```
$ npm install -g generator-threejs
```

Then, initiate the generator:

```
$ yo threejs
```

### Options

Running the generator will present you with any options in a prompt.

#### `options.requirejs`
Type: `Boolean`  
Default: `true`

Use [AMD](requirejs.org/docs/whyamd.html) in your project.

### Development Server

The scaffolding includes a local server using [Grunt](http://gruntjs.com). To start, make sure you have the [grunt-cli installed](http://gruntjs.com/getting-started) and run `grunt`.

### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).

## Release History

- **0.2.4** *7/30/2014* Updated all node dependencies.
- **0.2.3** *2/3/2014*  Update generator in accordance with http://yeoman.io/blog/cleanup.html. Update all npm packages.
- **0.2.1** *1/16/2014*  Update all npm packages.
- **0.2.0** *1/16/2014*  Add .gitignore to project. Update grunt-bowercopy.
- **0.1.0** *12/2/2013*  Initial release

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
