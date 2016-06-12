"use strict";

module.exports = {
    server: {
        app: {
            slogan: "Coffee and Music"
        }
    },
    connections: [
        {
            port: 8080,
            labels: ['api'],
            routes: {
                cors: true
            }
        }
    ],
    registrations: [
        {
            plugin: {
                register: "inert"
            }
        },
        {
            plugin: {
                register: "./slack"
            },
            options: {
                select: ['api'],
                routes: {
                    prefix: "/slack"
                }
            }
        },
        {
            plugin: {
                register: "good",
                options: {
                    reporters: {
                        console: [{
                            module: "good-squeeze",
                            name: "Squeeze",
                            args: [{
                                response: "*",
                                log: "*", 
                                error: "*" 
                            }]
                        },{
                            module: "good-console"
                        }, 'stdout']
                    }
                }
            }
        }
    ]
};