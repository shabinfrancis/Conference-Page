const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));

app.get("/upload", (req, res) => {
    res.render("upload.ejs");
})
app.get("/", (req, res) => {
    res.render("index.ejs");
});
app.listen(8080, () => {
    console.log("app listening to port 8080.");
});

