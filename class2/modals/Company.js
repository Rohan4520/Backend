// step-1 
const mongoose = require("mongoose");

//step-2
const companySchema = new mongoose.Schema({
    cName: { type: String, required: true },
    totolEmployee: { type: Number, required: true },
    cAddress: { type: String, required: true, maxLength: 40 }
})

//step-3
module.exports = mongoose.model("Company", companySchema)