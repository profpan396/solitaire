export default class Foundation {
    constructor(...cardPiles) {
        console.log(cardPiles);
        this.h = cardPiles[0];
        this.d = cardPiles[1];
        this.s = cardPiles[2];
        this.c = cardPiles[3];
    }
    removeCardFromFoundation(card) {
        this[card.suit].pop();
    }
    addCardToFoundation(card) {
        this[card.suit].push(card);
    }
}

const foundation = new Foundation();
console.log(foundation);