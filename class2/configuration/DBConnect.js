// step-1 
const mongoose = require("mongoose");
async function getDbConnection() {
    try {
        const isConnected = await mongoose.connect("mongodb://localhost:27017/Class2Batch18");
        console.log("DB Connected")
    }
    catch (error) {
        console.log("getting error while connnectiing with db", error)
    }
}


module.exports = getDbConnection;