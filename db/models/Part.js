const { SchemaTypes } = require("mongoose");

module.exports = mongoose => {
  const {
    ObjectId
  } = SchemaTypes;
  const newSchema = new mongoose.Schema({
    description: { type: String},
    machine: {
      type: ObjectId,
      ref: "Machine"
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const Part = mongoose.model('Part', newSchema);
  return Part;
};