const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const flash = require('connect-flash');
const colors = require('colors');
const dotenv = require('dotenv').config();
const multer = require('multer');
const {errorHandler} = require('./middleware/errorMiddleware');
const {connectDB} = require('./config/db');
const PORT = process.env.PORT || 8000;

// Connect to Database
connectDB();

const app = express();

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../frontend/public/imgs'))
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname)
  },
})

const upload = multer({storage: fileStorageEngine});

// app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.status(200).json({message: 'Welcome to AKLC API'});
});

// Routes
app.use('/api/v1/users', require('./routes/userRoutes'))


// Upload Images
app.post('/uploads', upload.single('userImage'),(req, res) => {
  const bodyObj = JSON.parse(JSON.stringify(req.body));
  fs.rename(path.join(__dirname, '../frontend/public/imgs/') + '/' + req.file.filename, path.join(__dirname, '../frontend/public/imgs/') + bodyObj.userEmail + '_' + req.file.filename, function(err) {
    if ( err ) console.log('ERROR: ' + err);
  });
  res.send('File Uploaded!');
})


app.use(errorHandler);

app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});