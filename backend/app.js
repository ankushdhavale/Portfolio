const express = require("express");
const app = express();
const morgan = require("morgan");
const Contact = require("./model/ContactModel");

app.use(morgan("dev"));

app.use(express.json());

const getAllContacts = async(req, res) => {
    try {
        const contacts =await Contact.find();
        res.status(201).json(contacts);
        
    } catch (error) {
        res.status(400).send(error)
    }
  
};

const postContact = async (req, res) => {
    try {
        const newContact = await Contact.create(req.body);
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).send(error)
    }
 
};

app.route("/contact").get(getAllContacts).post(postContact);

module.exports = app;
