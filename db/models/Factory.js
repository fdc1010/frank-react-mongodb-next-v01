const { SchemaTypes } = require("mongoose")

module.exports = (mongoose) => {
  const { ObjectId } = SchemaTypes;
  const newSchema = new mongoose.Schema(
    {
      type: {
        type: ObjectId,
        ref: "FactoryType"
      },
      city: {
        type: ObjectId,
        ref: "City"
      },
    },
    {
      timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
      },
    }
  )
  const Factory = mongoose.model("Factory", newSchema)
  return Factory
}
