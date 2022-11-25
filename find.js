var {client} = require("./config.js");

// console.log(client);
const find=async()=>{
  try {
    const database = client.db("student");
    const user = database.collection("list");

    const query = {name: "jony"};

    // const result = await user.findOne(query);
    const result = await user.findOne(query);
    console.log(result);
  }
  catch(error){
    console.log(error);
  } 
  finally {
    await client.close();
  }
};

find();
