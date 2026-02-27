// const http = require("http");
// const fs = require("fs");
// const url = require("url")

// const myserver = http.createServer((req, res) => {
//     if (req.url === "/favicon.ico") return res.end();
//     const log = `${Date.now()} ${req.method} ${req.url}: New Request Received\n`;
//     const myurl = url.parse(req.url, true);
//     // console.log(myurl);

//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (myurl.pathname) {
//             case ("/"):
//                 if(req.method === "GET"){
//                     res.end("home page");
//                 }
                
//                 break;
//             case ("/about"):
//                 res.end("hey i am divyansh");
//                 break;
//             case ("/search"):
//                 const search = myurl.query.search_query;
//                 res.end("here are your results for" + search)
//                 break;
//             case ("/signup"): 
//             if(req.method === "GET"){
//                 res.end("this is signup form ")
//             }
//             else if(req.method === "POST"){
//                 //DB Query
//                 res.end("success")
//             }
            
                
    
//             default:
//                 res.end("404 Error");
//                 break;
//         }
//     });
// });


// myserver.listen(5000, () => {
//     console.log("server started");
// });