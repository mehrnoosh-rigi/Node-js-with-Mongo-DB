const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // useFindAndModify: false //stops warning in the console
        })

        console.log(`Mongo DB connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1) // exit with failure
        
    }
}

module.exports = connectDB