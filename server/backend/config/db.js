const mongoose = require('mongoose');
const connectionURL = process.env.MONGODBCONNECTION;

mongoose.connect(connectionURL, async () => {
    console.log('Mongo data base is successfully connected✅');
})