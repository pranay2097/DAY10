import {MongoClient} from "mongodb";

async function insertMessage(jsonDoc){
    const uri = "mongodb://127.0.0.1:27017";
    //open the connection
    const client = new MongoClient(uri);

    const db = client.db("mydb");
    const message = db.collection("message");

    //let jsonDoc={message:"hello world", to: "praful", from: "pranay"};
    await message.insertOne(jsonDoc);

    //close the connection
    await client.close();
    console.log("record added");
}

async function readMessage(){
    const uri = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(uri);

    //logic of read
    let db = client.db("mydb");
    let message = db.collection("message");

    let list = message.find().toArray();
    await client.close();

    return list;
}


async function main(){
    let jsonDoc={message:"hello universe", to: "praful", from: "pranay"};
    //await insertRecord(jsonDoc);
    let list = readMessage();
    console.log(list);
}

main();
