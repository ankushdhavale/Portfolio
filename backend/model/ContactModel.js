const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is mandatory "],
  },
  email: {
    type: String,
    required: [true, "email is mandatory "],
  },
  message: String,
});

const Contact= mongoose.model('Contact',contactSchema);

module.exports= Contact;