//Copyright 2015
//Licences MIT
//Contributors @dayuoba @kingzez
//Description:application util
var fs = require('fs');
var components = require('../components/components.json').components;
var appUtil = module.exports = {};

appUtil.loadComponentsByOrder = function(application) {
	var path = '../components/';
	components.forEach(function(component) {
		application.components[component.name] = require(path + component.name)(application);
		if (component.lifecycle)
			application.components[component.name].lifecycle = component.lifecycle;
	});
};

appUtil.loadUtils = function(application) {
	console.log('loading utils');
};