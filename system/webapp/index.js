"use strict";

/**
 * Webapp
 */
const Path = require('path');

/**
 * Plugin Registration
 */
exports.register = function (server, options, next) {

	let webappConnection = server.select('webapp');

	// Serves webapp including files
	webappConnection.route({
	    method: "GET",
	    path: "/{path*}", // all possible subdirectories
	    handler: {
	        directory: {

	        	// serves public files in this directory
	            path: Path.join(__dirname, 'public'),     
	            index: true, // automatically looks for and returns `index.html`
	        }
	    }
	});

	next();
};

/**
 * Plugin Attributes
 * contains Hapi plugin attribute information (name, version, etc)
 */
exports.register.attributes = {
    pkg: require("./package.json")
};