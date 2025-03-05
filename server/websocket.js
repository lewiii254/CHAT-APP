import express from 'express'
import cors from 'cors'

import { Server } from 'socket.io'
import http from 'http'

const app = express()

const port = 4000
const server = http.createServer(app)

app.use((cors))

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
})

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`)

    socket.on("send_message", (data) => {
       // console.log(data)
        socket.broadcast.emit("receive_message", data)
        //event to all clients except sender
    })
})

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
})