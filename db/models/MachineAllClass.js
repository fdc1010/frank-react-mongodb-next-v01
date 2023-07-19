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
  const MachineAllClass = mongoose.model('MachineAllClass', newSchema);
  return MachineAllClass;
};