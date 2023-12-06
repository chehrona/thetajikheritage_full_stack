const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(cors(corsOptions));

// Routes
const homeRoutes = require('./routes/homeRoutes');
const languageRoutes = require('./routes/languageRoutes');
const cuisineRoutes = require('./routes/cuisineRoutes');

const db = require("./models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

var corsOptions = {
  	origin: "http://localhost:3000"
};


// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Use route files
app.use('/', homeRoutes);
app.use('/language', languageRoutes);
app.use('/cuisine', cuisineRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  	console.log(`Server is running on port ${PORT}.`);
});