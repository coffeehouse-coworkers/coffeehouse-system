'use strict';

const SC = require('node-soundcloud');

SC.init({
    id: process.env.SC_CLIENT_ID,
    secret: process.env.SC_CLIENT_SECRET,
    uri: "http://www.coffeehousecoworkers.com/redirect"
});

SC.get('/playlists/47565276', function(err, playlist) {
	if(err){
		done(err);
	}
	else {

		let elapsedTime = 3622471;

		for(let i = 0; i < playlist.tracks.length; i++){
			let trackDuration = playlist.tracks[i].duration;
			if(trackDuration > elapsedTime){
				console.log(elapsedTime);
				console.log(playlist.tracks[i].id);
				break;
			}
			elapsedTime = elapsedTime - trackDuration;
		}
	}
});