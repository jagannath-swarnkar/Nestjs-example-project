require('dotenv').config()

export default {
    mongoURI: process.env.MONGOOSE_URI
}
console.log(process.env.MONGOOSE_URI)