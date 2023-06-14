import { insertMessage, readMessage } from "./mydb.js";



async function main(){
    //insert
    let jsonDoc={message:"hello universe", to: "praful", from: "pranay"};
    await insertMessage(jsonDoc);

    //read
    let list = readMessage();
    console.log(list);
}

main();
