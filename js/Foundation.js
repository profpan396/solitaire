class Foundation {
    constructor() {
        this.h = [];
        this.d = [];
        this.s = [];
        this.c = [];
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