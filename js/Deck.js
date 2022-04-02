import Card from './Card.js';
class Deck {
    constructor() {
        this.cards = [];
        this.buildDeck(); 
    }
    buildDeck() {
        Deck.suits.forEach((suit) => Deck.ranks.forEach((rank) => this.cards.push(new Card(suit, rank, Deck.valuesTable))));
    }
    deal() {
        return this.cards.pop();
    }
    shuffle() {
        this.cards.forEach((_, i) => {
            //Pick random index from cards array
            let randIdx = Math.floor(Math.random() * this.cards.length)
            //Hold current card
            let currentCard = this.cards[i];
            //Replace card at index i with random card from index j
            this.cards[i] = this.cards[randIdx];
            //Replace random card with current card
            this.cards[randIdx] = currentCard;
        });
    }
}

// Add constants to deck prototype
Deck.suits = ['H','D','S','C'];
Deck.ranks = ['Ace','Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King'];
Deck.valuesTable = {
    Ace: 1,
    Two: 2,
    Three: 3,
    Four: 4,
    Five: 5,
    Six: 6,
    Seven: 7,
    Eight: 8,
    Nine: 9,
    Ten: 10,
    Jack: 11,
    Queen: 12,
    King: 13
};

const deck = new Deck();

console.log(Deck.suits);
console.log(Deck.ranks);
console.log(Deck.valuesTable);
console.log(deck);

console.log(deck.cards[0]);
deck.cards[0].flip();
console.log(deck.cards[0]);

deck.cards[0].flip();
console.log(deck.cards[0]);

deck.shuffle();
console.log(deck);

