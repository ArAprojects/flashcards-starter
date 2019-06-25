const Turn = require('../src/Turn');


class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = []
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards[this.turns]
    return this.currentCard
  }
  takeTurn(guess) {
    const turn = new Turn(guess, this.returnCurrentCard())
    this.turns += 1
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(this.currentCard.id)
      return turn.giveFeedback()
    } else {
      return turn.giveFeedback()
      }
  }

    calculatePercentCorrect() {
    return Math.floor(((this.turns - this.incorrectGuesses.length) / this.turns) * 100)
  }

  endround() {
    console.log(`** Round over! ** You answered ${calculatePercentCorrect()} of the questions correctly!`)
  }

}

module.exports = Round;
