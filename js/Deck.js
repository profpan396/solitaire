// import Card from './Card.js';
// import CardPile from './CardPile.js';

class Deck extends CardPile {
    constructor() {
        super();
        Deck.suits.forEach((suit) => Deck.ranks.forEach((rank) => this.cards.push(new Card(suit, rank, Deck.valuesTable))));
    }
    dealOne() {
        return super.grabTopCard();
    }
    drawFromDeck(n) {
        return this.cards.splice(n, this.cards.length).reverse();
    }
    shuffle() {
        this.cards.forEach((_, idx) => {
            let randIdx = Math.floor(Math.random() * this.cards.length) //Pick random index from cards array
            let currentCard = this.cards[idx]; //Hold current card
            this.cards[idx] = this.cards[randIdx]; //Replace card at idx with random card pulled at randIdx
            this.cards[randIdx] = currentCard; //Replace random card with current card
        });
    }
}

// Add constants to Deck prototype
Deck.suits = ['h', 'd', 's', 'c'];
Deck.ranks = ['ace', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'jack', 'queen', 'king'];
Deck.valuesTable = {
    ace: { value: 1, shorthand: 'A' },
    two: { value: 2, shorthand: '02' },
    three: { value: 3, shorthand: '03' },
    four: { value: 4, shorthand: '04' },
    five: { value: 5, shorthand: '05' },
    six: { value: 6, shorthand: '06' },
    seven: { value: 7, shorthand: '07' },
    eight: { value: 8, shorthand: '08' },
    nine: { value: 9, shorthand: '09' },
    ten: { value: 10, shorthand: '10' },
    jack: { value: 11, shorthand: 'J' },
    queen: { value: 12, shorthand: 'Q' },
    king: { value: 13, shorthand: 'K' },
};


