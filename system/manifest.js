"use strict";

module.exports = {
    server: {
        app: {
            slogan: "Coffee and Music"
        }
    },
    connections: [
        {
            port: 8090,
            labels: ['api'],
            routes: {
                cors: true
            }
        },
        {
            port: 8080,
            labels: ['webapp']
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
                register: "./radio"
            },
            options: {
                select: ['api'],
                routes: {
                    prefix: "/radio"
                }
            }
        },
        {
            plugin: {
                register: "./webapp"
            },
            options: {
                select: ['webapp']
            }
        },
        {
            plugin: {
                register: "good",
                options: {
                    requestHeaders: true,
                    reporters: [
                        {
                            // reports to console which is used by PM2 logs
                            reporter: "good-console",
                            events: { 
                                response: "*",
                                log: "*", 
                                error: "*" 
                            }
                        }
                    ]
                }
            }
        }
    ]
};