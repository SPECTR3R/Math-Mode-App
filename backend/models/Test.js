const { model, Schema } = require('mongoose');

const testSchema = new Schema(
  {
    testCreator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    testName: String,
    testQuestions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Question',
      },
    ],
    testAnswers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Answers',
      },
    ],
    dueDate: Date,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model('Test', testSchema);
