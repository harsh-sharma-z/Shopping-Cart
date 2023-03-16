const express =require('express');
const app=express();
const path=require('path');
const cookieParser=require('cookie-parser');
const exp = require('constants');
const session=require('express-session');

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(cookieParser('thisisSecretSession'));


app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({extended:true}));



const sessoinnew={
    secret:'keyboard cat',
    resave:false,
    saveUninitialized:true,
    cookie: {}
}

app.use(session(sessoinnew));


app.get('/session',(req,res)=>{
    res.send('Session created');
});


app.get('/user',(req,res)=>{
    const {username}=req.query;
    req.session.username=username;
    res.redirect('/greet');
});

app.get('/greet',(req,res)=>{
    const {username}=req.session;
    res.send(`Welcome ${username}`);
});

app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});


