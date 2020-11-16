require("dotenv").config();
const express = require("express");
const axios = require('axios');
const cors = require('cors');
const registerRoutes = require('./routes');
const app = express();
const port = 3000;
const router = express.Router();


app.use(cors());
app.use(registerRoutes(router));


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
