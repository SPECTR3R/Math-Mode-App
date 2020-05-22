const { model, Schema } = require('mongoose');

const questionSchema = new Schema(
  {
    questionType: {
      type: String,
      enum: ['shortAns', 'boolAns', 'multAns', 'multOpt'],
      default: 'shortAns',
    },
    questionSource: String,
    questionCreator: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },

    questionAnswer: Array,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model('Question', questionSchema);
