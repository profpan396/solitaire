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
}