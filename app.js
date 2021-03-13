const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const Routes = require('./routes/Routes');
const Keys = require('./Keys/Keys');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(fileUpload());
app.use(Routes);

mongoose.connect(Keys.mongodbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT || 5000, function () {
  console.log('Server is running on port 5000.');
});
