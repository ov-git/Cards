let x = setupDeck();
x = magicTrick(x);
// logDeck(x);
console.log(x);

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

function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    let rnd = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[rnd];
    deck[rnd] = temp;
  }
  return deck;
}

function logDeck(deck) {
  console.log(Object.values(deck));
}

function magicTrick(deck) {
  return deck.map((el) => {
    if (el.value === "Ace") {
      return { ...el, value: "Queen" };
    } else {
      return el;
    }
  });
}
