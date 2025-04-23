const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const PORT = 3007;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Emoji Data
const emojis = [
  { emoji: '😀', name: 'Smile' },
  { emoji: '🐶', name: 'Dog' },
  { emoji: '🌮', name: 'Taco' },
  { emoji: '🚗', name: 'Car' },
  { emoji: '📚', name: 'Books' },
  { emoji: '🍕', name: 'Pizza' },
  { emoji: '⚽', name: 'Soccer' },
  { emoji: '🎸', name: 'Guitar' },
  { emoji: '🐱', name: 'Cat' },
  { emoji: '🌈', name: 'Rainbow' }
];

let leaderboard = [];

function getEmojiQuestion() {
  const correct = emojis[Math.floor(Math.random() * emojis.length)];
  const distractors = emojis
    .filter(e => e.name !== correct.name)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  const options = [...distractors.map(e => e.name), correct.name]
    .sort(() => 0.5 - Math.random());

  return {
    emoji: correct.emoji,
    correctAnswer: correct.name,
    options
  };
}

app.get('/question', (req, res) => {
  res.json(getEmojiQuestion());
});

app.post('/guess', (req, res) => {
  const { answer, correct, playerName } = req.body;
  const isCorrect = answer === correct;

  if (!playerName || typeof playerName !== 'string') {
    return res.status(400).send('<p>Error: Player name is required.</p><a href="/">Try Again</a>');
  }

  let player = leaderboard.find(p => p.name === playerName);

  if (!player) {
    leaderboard.push({ name: playerName, score: isCorrect ? 1 : 0 });
  } else {
    if (isCorrect) player.score += 1;
  }

  leaderboard.sort((a, b) => b.score - a.score);

  const leaderboardHTML = leaderboard
    .map(p => `<li>${p.name}: ${p.score}</li>`)
    .join('');

  res.send(`
    <h2>${isCorrect ? '✅ Correct!' : `❌ Wrong! The correct answer was: ${correct}`}</h2>
    <ul><strong>🏆 Leaderboard:</strong>${leaderboardHTML}</ul>
    <button onclick="window.location.href='/'">Play Again</button>
  `);
});

app.get('/leaderboard', (req, res) => {
  res.json(leaderboard.slice(0, 5));
});

app.listen(PORT, () => {
  console.log(`🎮 Emoji Game running at http://localhost:${PORT}`);
});
