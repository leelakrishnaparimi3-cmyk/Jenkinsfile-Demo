const express=require("express");

const app=express();

const PORT=3000;

app.get("/",(req,res)=>{
    res.send("App is Working Fine");
})

app.listen(PORT,"0.0.0.0",()=>{
    console.log('SERVER is UPand Running....!')
})