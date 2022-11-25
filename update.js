var {client} = require("./config.js");

// console.log(client);
const update=async()=>{
  try {
    const database = client.db("student");
    const user = database.collection("list");
    const filter = { name: "jony" };
    const options = { upsert: true };

    const updateDoc = {
      $set: {
        name: "tihan"
      }
    };
    const result = await user.updateOne(filter, updateDoc, options);
    console.log(
      `${result.matchedCount} document(s) matched the filter, updated ${result.modifiedCount} document(s)`,
    );
  }
  catch(error){
    console.log(error);
  } 
  finally {
    await client.close();
  }
};

update();
