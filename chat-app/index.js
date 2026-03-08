import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new Server(server);

//socket io
io.on("connection" , (socket) => {
    socket.on("user-message" , (message) => {
        io.emit("message" , message);
    })
})


app.use(express.static(path.resolve("./public")));

app.get("/" , (req , res ) => {
    return res.sendFile("/public/index.html")
})

server.listen(5002 , () => {
    console.log(`server started at PORT http://localhost:${5002}`);
    
})
