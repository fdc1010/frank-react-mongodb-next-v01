"use strict";
const { ObjectId } = require("mongodb")

module.exports = {
  up: (models) => {
    return models.Factory.bulkWrite([
      {
        insertOne: {
          document: {
            type: { _id: ObjectId('64b78ee9303d4dbbc1fff3b3') },
            city: { _id: ObjectId('64b78ee9303d4dbbc1fff3ad') },
          },
        },
      },
    ]).then((res) => {
      console.log(res.insertedCount)
    })
  },

  down: (models) => {
    return models.Factory.bulkWrite([
      {
        deleteOne: {
          filter: {
            type: { _id: ObjectId('64b78ee9303d4dbbc1fff3b3') },
            city: { _id: ObjectId('64b78ee9303d4dbbc1fff3ad') }
          },
        },
      },
    ]).then((res) => {
      console.log(res.deletedCount)
    })
  },
}
