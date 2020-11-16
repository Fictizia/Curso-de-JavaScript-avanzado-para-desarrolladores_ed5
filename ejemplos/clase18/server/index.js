require("dotenv").config();
const express = require("express");
const axios = require('axios');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get("/search/:hero", async(req, res) => {
    const { hero } = req.params
    try {
        const { data: search } = await axios.get(
            `https://superheroapi.com/api.php/${process.env.SUPER_HERO_TOKEN}/search/${hero}`
        );
        return res.status(200).send(search);
    } catch ({ message }) {
        res.status(500).send({ message })
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
