'use strict';

const SlackWebClient = require('@slack/client').WebClient;
const slackWebApi = new SlackWebClient(require('../../config').slack.apiToken);

/**
 * Returns Slack user count
 */
exports.getUserCount = function(request, reply){
	slackWebApi.users.list(function (err, response) {
	  	if (err) {
	  		reply(err);
	  	} 
	  	else {
	    	reply(response.members.length);
	  	}
	});
};