class CardPile {
    constructor() {
        this.cards = [];
    }
    grabTopCard() {
        return this.cards.pop();
    }
    addCardToPile(card) {
        this.cards.push(card);
    }
    grabCardsFromPosition(n) {
        return this.cards.splice(n, this.cards.length);
    }
    addCardsToPile(cards) {
        this.cards = this.cards.concat(cards);
    }
}