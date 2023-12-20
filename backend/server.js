const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const { createProxyMiddleware } = require('http-proxy-middleware');

// Correct CORS Options declaration
const corsOptions = {
  origin: "http://thetajikheritage:3001"
};

app.use(cors(corsOptions));

// Routes
const languageRoutes = require('./src/routes/languageRoutes');
const cuisineRoutes = require('./src/routes/cuisineRoutes');
const customsRoutes = require('./src/routes/customsRoutes');

const db = require("./src/models");
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

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Serve static files from the 'pdfs' directory
app.use('/storage', express.static(path.join(__dirname, 'storage')));

// Proxy requests to '/pdfs' to another server (your React app in development)
app.use('/storage', createProxyMiddleware({ target: 'http://thetajikheritage:3001', changeOrigin: true }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Use route files
app.use('/api/customs', customsRoutes);
app.use('/api/language', languageRoutes);
app.use('/api/cuisine', cuisineRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
