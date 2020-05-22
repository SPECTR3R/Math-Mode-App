const { model, Schema } = require('mongoose');

const answerSchema = new Schema(
  {
    answerCreator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    testInfo: {
      type: Schema.Types.ObjectId,
      ref: 'Test',
    },
    isOnTime: Boolean,
    assessment: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model('Answer', answerSchema);
