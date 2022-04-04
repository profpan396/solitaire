export default class CardPile {
    constructor() {
        this.cards = [];
    }
    grabTopCard() {
        return this.cards.pop();
    }
}