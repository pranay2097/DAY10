//remotely executable
//network call
//network address
//http://localhost:4000/
import express from "express";
const app = express();

// function main(req, res){
//     res.send("hello")
// }

app.get("/main", (req, res) => {
    res.send("hello callback");
} );

//http://localhost:4000
app.listen(4000);


