const express = require("express");

const app = express();

const allMenu = require("./data.json");

app.get("/", (req, res) => {
    res.send(allMenu);
});

app.listen(5000, () =>{
    console.log("Server is running on port 5000");
});

