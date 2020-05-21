const { model, Schema } = require("mongoose");

const testSchema = new Schema(
  {
    testType: { type: String, enum: ['shortAns', 'boolAns','multAns','multOpt'], default: 'shortAns' },
    testCreator: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    students: [{
      studentID:{ type: Schema.Types.ObjectId,
      ref: "User"}

    }]
    testAnswer: Array
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Test", testSchema);