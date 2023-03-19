const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./util/db");
const User = require("./models/user");

const app = express();
require("dotenv").config();
const port = process.env.PORT;
const userRoute = require("./routes/users");

app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

app.get("/", (req, res) => {
    res.json({ info: "SAMPLE API NEW" });
});

app.use("/users", userRoute);

// app.listen(port, () => {
//     console.log(`App running on port ${port}.`);
// });

sequelize
    .sync()
    .then((result) => {
        console.log("database connected");
        app.listen(port, () => {
            console.log(`App running on port ${port}.`);
        });
    })
    .catch((err) => console.log(err));
