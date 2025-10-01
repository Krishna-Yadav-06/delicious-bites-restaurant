const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Email Configuration (Gmail)
const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS  // Your Gmail App Password
    }
});

// In-memory database (replace with MongoDB in production)
const users = [];
const reservations = [];

// Email Templates
const sendWelcomeEmail = async (email, name) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: '🎉 Welcome to Delicious Bites!',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #f59e0b;">Welcome to Delicious Bites!</h1>
                <p>Hi ${name},</p>
                <p>Thank you for joining us! We're excited to have you as part of our community.</p>
                <p>Your account has been successfully created. You can now:</p>
                <ul>
                    <li>Make table reservations</li>
                    <li>View our exclusive menu</li>
                    <li>Get updates on special events</li>
                </ul>
                <p>We look forward to serving you at our restaurant in Hubli, Karnataka!</p>
                <p style="margin-top: 30px;">Best regards,<br><strong>Delicious Bites Team</strong></p>
            </div>
        `
    };
    
    try {
        await transporter.sendMail(mailOptions);
        console.log('✅ Welcome email sent to:', email);
    } catch (error) {
        console.error('❌ Email error:', error);
    }
};

const sendReservationEmail = async (email, name, reservation) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: '✅ Reservation Confirmed - Delicious Bites',
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #f59e0b;">Reservation Confirmed!</h1>
                <p>Hi ${name},</p>
                <p>Your table reservation has been confirmed!</p>
                <div style="background: #f3f4f6; padding: 20px; border-radius: 10px; margin: 20px 0;">
                    <h3>Reservation Details:</h3>
                    <p><strong>Date:</strong> ${reservation.date}</p>
                    <p><strong>Time:</strong> ${reservation.time}</p>
                    <p><strong>Guests:</strong> ${reservation.guests}</p>
                    <p><strong>Phone:</strong> ${reservation.phone}</p>
                </div>
                <p>We're looking forward to welcoming you!</p>
                <p><strong>Location:</strong> MG Road, Opposite Central Mall, Hubli, Karnataka 580029</p>
                <p style="margin-top: 30px;">Best regards,<br><strong>Delicious Bites Team</strong></p>
            </div>
        `
    };
    
    try {
        await transporter.sendMail(mailOptions);
        console.log('✅ Reservation email sent to:', email);
    } catch (error) {
        console.error('❌ Email error:', error);
    }
};

// Auth Routes
app.post('/api/auth/signup', async (req, res) => {
    const { name, email, phone, password } = req.body;
    
    // Check if user exists
    if (users.find(u => u.email === email)) {
        return res.status(400).json({ message: 'User already exists' });
    }
    
    // Create user
    const user = {
        id: users.length + 1,
        name,
        email,
        phone,
        password, // In production, hash this!
        createdAt: new Date()
    };
    
    users.push(user);
    
    // Send welcome email
    await sendWelcomeEmail(email, name);
    
    res.json({
        success: true,
        message: 'User created successfully! Check your email.',
        user: { id: user.id, name: user.name, email: user.email }
    });
});

app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Generate token (in production, use JWT)
    const token = 'token_' + user.id + '_' + Date.now();
    
    res.json({
        success: true,
        token,
        user: { id: user.id, name: user.name, email: user.email }
    });
});

// Reservation Routes
app.post('/api/reservations', async (req, res) => {
    const reservation = {
        id: reservations.length + 1,
        ...req.body,
        createdAt: new Date()
    };
    
    reservations.push(reservation);
    
    // Send confirmation email
    await sendReservationEmail(req.body.email, req.body.name, reservation);
    
    res.json({
        success: true,
        message: 'Reservation created successfully! Check your email for confirmation.',
        data: reservation
    });
});

app.get('/api/reservations', (req, res) => {
    res.json({
        success: true,
        data: reservations
    });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`✅ Backend ready for Delicious Bites Restaurant`);
});
