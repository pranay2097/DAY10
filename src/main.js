import {MongoClient} from "mongodb";

async function insertRecord(jsonDoc){
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

async function main(){
    let jsonDoc={message:"hello universe", to: "praful", from: "pranay"};
    await insertRecord(jsonDoc);
}

main();
