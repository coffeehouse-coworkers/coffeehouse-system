'use strict';

const SlackWebClient = require('@slack/client').WebClient;
const slackApiToken = require('../../config').slack.apiToken;
const slackWebApi = new SlackWebClient(slackApiToken);
const httpClient = require('request');

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

/**
 * Sends invitation to join slack team
 */
exports.invite = function(request, reply){
	let email = request.payload.email;

	httpClient.post({
		url: "https://coffeehousecoworkers.slack.com/api/users.admin.invite",
		form: {
			email: request.payload.email,
			token: slackApiToken,
			set_active: true
		}
	}, function(err, response, body){
		body = JSON.parse(body);
		if(err){
			reply(err);
		}
		else if(body.ok){
			reply({message: "Success! Check your email for an invite."});
		}
		else {
			let error = body.error;
			console.log(error);
			if(error === "already_invited" || error === "already_in_team"){
				reply({message: "Your invitation has already been sent or you are already part of the team."});
			}
			else if(error === "invalid_email"){
				reply({message: "The email you provided is invalid."});	
			}
			else if(error === "invalid_auth"){
				reply({message: "Oh no! The auto-invite system is down!"});	
			}
			else {
				reply({message: "Something went wrong."});
			}
		}
	});
};