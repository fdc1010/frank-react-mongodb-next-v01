
"use strict";
const { ObjectId } = require("mongodb");

module.exports = {
  up: models => {
    return models.FactoryType.bulkWrite([
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3b2'),
            name: 'Pipe and Box'
          }
        }
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3b3'),
            name: 'Steel'
          }
        }
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3b4'),
            name: 'Precast'
          }
        }
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3b5'),
            name: 'Exterior'
          }
        }
      }
    ]).then(res => {
      console.log(res.insertedCount);
    });
  },

  down: models => {
    return models.FactoryType.bulkWrite([
      {
        deleteOne: {
          filter: {
            name: 'Pipe and Box'
          }
        }
      },
      {
        deleteOne: {
          filter: {
            name: 'Steel'
          }
        }
      },
      {
        deleteOne: {
          filter: {
            name: 'Precast'
          }
        }
      },
      {
        deleteOne: {
          filter: {
            name: 'Exterior'
          }
        }
      }
    ]).then(res => {
      console.log(res.deletedCount);
    });
  }
  
};