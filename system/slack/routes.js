'use strict';

const slackCtrl = require('./controllers.js');

module.exports = [
	{
        method: 'GET',
        path: '/users',
        config: {
            handler: slackCtrl.getUserCount
        }
	}
]