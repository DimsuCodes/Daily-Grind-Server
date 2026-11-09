import express from 'express';
import path from 'path'; //node's helper

const app = express(); //this is the express app

// app.use(express.static('./public')); 

const port = 3000 //defining our port which will be 3000

app.get('/',(req, res) => {
    res.sendFile(path.join( import.meta.dirname, 'public/index.html'))
}); //set up our GET request for homepage.

app.get('/contact', (req,res) => {
    res.sendFile(path.join( import.meta.dirname, 'public/contact.html'))
}); //set up our get request for the contact page.

//now we need the app to listen so it can turn on by adding app.list

app.listen(port,() => {
    console.log('Server is running on port: 3000')
});




