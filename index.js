const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config()
const port = process.env.PORT || 8080;
const userRoute = require('./routes/users')

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get("/", (req, res) => {
    res.json({ info: "SAMPLE API NEW" });
});

app.use('/users',userRoute);

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
