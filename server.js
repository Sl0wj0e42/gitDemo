let express = require("express");
let port = 1089;

app = express();

app.get("/",
    function(request, response) {
    response.end("Hello World from Node");
});

app.listen(port, function() {
    console.log("Server listining on port " + port);
});