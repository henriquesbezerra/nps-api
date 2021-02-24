import express from 'express';

const app = express();


app.get('/',( req, res)=>{
    
    console.log('Someone trying access root path')
    
    return res.json({
        "message": "Bem vindo"
    });
});

app.listen('3333', ()=>{
    console.log("Server is Runnig!");
});