const mongoose = require('mongoose');


const consultant_info = new mongoose.Schema({
     username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  attendance_rating: {
    type: String,
    enum: ['Excellent', 'Good', 'Average', 'Poor'],
    default: 'Not Rated'
  },

  attendance: [
    {
      date: { type: Date, required: true },
      status: {
        type: String,
        required: true
      },

      login_logout_hour: { type: Number, default: 0 }
    }
  ],
  applicantions_oppertunities: [
    {
      opper_title: { type: String, required: true },
      opper_duration: { type: String, required: true },
      application_status: {
        type: String,
        enum: ['Applied', 'Shortlisted', 'Rejected', 'Selected'],
        default: 'Applied'
      },
      applied_date: { type: Date, default: Date.now }
    }
  ],
  certificates: [
    {
      cert_name: { type: String, required: true },
      cert_authority: { type: String, required: true },
      course_duration: { type: String },
      start_date: { type: Date },
      end_date: { type: Date }
    }
  ],
  work_experience: [
    {
      company_name: { type: String, required: true },
      duration: { type: String },
      role: { type: String },
      description_of_role: { type: String },
      start_year_to_end_year: { type: String }
    }
  ],
  training: [
    {
      training_course: { type: String },
      status: {
        type: String,
        default: 'Not Started'
      }
    }
  ],
  email: {
    type: String,
    required: true,
    unique: true
  },

  Started_at: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("consultant_details",consultant_info);
