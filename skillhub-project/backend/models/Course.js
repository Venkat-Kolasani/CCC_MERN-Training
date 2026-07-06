const mongoose = require("mongoose");

const courseSchema =
new mongoose.Schema({

  title: {  
    type: String,  
    required: true  
  },

  students: {  
    type: Number,  
    required: true  
  },

  description: {
    type: String,
    required: false
  },

  instructor: {
    type: String,
    required: false
  },

  duration: {
    type: String,
    required: false
  },

  category: {
    type: String,
    required: false
  }

},  
{  
  timestamps: true  
});

module.exports =
mongoose.model(  
  "Course",  
  courseSchema  
);