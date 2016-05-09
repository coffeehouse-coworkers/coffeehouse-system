'use strict';

const apiCtrl = require('./controllers.js');

module.exports = [
	{
        method: 'GET',
        path: '/now',
        config: {
            handler: apiCtrl.getLiveInfo
        }
	}
]