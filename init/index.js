const mongoose = require("mongoose");
const initDB = require("./data.js");
const listing = require("../model/listing.js");


const MONG_URL = "mongodb://127.0.0.1:27017/wonderlust";

main().then(()=>{
    console.log("connected to DB");
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONG_URL);
};

const DB = async () => {
  await listing.deleteMany({});
  
  const updatedData = initDB.data.map((obj) => ({
    ...obj,
    owner: "68a45e1aa7e2ff4a92ac59a9", // must be a valid ObjectId
  }));

  await listing.insertMany(updatedData);

  console.log("data inserted successfully!");
};


DB();