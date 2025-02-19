// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb://127.0.0.1:27017/spotifyProject"; //Mudar esse valor

const client = new MongoClient(URI);

export const db = client.db("spotifyProject");
//const songCollection = await db.collection("songs").find({}).toArray();

//console.log(songCollection);
