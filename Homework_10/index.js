// import lib
const express = require('express');
const path = require('path'); 
const bodyParser = require('body-parser');
// import src
const db = require('./src/config/dbConfig');
const moviesRoutes = require('./src/routes/moviesRoutes');
const userRoutes = require('./src/routes/usersRoutes');
const uploadRoutes = require('./src/routes/uploadRoutes');

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'src', 'views')); 
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(uploadRoutes);
app.use('/movies', moviesRoutes);
app.use('/users', userRoutes);


db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Connected to database');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }
});
