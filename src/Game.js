const data = require('./data');
const data2 = require('./data2')
const dataset = [data.prototypeData, data2.javascriptTrivia]
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck')



class Game {
  constructor() {
    this.roundCount = 0;
    this.currentRound;
  }

  start() {
    const cards = dataset[this.roundCount].map(ob => ob = new Card(ob.id, ob.question, ob.answers, ob.correctAnswer))
    const deck1 = new Deck(cards)
    this.currentRound = new Round(deck1, this)
    this.printMessage(deck1, this.currentRound)
    this.printQuestion(this.currentRound)
  }

  printMessage(deck, round) {
    console.log(`Welcome to FlashCards Round ${this.roundCount}! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
