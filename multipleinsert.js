var {client} = require("./config.js");

// console.log(client);
const multipleinsert = async()=> {
  try {
    const database = client.db("student");
    const user = database.collection("list");

    const doc = [
        { name: "jony", roll: "002" },
        { name: "bony", roll: "003" },
        { name: "rony", healthy: "004" }
      ];
    const result = await user.insertMany(doc);
    console.log(`${result.insertedCount} documents were inserted`);
  }
  catch(error){
    console.log(error);
  } 
  finally {
    await client.close();
  }
};

multipleinsert();
