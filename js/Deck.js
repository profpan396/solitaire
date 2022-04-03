import Card from './Card.js';
export default class Deck {
    constructor() {
        this.cards = [];
        Deck.suits.forEach((suit) => Deck.ranks.forEach((rank) => this.cards.push(new Card(suit, rank, Deck.valuesTable))));
    }
    dealOne() {
        return this.cards.pop();
    }
    shuffle() {
        this.cards.forEach((_, idx) => {
            //Pick random index from cards array
            let randIdx = Math.floor(Math.random() * this.cards.length)
            //Hold current card
            let currentCard = this.cards[idx];
            //Replace card at index i with random card from index j
            this.cards[idx] = this.cards[randIdx];
            //Replace random card with current card
            this.cards[randIdx] = currentCard;
        });
    }
}

// Add constants to deck prototype
Deck.suits = ['h','d','s','c'];
Deck.ranks = ['ace','two','three','four','five','six','seven','eight','nine','ten','jack','queen','king'];
Deck.valuesTable = {
    ace: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    jack: 11,
    queen: 12,
    king: 13
};

console.log(Deck.suits);
console.log(Deck.ranks);
console.log(Deck.valuesTable);

const deck = new Deck();
console.log(deck);

deck.shuffle();
console.log(deck);

console.log(deck.dealOne);
console.log(deck.dealOne());



