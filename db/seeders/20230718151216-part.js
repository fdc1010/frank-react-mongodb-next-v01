"use strict";
const { ObjectId } = require("mongodb")

module.exports = {
  up: (models) => {
    return models.Part.bulkWrite([
      {
        insertOne: {
          document: {
            _id: ObjectId('64b7badac922d0e2feec1720'),
            description: "Pipe001_Part900",
            machine: { _id: ObjectId('64b7b190b99bd276cbfc06d4') }
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b7badac922d0e2feec1721'),
            description: "Pipe001_Part901",
            machine: { _id: ObjectId('64b7b190b99bd276cbfc06d4') }
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b7badac922d0e2feec1722'),
            description: "Pipe001_Part902",
            machine: { _id: ObjectId('64b7b190b99bd276cbfc06d4') }
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b7badac922d0e2feec1723'),
            description: "Pipe001_Part903",
            machine: { _id: ObjectId('64b7b190b99bd276cbfc06d4') }
          },
        },
      },
    ]).then((res) => {
      console.log(res.insertedCount)
    })
  },

  down: (models) => {
    return models.Part.bulkWrite([
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b7badac922d0e2feec1720'),
            description: "Pipe001_Part900",
            machine: { _id: ObjectId('64b7b190b99bd276cbfc06d4') }
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b7badac922d0e2feec1721'),
            description: "Pipe001_Part901",
            machine: { _id: ObjectId('64b7b190b99bd276cbfc06d4') }
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b7badac922d0e2feec1722'),
            description: "Pipe001_Part902",
            machine: { _id: ObjectId('64b7b190b99bd276cbfc06d4') }
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b7badac922d0e2feec1723'),
            description: "Pipe001_Part903",
            machine: { _id: ObjectId('64b7b190b99bd276cbfc06d4') }
          },
        },
      },
    ]).then((res) => {
      console.log(res.deletedCount)
    })
  },
}
