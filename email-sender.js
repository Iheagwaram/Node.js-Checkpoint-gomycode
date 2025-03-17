const nodemailer = require("nodemailer");

// Replace with your email credentials
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-password", // Use App Passwords instead of real password
  },
});

const mailOptions = {
  from: "your-email@gmail.com",
  to: "your-email@gmail.com", // Sending to yourself
  subject: "Hello from Node.js!",
  text: "This is a test email sent using Nodemailer in Node.js.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
