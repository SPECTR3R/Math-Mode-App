const express = require("express");
const router = express.Router();
const uploadConfig = require("../config/cloudinary");

// call controllers

const {
  createQuestion,
  readQuestions,
  readQuestion,
  editQuestion,
  deleteQuestion,
} = require("../controllers/question");


// CRUD questions
router.post("/song", createQuestion);
router.get("/song", readQuestions);
router.get("/song/:id", readQuestion);
router.patch("/song/:id", editQuestion);
router.delete("/song/:id", deleteQuestion);

module.exports = router;