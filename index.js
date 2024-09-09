import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import urlRoutes from './src/routes/urlroutes.js';
import redirectRoutes from './src/routes/redirectroutes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'URL Shortener API' });
});

app.use('/api/url', urlRoutes);
app.use('/short', redirectRoutes);

const PORT = process.env.PORT || 5001;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Error connecting to MongoDB:', error);
    });
