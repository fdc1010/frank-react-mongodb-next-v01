const { SchemaTypes } = require("mongoose")

module.exports = (mongoose) => {
  const { ObjectId } = SchemaTypes
  const newSchema = new mongoose.Schema(
    {
      type: {
        type: ObjectId,
        ref: "FactoryType"
      },
      class: [{
        type: ObjectId,
        ref: "MachineAllClass"
      }],
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  )
  const MachineClass = mongoose.model("MachineClass", newSchema)
  return MachineClass
}
