import express from 'express';
import path from 'path'; //node's helper

const app = express(); //this is the express app

// app.use(express.static('./public')); 

const port = 3000 //defining our port which will be 3000

app.get('/',(req, res) => {
    res.sendFile("Welcome to Dimsu's World!")
}) //set up our GET request




