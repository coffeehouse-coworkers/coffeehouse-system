'use strict';

const slackCtrl = require('./controllers.js');

module.exports = [
	{
        method: 'GET',
        path: '/info',
        config: {
            handler: slackCtrl.getInfo
        }
	}
]