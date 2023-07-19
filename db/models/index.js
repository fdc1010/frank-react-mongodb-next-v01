const fs = require('fs');
const path = require('path');
const Mongoose = require('mongoose');
const { default: Error } = require('next/error');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../utils/db-config.js')[env];
console.log("process.env",process.env)
if (process.env.MONGODB_URI) {
  const {uri, options} = config.database;
  Mongoose.connect(process.env.MONGODB_URI, options);
} else {
  throw new Error("Please check your connection string!");
}

const db = () => {
  const m = {};

  fs
    .readdirSync(__dirname)
    .filter(file => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(async (file) => {
      const model = await require(path.resolve(__dirname, file))(Mongoose);
      m[model.modelName] = model;
    });

  return m;
}


const models = db();
const mongoose = Mongoose;

module.exports = mongoose;
module.exports.default = models;