const mongoose = require('mongoose');

const connectToDb = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
        // anshumanadmin password -> anshuman123
        }).then(() => {
            console.log('MongoDB connection established');
        });
        
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
    }
module.exports = connectToDb;