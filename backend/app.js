const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const connectionDB = require('./ConnectionDB/DBconfig');
const routers = require('./Routers/Consultant_routers')


const app = express();
const port = 3000
const cors_option = {
    origin:'http://localhost:5173'
};


app.use(cors(cors_option));
app.use(body_parser.json());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

connectionDB();


app.use('/' , routers)

app.listen(port , ()=>{console.log(`the server is listening ${port}`);});