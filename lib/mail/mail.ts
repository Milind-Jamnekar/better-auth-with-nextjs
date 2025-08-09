import nodemailer from "nodemailer";

// Create a test account or replace with real credentials.
const mailTransporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST || "localhost",
  port: Number(process.env.EMAIL_SERVER_PORT) || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_SERVER_USER || "test",
    pass: process.env.EMAIL_SERVER_PASSWORD || "test",
  },
});

export default mailTransporter;
