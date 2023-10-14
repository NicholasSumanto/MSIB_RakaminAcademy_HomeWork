const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const authController = require('./controllers/authController');
const app = express();
const port = 3000;
const swaggerUi = require('./swagger');

app.use(swaggerUi);
app.use(morgan('combined'));
app.use(bodyParser.json());

require('dotenv').config(); // Load the dotenv library

// Masih error bagian auth
// login dan Register endpoiint
// app.post('/login', authController.login);
// app.post('/register', authController.register);

// Movies dan Users endpoints
const movieRoutes = require('./routes/movies');
const userRoutes = require('./routes/users');

app.use('/movies', movieRoutes);
app.use('/users', userRoutes);



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
