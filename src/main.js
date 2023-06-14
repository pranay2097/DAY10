//remotely executable
//network call
//network address
//http://localhost:4000/
import express from "express";
const app = express();

function main(req, res) {
    //request "some message"
    res. send("hello");
}

//https://localhost:4000/main
app.get("/main", main);

//http://localhost:4000
app.listen(4000);


