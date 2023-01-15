const express = require('express');
const path = require('path');
const fs = require('fs');
const colors = require('colors');
const dotenv = require('dotenv').config();
const multer = require('multer');
const {errorHandler} = require('./middleware/errorMiddleware');
const {connectDB} = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (_, res) => {
  res.status(200).json({
    message: `Welcome to AKLC API ${process.env.NODE_ENV}`
  })
})

// Routes
app.use('/api/v1/users', require('./routes/userRoutes'))
// SystemImages
app.use('/api/v1/systemImages', require('./routes/systemImagesRoutes'));
// Podcasts
app.use('/api/v1/podcasts', require('./routes/podcastRoutes'));
// Quotes
app.use('/api/v1/quotes', require('./routes/quotesRoutes'));
// Subscribers
app.use('/api/v1/subscribers', require('./routes/subscribersRoutes'));
// Programs
app.use('/api/v1/programs', require('./routes/programsRoutes'));

// fileStorageEngiine for the user picture
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../frontend/public/imgs'))
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname)
  },
})

// fileStorageEngine for the System Images
const fileStorageEngineSystemImage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../frontend/public/systemImgs'))
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname)
  },
})

// fileStorageEngine for the Programs Images
const fileStorageEnginePrograms = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../frontend/public/programsImgs'))
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.originalname)
  }
})

const upload = multer({storage: fileStorageEngine});
const uploadSystemImages = multer({storage: fileStorageEngineSystemImage});
const uploadProgramsImages = multer({storage: fileStorageEnginePrograms});

// Upload Images for profile
app.post('/uploads', upload.single('userImage'),(req, res) => {
  const bodyObj = JSON.parse(JSON.stringify(req.body));
  fs.rename(path.join(__dirname, '../frontend/public/imgs') + '/' + req.file.filename, path.join(__dirname, '../frontend/public/imgs/') + bodyObj.userEmail + '_' + req.file.filename, function(err) {
    if ( err ) console.log('ERROR: ' + err);
  });
  res.send('File Uploaded!');
})

// Upload System images
app.post('/uploadSystem', uploadSystemImages.single('systemImage'), (req, res) => {
  const bodyObj = JSON.parse(JSON.stringify(req.body));
  fs.rename(path.join(__dirname, '../frontend/public/systemImgs') + '/' + req.file.filename, path.join(__dirname, '../frontend/public/systemImgs/') + 'systemImage_' + bodyObj.imagePlace + '_' + req.file.filename, function(err) {
    if ( err ) console.log('ERROR: ' + err);
  });
  res.send('File Uploaded!');
})
// Update System Image
app.post('/updateSystem/:newPlace/:oldName', (req, res) => {
  const bodyObj = JSON.parse(JSON.stringify(req.params));
  console.log(bodyObj);
  const oldNameSplit = bodyObj.oldName.split("_");
  fs.rename(path.join(__dirname, '../frontend/public/systemImgs/') + bodyObj.oldName, path.join(__dirname, '../frontend/public/systemImgs/') + oldNameSplit[0] + '_' + bodyObj.newPlace + '_' + oldNameSplit[2], function(err) {
    if (err) console.log('ERROR: ' + err)
  });
  res.send('System Image Updated Name!');
})

// Upload Images for Programs
app.post('/uploadProgramsImg', uploadProgramsImages.single('programImage'), (req, res) => {
  const bodyObj = JSON.parse(JSON.stringify(req.body));
  fs.rename(path.join(__dirname, '../frontend/public/programsImgs') + '/' + req.file.filename, path.join(__dirname, '../frontend/public/programsImgs/') + 'programsImage_' + req.file.filename, function(err) {
    if (err) console.log('ERROR: ' + err);
  });
  res.send('Program File Uploaded!')
})


// Serve Frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  // FIX: below code fixes app crashing on refresh in deployment
  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} 


app.use(errorHandler);

app.listen(PORT, () => console.log(`💾 Server is starting on port: ${PORT}`));