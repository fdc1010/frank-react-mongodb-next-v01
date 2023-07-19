"use strict";

const { ObjectId } = require("mongodb");

module.exports = {
  up: models => {
    return models.City.bulkWrite([
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3ad'),
            name: 'Seguin'
          }
        }
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3ae'),
            name: 'Conroe'
          }
        }
      },
      {
        insertOne: {
          document: {
            _id: ObjectId('64b78ee9303d4dbbc1fff3af'),
            name: 'Gunter'
          }
        }
      }
    ]).then(res => {
      console.log("City Model",res.insertedCount);
    });
  },

  down: models => {
    return models.City.bulkWrite([
      {
        deleteOne: {
          filter: {
            name: 'Seguin'
          }
        }
      },
      {
        deleteOne: {
          filter: {
            name: 'Conroe'
          }
        }
      },
      {
        deleteOne: {
          filter: {
            name: 'Gunter'
          }
        }
      }
    ]).then(res => {
      console.log(res.deletedCount);
    });
  }
  
};