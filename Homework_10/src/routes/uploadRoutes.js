const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadControllers');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '../images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

router.post('/movies/:id/upload', upload.single('photo'), uploadController.uploadFileToMovie);

module.exports = router;
