import { MongoClient } from "mongodb";
import express from "express";
const app=express();
async function main(req,res){
    const uri="mongodb://localhost:27017"
    const client = new MongoClient(uri);


const db=client.db("mydb");
const messagecoll= db.collection("message");

let inputDocument = {message: "hello node mongo express"};
await messagecoll.inputone(inputDocument);

await client.close();
res.send("hello");
}

app.get("/main");

//http://localhost:4000
app.listen(4000);


