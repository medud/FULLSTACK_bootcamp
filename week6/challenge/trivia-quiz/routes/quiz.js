// routes/quiz.js
const express = require('express');
const router = express.Router();

// Hard-coded questions
const triviaQuestions = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
  { question: "What is the largest mammal in the world?", answer: "Blue whale" },
];

// In-memory state (simulating per-user state for demo)
let currentQuestionIndex = 0;
let score = 0;

// GET /quiz - start or show current question
router.get('/', (req, res) => {
  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      question: triviaQuestions[currentQuestionIndex].question,
      questionNumber: currentQuestionIndex + 1
    });
  } else {
    res.json({ message: "Quiz finished! Go to /quiz/score to see your score." });
  }
});

// POST /quiz - submit answer and move to next
router.post('/', (req, res) => {
  const userAnswer = req.body.answer;
  if (!userAnswer) {
    return res.status(400).json({ message: "Please provide an answer." });
  }

  const correctAnswer = triviaQuestions[currentQuestionIndex].answer;
  const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();

  if (isCorrect) {
    score++;
  }

  const feedback = isCorrect ? "Correct! 🎉" : `Incorrect. ❌ The correct answer was: ${correctAnswer}`;

  currentQuestionIndex++;

  if (currentQuestionIndex < triviaQuestions.length) {
    res.json({
      feedback,
      nextQuestion: triviaQuestions[currentQuestionIndex].question
    });
  } else {
    res.json({
      feedback,
      message: "Quiz completed! Visit /quiz/score to see your final score."
    });
  }
});

// GET /quiz/score - show final score
router.get('/score', (req, res) => {
  res.json({
    score,
    total: triviaQuestions.length,
    message: `You scored ${score} out of ${triviaQuestions.length}`
  });

  // Reset game
  currentQuestionIndex = 0;
  score = 0;
});

module.exports = router;
