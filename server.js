import express from 'express';
import path from 'path'; //node's helper

const app = express(); //this is the express app

// app.use(express.static('./public')); 

const port = 3000 //defining our port which will be 3000

app.get('/home',(req, res) => {
    res.sendFile(path.jon(mkdirname, import.meta.dirname, 'public/index.html'))
}); //set up our GET request for homepage.

app.get('/contact', (req,res) => {
    res.sendFile("Contact Dimsu!")
}); //set up our get request for the contact page.






