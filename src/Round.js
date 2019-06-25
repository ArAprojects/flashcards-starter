class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = this.currentCard;
    this.turns = 0;
  }
  returnCurrentCard() {
    this.currentCard = this.deck.cards[0]
    return this.currentCard
  }
  takeTurn() {
    this.turns += 1
  }
}

module.exports = Round;
