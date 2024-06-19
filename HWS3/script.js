const express = require("express");
const app = express();

const fs = require("fs");
//const { constants } = require("fs/promises");

const path = require("path");
const filePath = path.join(__dirname, "pagesCounter.json");

try {
    if (!fs.existsSync(filePath)) {

        const pagesCounter = {
            mainPageCounter: 0,
            aboutPageCounter: 0,
        };
        fs.writeFileSync(filePath, JSON.stringify(pagesCounter));
    }
} catch (error) {

}

app.get("/", function (req, res) {
    const mainPageCounter = JSON.parse(fs.readFileSync(filePath));
    mainPageCounter.mainPageCounter += 1;
    fs.writeFileSync(filePath, JSON.stringify(mainPageCounter));
    res.send(`<h1>Main page</h1>
        <a href="/about">Link to about page</a>
        <p>Counter main page = ${mainPageCounter.mainPageCounter}</p>`);
});

app.get("/about", function (req, res) {
    const aboutPageCounter = JSON.parse(fs.readFileSync(filePath));
    aboutPageCounter.aboutPageCounter += 1;
    fs.writeFileSync(filePath, JSON.stringify(aboutPageCounter));
    res.send(`<h1>About page</h1>
        <a href="/">Link to main page</a>
        <p>Counter about page = ${aboutPageCounter.aboutPageCounter}</p>`);
});

const port = 3000;
app.listen(port);
