const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Create a transporter for nodemailer (for sending emails)
    let transporter = nodemailer.createTransport({
        service: 'smtp.ethereal.email',
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'cleveland.thompson@ethereal.email', // Replace with your email
            pass: '8B53DPVwNnd25uSyxY'   // Replace with your password
        }
    });

    let mailOptions = {
        from: email,
        to: 'cleveland.thompson@ethereal.email',
        subject: `Contact form submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error sending email');
        } else {
            return res.status(200).send('Message sent successfully');
        }
    });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
