const Turn = require('../src/Turn');
const Game = require('../src/Game')


class Round {
  constructor(deck, game) {
    this.deck = deck;
    this.game = game;
    this.currentCard = this.currentCard;
    this.turns = 0;
    this.incorrectGuesses = []
    this.roundTime;
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

    var endTime = new Date()
    this.roundTime = Math.floor((endTime - this.game.startTime) / 1000)

    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! and it only took you ${this.roundTime} seconds!`)
    if (this.calculatePercentCorrect() < 90) {
      console.log( '\n' + ' ** You need atleast 90% correct to move on to the next round, please try again! ** ' + '\n')
      this.game.start()
    }

    else {
      this.game.roundCount += 1
      this.game.start()

    }
  }
}

module.exports = Round;
