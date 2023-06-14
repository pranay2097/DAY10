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

function first(req, res) {
    //rlogic...
    res. send("success");
}

//https://localhost:4000/main
app.get("/main", main);

//https://localhost:4000/first
app.get("/first",first)

//http://localhost:4000
app.listen(4000);


