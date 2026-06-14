const Enquiry = require("../models/Enquiry");

const submitEnquiry = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const existingEnquiry = await Enquiry.findOne({ $or: [{ email }, { phone }] });

    if (existingEnquiry) {
      return res.status(400).json({
        success: false,
        message: "An enquiry with this email or phone already exists",
      });
    }


    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const enquiry = await Enquiry.create({
      name,
      email,
      phone,
    });

    await enquiry.save();
    console.log("Enquiry saved:", enquiry);
    
    res.status(201).json({
      success: true,
      message: "Enquiry submitted successfully",
      data: enquiry,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  submitEnquiry,
};