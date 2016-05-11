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
		for(let i = 0; i < playlist.tracks.length; i++){
			if(!playlist.tracks[i].id || !playlist.tracks[i].durration){
				console.log('found it!');
				console.log(playlist.tracks[i]);
			}
		}
	}
});