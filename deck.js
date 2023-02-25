class CardDeck {
  constructor() {
    this.cards = setupDeck();
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      let rnd = Math.floor(Math.random() * i);
      let temp = this.cards[i];
      this.cards[i] = this.cards[rnd];
      this.cards[rnd] = temp;
    }
  }

  log() {
    const amounts = {};
    this.cards.forEach((el) => {
      if (Object.keys(amounts).includes(el.name)) {
        amounts[el.name]++;
      } else {
        amounts[el.name] = 1;
      }
    });
    console.log(amounts);
  }

  magicTrick() {
    this.cards.forEach((el, i) => {
      if (el.name === "Ace") {
        this.cards[i] = { suit: el.suit, name: "Queen", value: 12 };
      }
    });
  }
}

function setupDeck() {
  let deck = [];
  const suits = {
    0: "Hearts",
    1: "Diamonds",
    2: "Clubs",
    3: "Spades",
  };
  const values = {
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
    10: "Ten",
    11: "Jack",
    12: "Queen",
    13: "King",
    14: "Ace",
  };

  for (let j = 2; j <= 14; j++) {
    for (let i = 0; i < 4; i++) {
      deck.push({ suit: suits[i], name: values[j], value: j });
    }
  }
  return deck;
}

module.exports = { CardDeck };
