let express = require('express');
let mongoose = require('mongoose');
let path = require('path');
let ejs = require('ejs');
const md5 = require("md5");
let app = express();
app.set('view engine', 'ejs');
let librarySchema = require('./librarySchema');
const library = mongoose.model('Library',librarySchema);
let currentPath = path.join(__dirname, 'views');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'views')));
let login = true;
let auth  = true;

app.get('/',async(req,res)=>{
    let datas = await library.find();
    res.render('index', {login:login, auth:auth, data:datas});
})

app.get('/product',(req,res)=>{
    res.sendFile(currentPath + '/addproduct.html');
})

app.post('/add-product', async(req,res)=>{
    let details = req.body;
    let data = await library(details);
    let result = await data.save();
    console.log(result.cat, "product added successfully");
    res.redirect('/');
})

app.listen('3000', ()=>{
    console.log("Server is running on " + "3000");
})