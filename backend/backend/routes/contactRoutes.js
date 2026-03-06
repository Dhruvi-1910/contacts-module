const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

router.post("/", async (req,res) => {

try{

const contact = new Contact(req.body);

await contact.save();

res.json({
message:"Contact added successfully"
});

}
catch(error){

res.status(500).json({
message:"Error saving contact"
});

}

});

module.exports = router;
