const mongoose =  require('mongoose');


const opp_schema =  new mongoose.Schema({
     opper_title: {
    type: String,
    required: true,
    
  },
  opper_project: {
    type: String,
    required: true,
    
  },
  opper_category: {
    type: String,
    default: "Technology",
    required :true
  },
  opper_location: {
    type: String,
    default: "Remote",
    required:true
  },
  opper_duration: {
    type: String,
    default: "6 months",
    required:true
  },
  opper_description: {
    type: String,
    required:true
  },
  opper_requirements: {
    type: [String],
    required: true
    
  },
  opper_postedDate: {
    type: Date,
    required:true
  },
  opper_deadline: {
    type: Date,
    default:Date.now,
    required:true
  }
});



module.exports = mongoose.model("Oppertunitues",opp_schema);