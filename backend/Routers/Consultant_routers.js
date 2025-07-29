const express = require('express');
const Router = express.Router();
const opper_model  = require('../Models/Oppertunities_model');
const consultant_model = require('../Models/Consultant_details');




Router.get('/oppertunitiesdata', async (req ,res ) => {
    try {
        const opper_data = await opper_model.find({});
        console.log(opper_data);
        res.send(opper_data)
    } catch (error) {
        console.log(error);
        
    }
})






module.exports = Router;

