"use strict";

/**
 * Main file
 */
const Glue = require("glue");
const manifest = require("./manifest");  // defines the server and connections
const options = { relativeTo: __dirname }; // relative path for plugin modules

/**
 * Glue exports a single function compose accepting a JSON manifest file 
 * specifying the Hapi server options, connections and plugins
 */
Glue.compose(manifest, options, function (err, server) {
    server.start(function(err) {

        // throw error if the server doesnt start correctly.
        if(err){ throw err }

        // Server started great, log connection information
        else {

            server.route({
                method: 'OPTIONS',
                path: '/{p*}',
                config: {
                    handler: function(request, reply){
                        reply(true)
                            .header('access-control-allow-headers', 'accept, authorization, content-type')
                            .header('access-control-allow-origin', 'http://www.coffeehousecoworkers.com')
                            .header('access-control-allow-methods', 'GET, PUT, POST, DELETE, OPTIONS');
                    }
                }
            });

            console.log("CoffeeHouse System Started!");
            console.log("  >>>  API: " + server.connections[0].info.address + ":" + server.connections[0].info.port);
        }
    });
});