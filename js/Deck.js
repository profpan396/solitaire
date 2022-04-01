import Card from './Card.js';
class Deck {
    constructor() {
        this.cards = [];
        this.build(); 
    }
    build() {
        Deck.suits.forEach((suit) => Deck.ranks.forEach((rank) => this.cards.push(new Card(suit, rank, Deck.valuesTable))));
    }
    deal() {
        return this.cards.pop();
    }
    shuffle() {
        
    }
}

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
console.log(deck);