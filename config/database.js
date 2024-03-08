// connection krna hai
// kiska

// nodejs ka aur mongodb
// mongoose hona chahiye


// mongoose use krna hia uska instance leke ao
const mongoose = require('mongoose')

require("dotenv").config();


const dbConnect = function() {
    mongoose.connect(process.env.DATABASE_URL) 
    .then(() => {
        console.log("DB ka connection ho gaya...")
    })
    .catch((error) => {
        console.log("issue in DB CONNEction...")
        console.log(error.message);
        // khud se find out kro kya kr rhi ye line
        process.exit(1)
    })
}


module.exports = dbConnect;