//  Dependecies
const express = require('express');
const multer = require('multer');
const path = require('path');

//  Express Application
const app = express();

//  Port to the server
const port = process.env.port || 3000;

//  Multer configuration code for file uploads
const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  })

const upload = multer({storage: storage});

//  View engine for engine for ejs
app.set('view engine', 'ejs');
app.set('views', './views' );

//  Static files from the public directory
app.use(express.static('./public'));
app.use(express.static('./views'));

app.get("/", (req, res)=> {
    res.render("upload")
}) 

//  Route to display the upload form(upload.ejs)
app.post('/profile', upload.single('blank'), function(req,res){
    // if they have file
    if(!req.file){
        // 400 res.status(400).send("no file upload")
    }
    console.log(req.file);
    console.log(req.body);
    res.send("file upload")
});

//  Handle file upload


app.listen(port, (req,res) => {
    console.log('Server is running', port)
});
