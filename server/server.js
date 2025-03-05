// const express = require("express")

import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import Chat from "./chatModels/chatModels.js";

dotenv.config();




//instatiate the express app
const app = express()

//declare a middleware
app.use(express.json())

const port  = process.env.PORT || 5000
const MONGOURI = process.env.MONGOURI




//api routes

//get chat messages from the db
app.get("/", async(req, res) => {
try {


    const chats = await Chat.find({}).sort({ createdAt: -1});


    return res.status(200).json({
        count: chats.length,
        data: chats
    })
    
    
} catch (error) {

    return res.status(500).json({
        message: "Error getting chats"
    })
    
}

})


//sending chat messages to the db
app.post("/", async (req, res) => {

    try {

        const { name, message } = req.body

        if( !name || !message){
            return res.status(400).json({
                message: "Please enter all fields"
            
            })
        }
        

            const newChat = {name, message}

            console.log(newChat)

            const chat = await Chat.create(newChat)


            // res.status(200).json({
            //     message: "Chat posted successfully"
            // })

            return res.status(201).json(chat);
        
    } catch (error) {

        return res.status(500).json({
            message: "Error creating chats"
        })
        
    }


})
//get chat messages by id from the db
app.get("/:id", async (req, res) => {
    try {
        const { id } = req.params
        const getChat = await Chat.findById(id);
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                message: "could not find chat"
            })
        }
            return res.status(200).json(getChat);
    } catch (error) {
        console.log(error)
        return res.status(404).json({
            message: "Error getting chat"
        })
           
        }

   
})

//deleting chat messages from the db
app.delete("/", (req, res) => {
    return res.status(200).json({
            message:"Deleting chats"
        })
    }
)  

mongoose.connect(MONGOURI)

.then(() => {
    app.listen(port ,() => {
        console.log(`App listening on port : ${port} `)
        console.log(`App connected to db`)
    })  
})
.catch((err) => {
    console.log(err)
})









