"use strict";
const { ObjectId } = require("mongodb")

module.exports = {
  up: (models) => {
    return models.MachineAllClass.bulkWrite([
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3b7'),
            name: "Radial Press",
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3b8'),
            name: "Variant",
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3b9'),
            name: "Wire Cage",
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3ba'),
            name: "Tornado",
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3bb'),
            name: "Blizzard",
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3bc'),
            name: "Prefect System",
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3bd'),
            name: "Fittings",
          },
        },
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3be'),
            name: "Misc",
          },
        },
      },
    ]).then((res) => {
      console.log(res.insertedCount)
    })
  },

  down: (models) => {
    return models.MachineAllClass.bulkWrite([
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3b7'),
            name: "Radial Press",
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3b8'),
            name: "Variant",
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3b9'),
            name: "Wire Cage",
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3ba'),
            name: "Tornado",
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3bb'),
            name: "Blizzard",
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3bc'),
            name: "Prefect System",
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3bd'),
            name: "Fittings",
          },
        },
      },
      {
        deleteOne: {
          filter: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3be'),
            name: "Misc",
          },
        },
      },
    ]).then((res) => {
      console.log(res.deletedCount)
    })
  },
}
