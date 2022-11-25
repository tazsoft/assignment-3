var {client} = require("./config.js");

// console.log(client);
const sindelete=async()=>{
  try {
    const database = client.db("student");
    const user = database.collection("list");

    const query = {name: "bony"};

    const result = await user.deleteOne(query);
    if (result.deletedCount === 1) {
      console.log("Successfully deleted one document.");
    } else {
      console.log("No documents matched the query. Deleted 0 documents.");
    }
  }
  catch(error){
    console.log(error);
  } 
  finally {
    await client.close();
  }
};

sindelete();
