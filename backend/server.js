const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const {connectDB} = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to Database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to AKLC API'});
});

// Routes
app.use('/api/v1/users', require('./routes/userRoutes'))

app.use(errorHandler);

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});