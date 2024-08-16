let express = require("express");
let app = express();
const port = 3000;

let path = require("path");
app.use(express.urlencoded({extended: true}));

app.set("views engine", "ejs");
app.set("views", path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, ()=>{
    console.log("Server is stating: 3000");
});


let details = [];
app.post("/fake", (req, res)=>{
    let {to_name, to_number, by_name, by_number, amount} = req.body;
    details.push({to_name, to_number, by_name, by_number, amount});
    res.render("fake_details.ejs", {details});
});