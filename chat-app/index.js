import express from "express";
import http from "http";
import path from "path";
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server(server);

//socket io
io.on("connection" , (socket) => {
    console.log("a new user is connectod socket id:" , socket.id);
})


app.use(express.static(path.resolve("./public")));

app.get("/" , (req , res ) => {
    return res.sendFile("/public/index.html")
})

server.listen(5002 , () => {
    console.log(`server started at PORT http://localhost:${5002}`);
    
})
