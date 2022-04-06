class Tableau {
    constructor(...tableauPiles) {
        tableauPiles.forEach((tableauPile, idx) => this[idx] = tableauPile);

    }
    setTableau(hand) {
        Object.keys(this).forEach((pileKey) => {
            for (let i = 0; i < parseInt(pileKey) + 1; i++) {
                if (i === parseInt(pileKey)) hand.cards[hand.cards.length - 1].flip();
                this[pileKey].cards.push(hand.dealOne());
            }
        });
    }
    cardIsOpposite(cardOne, cardTwo) {
        return cardOne.isRed() !== cardTwo.isRed();
    }
    isPlaceable(card) {
        Object.keys(this).forEach((tKey) => {
            console.log(this[tKey]);
            console.log(this[tKey].cards.slice(-1)[0].value === card.value + 1 && this[tKey].cards.slice(-1)[0]);
        });
        // return this[card.suit].cards.length === 0 ? card.value === 1 : card.value === this[card.suit].cards.slice(-1)[0].value + 1;
    }
}