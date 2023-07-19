const { SchemaTypes } = require("mongoose");

module.exports = mongoose => {
  const {
    ObjectId
  } = SchemaTypes;
  const newSchema = new mongoose.Schema({
    machine_class: {
      type: ObjectId,
      ref: "MachineClass"
    },
    parts: [{
      type: ObjectId,
      ref: "Part"
    }]
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const Machine = mongoose.model('Machine', newSchema);
  return Machine;
};