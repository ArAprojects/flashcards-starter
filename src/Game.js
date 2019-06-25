const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck')



class Game {
  constructor() {


  }




  start() {
    const cards = prototypeQuestions.map(ob => ob = new Card(ob.id, ob.question, ob.answers, ob.correctAnswer))
    const deck1 = new Deck(cards)
    const round1 = new Round(deck1)
    this.printMessage(deck1, round1)
    this.printQuestion(round1)
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
