const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const connectionDB = require('./ConnectionDB/DBconfig')
const opper_model  = require('./Models/Oppertunities_model')

const app = express();
const port = 3000
const cors_option = {
    origin:'http://localhost:5173'
};


app.use(cors(cors_option));
app.use(body_parser.json());
app.use(express.urlencoded({extended: true}))

connectionDB();


app.get('/oppertunitiesdata', async (req ,res ) => {
    try {
        const opper_data = await opper_model.find({});
        console.log(opper_data);
        res.send(opper_data)
    } catch (error) {
        console.log(error);
        
    }
})


app.listen(port , ()=>{console.log(`the server is listening ${port}`);});