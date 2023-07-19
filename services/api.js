require('dotenv').config()
const mongodb = require('mongodb')
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}
module.exports = {
  getAllList: async () => {
    let cities = []
    const uri = process.env.MONGODB_URI
    const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }
    const MongoClient = new mongodb.MongoClient(uri, options)
    MongoClient.connect(async (error, client) => {
      if (error) {
        return console.log('Unable to connect to database')
      }
      console.log(`Connected correctly`)
      const collections = client
      console.log("client",collections)
        
    });
    // const models = require("../db/models")["City"]
    
    return cities
  },
  getFilterList: async () => {
    const result = []
    
    return result;
  }
}