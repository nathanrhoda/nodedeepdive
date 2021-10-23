const express = require("express")

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

function mid(req, res, next) {
    console.log(req.body);
    console.log(req.params);
    console.log(req.query);
    next();
}

app.get('/', mid, (req, res) => {
    res.send("Hello World");
});

app.get('/:id', mid, (req, res) => {
    const id = req.params.id;
    res.send(`Hello ${id}`);
});

app.listen(port, ()=>{
    console.log("listening on port: " + port);
})