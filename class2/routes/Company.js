//step-1 
const express = require("express");

//step-2

const router = express.Router();

//step-3

const { createCompany, getAllCompany, getSingleCompany,
    deleteSingleCompany, updateSingleCompany }
    = require("../controllers/Company.js")

//step-4

router.post("/create-company", createCompany);

router.get("/all-company", getAllCompany);

router.get("/single-company", getSingleCompany);

router.delete("/delete-single-company", deleteSingleCompany);

router.put("/upadte-single-company", updateSingleCompany);

//step-5
module.exports = router;