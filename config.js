module.exports = {
	soundcloud: {
		clientId: process.env.SC_CLIENT_ID || 'CLIENT_ID',
		clientSecret: process.env.SC_CLIENT_SECRET || 'CLIENT_SECRET',
		redirectUri: "http://www.coffeehousecoworkers.com/redirect"
	},
	slack: {
		apiToken: process.env.SLACK_API_TOKEN || 'API_TOKEN_FOR_SLACK'
	}
}