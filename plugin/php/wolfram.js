var wolfram = {
 author: 'pironic',
 name: 'wa',
 description: '- ask the bot a question, via Wolfram|Alpha.',
 onCall: function(request) {
        var http = require('http');
        var config = require('../../config.js');

        if (config.wolframURL.length > 0)          
        {
            http.get(config.wolframURL+encodeURIComponent(request.params), function(res) {
                console.log("Got response: " + res.statusCode);
                res.setEncoding('utf8');
                
                res.on('data', function (chunk) {
                    request.sendChat(chunk);
                });                
            }).on('error', function(e) {
                request.sendChat("Got error: " + e.message);
            });
        }    
 }
};

module.exports = {mod: wolfram};
