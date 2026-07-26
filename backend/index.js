// import authRoutes from "./routes/authRoutes.js";
// import graphRoutes from "./routes/graphRoutes.js";
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
const express = require('express');
const cors = require('cors'); // Importing CORS for handling cross-origin requests                   
const bodyParser = require('body-parser'); // Importing body-parser for parsing JSON requests
const connectDB = require('./config/db');  
const dotenv = require('dotenv');         

dotenv.config(); // Load environment variables from .env file      

const app = express();
// const PORT = 5000;

const PORT = process.env.PORT || 5000;

// Connect MongoDB
connectDB();

// Middleware
// app.use(cors());


// // this allows only this given frontend url to access these backend API 

// app.use(                                    
//     cors({
//         origin: 'https://graph-visualizer-ui-prlj.onrender.com', // frontend link
//         // origin: process.env.FRONTEND_URL,
//         // origin: "*",
//         credentials: true
//     })
// );


const allowedOrigins = new Set([
    'http://localhost:5173',
    'http://localhost:3000',
    'https://graph-visualizer-ui-prlj.onrender.com',
    ...(process.env.FRONTEND_URL ? [process.env.FRONTEND_URL] : []),
    ...(process.env.FRONTEND_URLS ? process.env.FRONTEND_URLS.split(',').map((url) => url.trim()).filter(Boolean) : []),
]);

app.use(
    cors({
        origin: function (origin, callback) {
            if (
                !origin ||
                allowedOrigins.has(origin) ||
                origin.endsWith('.vercel.app')
            ) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },

        credentials: true
    })
);




app.use(bodyParser.json());

// Routes
const dijkstraRoutes = require('./routes/dijkstraRoutes');
const authRoutes = require('./routes/authRoutes');
const graphRoutes = require('./routes/graphRoutes');

const mstRoutes = require('./routes/mstRoutes');

const schedulerRoutes = require("./routes/scheduler");  

app.use("/api", dijkstraRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/graphs", graphRoutes);

app.use('/api/mst', mstRoutes);
app.use("/api/mstDesign", require("./routes/mstDesignRoutes"));
app.use('/api/mst/designs', require('./routes/mstDesignRoutes'));

app.use("/api/topo", schedulerRoutes);  


app.get('/', (req, res) => {
  res.send('Dijkstra and topo Backend is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

