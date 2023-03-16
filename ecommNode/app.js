const cookieParser = require('cookie-parser');
const express=require('express');
const app=express();
const path=require('path');
app.set('views',path.join(__dirname,'views'));

app.use(cookieParser('thisisSecretSession'));
app.get('/setcookies',(req,res)=>{
    res
    .cookie('name','Harsh',{maxAge:7 * 24 * 60 * 60 * 1000, httpOnly:true , signed:true})
    .cookie('location','Mathura',{maxAge:7*24*60*60*1000 ,httpOnly: true})
    .cookie('age','20',{maxAge:7*24*60*60*1000 ,httpOnly: true})
    .send('Cookies created successfully');
});

app.get('/seecookies',(req,res)=>{
    res.send(req.cookies);

});

app.get('/login',(req,res)=>{
    const {login}=req.cookies;

    if(login === 'true'){
         return res.send('You are already logged in');
        
    }

        return res.redirect('/setcookies');
});

app.listen(5500,()=>{
console.log('server started on port 5500');
});