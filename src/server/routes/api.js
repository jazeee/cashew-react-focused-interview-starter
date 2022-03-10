const express = require("express");
const flashcard = require("../models/flashcard");
const router = express.Router();

/* GET users listing. */
router.get("/users", function(req, res, next) {
  console.log('get "users" route hit');
  res.send({ users: ["joe", "bernie", "tulsi", "donald", "bill"] });
});

/* GET flashvards listing. */
router.get("/flashcards", async function(req, res, next) {
  const flashCards = await flashcard.readFlashcards();
  res.send(flashCards);
});


router.post("/flashcards", async function(req, res, next) {
  const { term, definition } = req.body;
  const flashCard = {term, definition};
  await flashcard.writeFlashcards(flashCard);
  res.sendStatus(200)
});

module.exports = router;
