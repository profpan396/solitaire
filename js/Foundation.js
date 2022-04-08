class Foundation {
    constructor(...cardPiles) {
        this.h = cardPiles[0];
        this.d = cardPiles[1];
        this.s = cardPiles[2];
        this.c = cardPiles[3];
    }
    addCardToFoundation(card) {
        this[card.suit].addCardToPile(card);
    }
    isPlaceableFoundation(card) {
        if (this[card.suit].cards.length === 0 && card.rank === 'ace') return true;
        else if (this[card.suit].cards.length === 0) return false;
        else if (card.value === (this[card.suit].cards.slice(-1)[0].value + 1)) return true;
        else return false;
    }
}