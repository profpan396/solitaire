class Foundation {
    constructor(...cardPiles) {
        this.h = cardPiles[0];
        this.d = cardPiles[1];
        this.s = cardPiles[2];
        this.c = cardPiles[3];
    }
    removeCardFromFoundation(card) {
        this[card.suit].grabTopCard();
    }
    addCardToFoundation(card) {
        this[card.suit].addCardToPile(card);
    }
    isPlaceable(card) {
        console.log(this[card.suit]);
        console.log(card.suit);
        return this[card.suit].cards.length === 0 ? card.value === 1 : card.value === this[card.suit].cards.slice(-1)[0].value + 1;
    }
}