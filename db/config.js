const mongoose = require("mongoose");
require("dotenv").config();

dbConnect().catch((err) => console.log({ message: err }));

async function dbConnect() {
	await mongoose.connect(`${process.env.DB_CONNECTION}`);
	console.log("connected to: mongodb://127.0.0.1:27017/heinz");
}
