"use strict";
const { ObjectId } = require("mongodb")

module.exports = {
  up: (models) => {
    return models.Machine.bulkWrite([
      {
        insertOne: {
          document: {
            _id: ObjectId('64b7b190b99bd276cbfc06d4'),
            machine_class: { _id: ObjectId('64b78ee9303d4dbbc1fff3b7') }
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b7b190b99bd276cbfc06d5'),
            machine_class: { _id: ObjectId('64b78ee9303d4dbbc1fff3ba') }
          },
        },
      }
    ]).then((res) => {
      console.log(res.insertedCount)
    })
  },

  down: (models) => {
    return models.Machine.bulkWrite([
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b7b190b99bd276cbfc06d4'),
            machine_class: { _id: ObjectId('64b78ee9303d4dbbc1fff3b7') }
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b7b190b99bd276cbfc06d5'),
            machine_class: { _id: ObjectId('64b78ee9303d4dbbc1fff3ba') }
          },
        },
      }
    ]).then((res) => {
      console.log(res.deletedCount)
    })
  },
}
