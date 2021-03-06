class Deck {
  constructor(decks) {
    this.decks = decks;
    this.amount = 4 * decks;
    this.cards = {
      1: this.amount,
      2: this.amount,
      3: this.amount,
      4: this.amount,
      5: this.amount,
      6: this.amount,
      7: this.amount,
      8: this.amount,
      9: this.amount,
      10: this.amount,
      11: this.amount,
      12: this.amount,
      13: this.amount,
    };
  }
  deal() {
    let card = Math.floor(Math.random() * 13) + 1;
    while (this.decks[card] === 0) {
      card = Math.floor(Math.random() * 13) + 1;
    }
    this.cards[card] -= 1;
    if (card >= 10) {
      return 10;
    } else {
      return card;
    }
  }
  howMany() {
    let card = 0;
    for (let i in this.cards) {
      card = this.cards[i];
    }
  }

  shuffle() {
    for (let i in this.cards) {
      this.cards[i] = this.amount;
    }
  }
}
