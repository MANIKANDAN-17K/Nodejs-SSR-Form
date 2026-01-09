const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.set("view engine","ejs");
app.set("views","./views");


app.get("/",(req,res) => {
    res.render("index");
});

app.post("/submit",(req,res) => {
    const {username, email} = req.body;
    res.render("result",{
        name:username,
        email:email
    });
});

app.listen(PORT,() => {
    console.log(`Server running on http://localhost:${PORT}`);
});