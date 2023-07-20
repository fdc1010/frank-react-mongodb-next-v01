"use strict";
const { ObjectId } = require("mongodb")

module.exports = {
  up: (models) => {
    return models.Factory.bulkWrite([
      {
        insertOne: {
          document: {
            type: { _id: ObjectId('64b78ee9303d4dbbc1fff3b2') },
            city: { _id: ObjectId('64b78ee9303d4dbbc1fff3ad') },
          },
        },
      },
      {
        insertOne: {
          document: {
            type: { _id: ObjectId('64b78ee9303d4dbbc1fff3b3') },
            city: { _id: ObjectId('64b78ee9303d4dbbc1fff3ae') },
          },
        },
      },
      {
        insertOne: {
          document: {
            type: { _id: ObjectId('64b78ee9303d4dbbc1fff3b4') },
            city: { _id: ObjectId('64b78ee9303d4dbbc1fff3af') },
          },
        },
      },
      {
        insertOne: {
          document: {
            type: { _id: ObjectId('64b78ee9303d4dbbc1fff3b5') },
            city: { _id: ObjectId('64b78ee9303d4dbbc1fff3af') },
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
            type: { _id: ObjectId('64b78ee9303d4dbbc1fff3b2') },
            city: { _id: ObjectId('64b78ee9303d4dbbc1fff3ad') },
          },
        },
      },
      {
        deleteOne: {
          filter: {
            type: { _id: ObjectId('64b78ee9303d4dbbc1fff3b3') },
            city: { _id: ObjectId('64b78ee9303d4dbbc1fff3ae') },
          },
        },
      },
      {
        deleteOne: {
          filter: {
            type: { _id: ObjectId('64b78ee9303d4dbbc1fff3b4') },
            city: { _id: ObjectId('64b78ee9303d4dbbc1fff3af') },
          },
        },
      },
      {
        deleteOne: {
          filter: {
            type: { _id: ObjectId('64b78ee9303d4dbbc1fff3b5') },
            city: { _id: ObjectId('64b78ee9303d4dbbc1fff3af') },
          },
        },
      },
    ]).then((res) => {
      console.log(res.deletedCount)
    })
  },
}
