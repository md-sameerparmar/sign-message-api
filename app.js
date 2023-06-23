const express = require('express');
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "test.html")
})

app.use(express.static(path.join(__dirname , "")));

app.get("/one.js", (req, res) => {
    res.sendFile(__dirname + "/" + "one.js")
})

app.listen(2020, () => {console.log("app is listening on http://localhost:2020");})
