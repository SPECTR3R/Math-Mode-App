const Question = require('../models/Question');

exports.createQuestion = async (req, res) => {
  const { _id: questionCreator } = req.user;
  const { questionType, questionSource, questionAnswer } = req.body;
  const question = await Question.create({
    questionType,
    questionSource,
    questionCreator,
    questionAnswer,
  });
  res.status(201).json({ question });
};

exports.viewQuestions = async (req, res) => {
  const questions = await Question.find({}).populate('questionCreator');
  res.status(200).json({ questions });
};

exports.viewQuestion = async (req, res) => {
  const question = await Question.findById(req.params.id).populate('questionCreator');
  res.status(200).json({ question });
};

exports.editQuestion = async (req, res) => {
  const { questionType, questionSource, questionAnswer } = req.body;
  const question = await Question.findByIdAndUpdate(
    req.params.id,
    { $set: { questionType, questionSource, questionAnswer } },
    { new: true }
  );
  res.status(200).json({ question });
};

exports.deleteQuestion = async (req, res) => {
  const question = await Question.findByIdAndDelete(req.params.id);
  res.status(200).json({ question });
};
