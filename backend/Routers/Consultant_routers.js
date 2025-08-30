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


Router.post('/login_creadentials' , async (req,res) => {

   try {
    const {login_user , login_password } =  req.body;
    
    const user_data = await consultant_model.findOne({username:login_user});
    if(!user_data){
        return res.status(400).json({message:"User or passowrd is not correct so please do something"})
    }
    if(user_data.username == login_user && login_password == user_data.password ){
        console.log(user_data);
        res.send(user_data);   
    }else{
        res.status(400).json({message:"User or passowrd is not correct so please do something"})
    }
   } catch (error) {
    console.log(error)
   } 
});


Router.post("/form_updater" , async (req, res) => {
    try {
      const  {Certificate_Authority , Certificate_name , Course_duration , Start_date ,End_date , username} = req.body;
   
     
        
        
        
      await  consultant_model.updateOne({username:username}, 
            {
                $push:{
                    certificates:{
                            cert_name: Certificate_name , 
                            cert_authority: Certificate_Authority,
                            course_duration:Course_duration,
                            start_date:new Date(Start_date),
                            end_date:new Date(End_date)}
                }
            }
        )

        const user_data = await consultant_model.findOne({username:username});
        console.log(user_data);
        
         res.json(user_data);   
    } catch (error) {
        console.log(error);
        
    }
})




module.exports = Router;

