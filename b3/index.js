const express = require('express');
const evenNum = require('./even');

const app = express();
//--------------------------//
app.listen(9000,err =>{
    if(err){
        return console.log(err);
    }
    console.log('Server started');
})

//-------------------------//

app.get("/course",(req,res)=>{
    res.send({"course":"web57"});
})

//--------------------------//
const ramdomCours = [{"course":"c4e"},{"course":"ci"},{"course":"web57"}]
let mes = Math.floor(Math.random()*ramdomCours.length);
app.get("/course/random", (req, res) => {
    res.send(ramdomCours[mes]);
})
//--------------------------//
app.get("/even", (req, res) => {
    const from = parseInt(req.query['from']);
    const to = parseInt(req.query['to']);
    res.send({ "numbers": evenNum(from, to) })
})
//-------------------------//
app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})