var client = require("./config.js");

// console.log(client);
const singleinsert = async()=> {
  try {
    const database = client.db("student");
    const user = database.collection("list");

    const doc = {
      name: "taz",
      roll: "001"
    }
    const result = await mycollection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  }
  catch(error){
    console.log(error);
  } 
  finally {
    await client.close();
  }
};

singleinsert();
