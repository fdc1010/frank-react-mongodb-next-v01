"use strict";
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    name: String
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const FactoryType = mongoose.model('FactoryType', newSchema);
  return FactoryType;
};