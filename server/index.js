import express from "express"
import { createServer } from "http"
import { Server } from "socket.io"
import cors from "cors"

const app = express()
app.use(cors)

const server = createServer(app)

const io = new Server(server);

io.on("connection", (socket) => {
    console.log("New user ", socket.id);
    
    socket.on("user-message", message => {
        console.log(socket.id, message);
        io.emit("message", message, socket.id)
    })
})

// app.get("/", (req, res) => {
//     res.sendFile("D:/Web development/chat application/client/index.html")
// })

server.listen(3000, () => {
    console.log("Server....");
})