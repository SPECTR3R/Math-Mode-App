const Test = require('../models/Test');

exports.createTest = async (req, res) => {
  const { _id: testCreator } = req.user;

  const { testName, testQuestions, testAnswers, dueDate } = req.body;
  const test = await Test.create({
    testCreator,
    testName,
    testQuestions,
    testAnswers,
    dueDate,
  });
  res.status(201).json({ test });
};

exports.viewTests = async (req, res) => {
  const tests = await Test.find({});
  res.status(200).json({ tests });
};

exports.viewTest = async (req, res) => {
  const test = await Test.findById(req.params.id).populate('testAnswers').populate('testQuestions');
  res.status(200).json({ test });
};

exports.deleteTest = async (req, res) => {
  const test = await Test.findByIdAndDelete(req.params.id);
  res.status(200).json({ test });
};
