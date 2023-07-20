"use strict";
require("dotenv").config()
const fs = require("fs")
const path = require("path")
const Mongoose = require("mongoose")
const basename = path.basename(__filename)

if (process.env.MONGODB_URI) {
  Mongoose.connect(process.env.MONGODB_URI)
} else {
  console.error("Please check your connection string!")
  // throw new Error("Please check your connection string!")
}

const db = () => {
  const m = {}
  const excludeElem = ["_app.js","_document.js","_error.js","index.jsx"]
  fs
    .readdirSync(__dirname)
    .filter((file) => {
      return (
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js" && !excludeElem.includes(file)
      )
    })
    .forEach((file) => {
      const model = require(path.resolve(__dirname, file))(Mongoose);
      m[model.modelName] = model;
    })
  return m
}

const models = db()
const mongoose = Mongoose

module.exports = mongoose
module.exports.default = models