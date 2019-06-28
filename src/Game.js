const data = require('./data');
const data2 = require('./data2')
var dataset1 = [data.prototypeData, data2.javascriptTrivia]
const util = require('./util');
const chalkAnimation = require('chalk-animation');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck')


class Game {
  constructor() {
    this.roundCount = 0;
    this.currentRound;
    this.startTime
    this.dataset = dataset1

  }

  start() {
    this.startTime = new Date()
    const cards = this.dataset[this.roundCount].map(ob => ob = new Card(ob.id, ob.question, ob.answers, ob.correctAnswer))
    const deck1 = new Deck(cards)
    this.currentRound = new Round(deck1, this)
    this.printMessage(deck1, this.currentRound)
    this.printQuestion(this.currentRound)
  }

  printMessage(deck, round) {



  if (this.roundCount >= 2) {
    chalkAnimation.karaoke(`Welcome to FlashCards Round ${this.roundCount + 1}! You are playing with ${deck.countCards()} cards.
` + '\n' + `For this round you will need to correct your answers from round ${this.roundCount - 1}
------------------------------------------------------------`)
  }

  else {
    chalkAnimation.neon(`Welcome to FlashCards Round ${this.roundCount + 1}! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`);
  }

  setTimeout(() => {
      // Stop the 'Lorem ipsum' animation, then write on a new line.
      console.log(`Round ${this.roundCount + 1}`)
}, 4200);

  }

  printQuestion(round) {
    setTimeout(() => {
      util.main(round);
    }, 4200);

  }
}

module.exports = Game;
