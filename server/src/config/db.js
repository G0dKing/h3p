const mongoose = require('mongoose')
const config = require('./config')

const connectDB = () => {
	const uri = config.MONGO_URI
	const clientOptions = {
		serverApi: { version: '1', strict: true, deprecationErrors: true }
	};

	async function run() {
  	try {
    	await mongoose.connect(uri, clientOptions);
    	await mongoose.connection.db.admin().command({ ping: 1 });
    		console.log("Database: Connected.");
  		} finally {
    		await mongoose.disconnect();
  		}}
	run().catch(console.dir);
}

module.exports = connectDB
