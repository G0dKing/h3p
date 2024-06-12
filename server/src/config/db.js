const mongoose = require("mongoose");
const config = require("./config");

const connectDB = () => {
	const DB_URI = 'mongodb+srv://admin:h3padmin@h3pcluster.huxm225.mongodb.net/?retryWrites=true&w=majority&appName=h3pCluster';

	const clientOptions = {
		serverApi: { version: "1", strict: true, deprecationErrors: true },
	};

	async function run() {
	try {
		await mongoose.connect(DB_URI, clientOptions);
		await mongoose.connection.db.admin().command({ ping: 1 });
		console.log("Database: Connected.");
	} finally {
		await mongoose.disconnect();
	}
}
	run().catch(console.dir);
};

module.exports = connectDB;
