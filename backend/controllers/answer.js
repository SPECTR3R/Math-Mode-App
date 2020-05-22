const Answer = require('../models/Answer');

exports.createAnswer = async (req, res) => {
  const { _id: answerCreator } = req.user;

  const { assessment, isOnTime, testInfo } = req.body;
  const answer = await Answer.create({ answerCreator, assessment, isOnTime, testInfo });
  res.status(201).json({ answer });
};

exports.viewAnswers = async (req, res) => {
  const answers = await Answer.find({}).populate('answerCreator').populate('testInfo');
  res.status(200).json({ answers });
};

exports.viewAnswer = async (req, res) => {
  const answer = await Answer.findById(req.params.id)
    .populate('answerCreator')
    .populate('testInfo');
  res.status(200).json({ answer });
};
