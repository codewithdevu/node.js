const http = require("http");
const fs = require("fs");
const url = require("url")

const myserver = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} ${req.url}: New Request Received\n`;
    const myurl = url.parse(req.url, true);
    console.log(myurl);

    fs.appendFile("log.txt", log, (err, data) => {
        switch (myurl.pathname) {
            case ("/"):
                res.end("home page");
                break;
            case ("/about"):
                res.end("hey i am divyansh");
                break;
            case ("/search"):
                const search = myurl.query.search_query;
                res.end("here are your results for" + search)
                break;
            default:
                res.end("404 Error");
                break;
        }
    });
});


myserver.listen(5000, () => {
    console.log("server started");
});