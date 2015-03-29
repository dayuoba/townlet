//Copyright 2015
//Licences MIT
//Contributors @dayuoba @kingzez
//Description:Application apis

var appUtil = require('./appUtil');

//application constructor
var Application = module.exports = function(config) {
	this.settings = {};
	this.STATUS = 0;
	this.components = {};
	this.utils = {};
	this.config = config || {};
};
//[Description] 
Application.prototype.set = function(key, value, attach) {
	if (attach) this[key] = value;
	this.settings[key] = value;
	return this;
};

Application.prototype.get = function(key) {
	return this.settings[key];
};
//[Description] Load with file path eg:load('util', './appUtil'); //this.util = require('./appUtil');
//[Suggestion] considering of how to load our components to make them can be loaded by order
//                      and can be consturcted using application
Application.prototype.load = function(key, path) {
	//TODO
	return this;
};
//[Description] Load utils,components,init components
Application.prototype.init = function(first_argument) {
	// body...
};
//[Description] run application -> run components by order
//[Suggestion] considering of how to make the components run life-cycle correctly
Application.prototype.run = function(first_argument) {
	// body...
};

//Getters