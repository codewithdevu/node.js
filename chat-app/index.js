import express from "express";
import http from "http";

const app = express();
const server = http.createServer(app);

server.listen(5002 , () => {
    console.log(`server started at PORT http://localhost:${5002}`);
    
})
