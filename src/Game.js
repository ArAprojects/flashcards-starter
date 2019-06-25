const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');

const cardsy = prototypeQuestions.map(ob => ob = new Card(ob.id, ob.question, ob.))
console.log(cardsy)
class Game {
  constructor() {


  }




  start() {

    this.printMessage()
    this.printQuestion()
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
