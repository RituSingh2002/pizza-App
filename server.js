const express=require('express');
const app=express();
const port=process.env.PORT||8000;
const ejs=require('ejs');
const expressLayout=require('express-ejs-layouts');
const path=require('path');
// assets
app.use(express.static('public'));
 

// Set template engine
app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs');
app.get('/',function(req,res){
    // res.send("Hello from server");
    // for page
    res.render('home')
})
app.get('/cart',(req,res)=>{
    res.render('./customers/cart');
})
app.get('/login',(req,res)=>{
    res.render('./auth/login');
})
app.get('/register',(req,res)=>{
    res.render('./auth/register');
})
app.listen(port,function(){
    console.log(`Listening on port 3000 ${port}`)
})