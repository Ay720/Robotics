const express = require("express");
const router = express.Router();

const {submitEnquiry} = require("../controllers/enquiryController");

router.post("/enquiry", submitEnquiry);

module.exports = router;