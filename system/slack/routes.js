'use strict';

const slackCtrl = require('./controllers.js');
const Joi = require('joi');

module.exports = [
	{
        method: 'GET',
        path: '/users',
        config: {
            handler: slackCtrl.getUserCount
        }
	},
	{
        method: 'POST',
        path: '/invite',
        config: {
            handler: slackCtrl.invite,
            validate: {
            	payload:{
            		email: Joi.string().email()
            	}
            }
        }	
	}
];