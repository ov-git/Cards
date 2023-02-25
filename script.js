const { CardDeck } = require("./deck");

const deck1 = new CardDeck();
const deck2 = new CardDeck();

deck2.shuffle();

deck1.magicTrick();

console.log("First Deck:", deck1.cards);
console.log("Second Deck:", deck2.cards);
deck1.log();
