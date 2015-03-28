//Copyright 2015
//Licences MIT
//Contributors @dayuoba @kingzez
//Description:The mian, run server here

var Application = require('./application/application.js');
var appUtil = require('./application/appUtil.js');

var chatServer = {};

chatServer.configure = function(config) {
	var application = new Application(config);
	this.application = application;
	return this;
};

chatServer.run = function() {
	this.application.init();
	this.application.run();
	return this;
};

module.exports = chatServer;