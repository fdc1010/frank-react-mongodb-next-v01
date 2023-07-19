"use strict";
const { ObjectId } = require("mongodb")
module.exports = {
  up: (models) => {
    return models.MachineClass.bulkWrite([
      {
        insertOne: {
          document: {
            _id: ObjectId('64b7b2f686a26441208b1921'),
            type: { _id: ObjectId("64b78ee9303d4dbbc1fff3b2") },
            class: [
              { _id: ObjectId("64b78ee9303d4dbbc1fff3b7") },
              { _id: ObjectId("64b78ee9303d4dbbc1fff3b8") },
              { _id: ObjectId("64b78ee9303d4dbbc1fff3b9") },
            ],
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b7b2f686a26441208b1922'),
            type: { _id: ObjectId("64b78ee9303d4dbbc1fff3b3") },
            class: [],
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b7b2f686a26441208b1923'),
            type: { _id: ObjectId("64b78ee9303d4dbbc1fff3b4") },
            class: [
              { _id: ObjectId("64b78ee9303d4dbbc1fff3ba") },
              { _id: ObjectId("64b78ee9303d4dbbc1fff3bb") },
              { _id: ObjectId("64b78ee9303d4dbbc1fff3bc") }
            ],
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b7b2f686a26441208b1924'),
            type: { _id: ObjectId("64b78ee9303d4dbbc1fff3b5") },
            class: [
              { _id: ObjectId("64b78ee9303d4dbbc1fff3bd") },
              { _id: ObjectId("64b78ee9303d4dbbc1fff3be") }
            ],
          },
        },
      }
    ]).then((res) => {
      console.log(res.insertedCount)
    })
  },

  down: (models) => {
    return models.MachineClass.bulkWrite([
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b7b2f686a26441208b1921'),
            type: { _id: ObjectId("64b78ee9303d4dbbc1fff3b2") },
            class: [
              { _id: ObjectId("64b78ee9303d4dbbc1fff3b7") },
              { _id: ObjectId("64b78ee9303d4dbbc1fff3b8") },
              { _id: ObjectId("64b78ee9303d4dbbc1fff3b9") },
            ],
          },
        },
      },{
        deleteOne: {
          filter: {
            _id: ObjectId('64b7b2f686a26441208b1922'),
            type: { _id: ObjectId("64b78ee9303d4dbbc1fff3b3") },
            class: [],
          },
        },
      },{
        deleteOne: {
          filter: {
            _id: ObjectId('64b7b2f686a26441208b1923'),
            type: { _id: ObjectId("64b78ee9303d4dbbc1fff3b4") },
            class: [
              { _id: ObjectId("64b78ee9303d4dbbc1fff3ba") },
              { _id: ObjectId("64b78ee9303d4dbbc1fff3bb") },
              { _id: ObjectId("64b78ee9303d4dbbc1fff3bc") }
            ],
          },
        },
      },{
        deleteOne: {
          filter: {
            _id: ObjectId('64b7b2f686a26441208b1924'),
            type: { _id: ObjectId("64b78ee9303d4dbbc1fff3b5") },
            class: [
              { _id: ObjectId("64b78ee9303d4dbbc1fff3bd") },
              { _id: ObjectId("64b78ee9303d4dbbc1fff3be") }
            ],
          },
        },
      }
    ]).then((res) => {
      console.log(res.deletedCount)
    })
  },
}
