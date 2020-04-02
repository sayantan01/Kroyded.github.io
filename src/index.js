const express=require('express');
const app=express();
const path=require('path');

let PORT=process.env.PORT||8080

app.use(express.static("public"));
app.get('/search',(req,res)=>{
    res.send("Hello");
})
app.all('*',(req,res)=>{
    res.send("<h1>404 Not Found</h1>");
});

app.listen(PORT,()=>console.log('App listening on port 8080'));