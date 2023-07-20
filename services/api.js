require("dotenv").config()
const mongodb = require("mongodb")
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}
module.exports = {
  getAllList: async () => {
    let res = await fetch("http://localhost:3000/api/lists", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
    return await res.json()
  },
  getFilterList: async () => {
    const result = []

    return result
  },
}
