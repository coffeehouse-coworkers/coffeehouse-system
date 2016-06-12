"use strict";

/**
 * API
 */
const routes = require('./routes');

/**
 * Plugin Registration
 */
exports.register = function (server, options, next) {
	let api = server.select('api');
	api.route(routes);
	next();
};

/**
 * Plugin Attributes
 * contains Hapi plugin attribute information (name, version, etc)
 */
exports.register.attributes = {
    pkg: require("./package.json")
};