let http = require("http");
let port = 9000;

let server = http.createServer(function(request, response) {
    response.end("Hello World from Node");
});

server.listen(port, function() {
    console.log("Server listining on port " + port);
});