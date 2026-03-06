const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({

email: {
type: String,
required: true,
unique: true
},

phone: String,

firstName: String,

lastName: {
type: String,
required: true
},

city: String,

state: String

});

module.exports = mongoose.model("Contact", ContactSchema);
