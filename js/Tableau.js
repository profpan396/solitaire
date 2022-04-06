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
    cardIsLessThan(cardOne, cardTwo) {
        return cardOne.value === cardTwo.value -1;
    }
    isPlaceable(card) {
        Object.keys(this).forEach((tKey) => {
            console.log(this[tKey]);
            console.log(card);
            console.log(this[tKey].cards.slice(-1)[0]);
            console.log(`Opposite Color: ${this.cardIsOpposite(card, this[tKey].cards.slice(-1)[0])}`);
            console.log(`Less Than Pile: ${this.cardIsLessThan(card, this[tKey].cards.slice(-1)[0])}`);
            console.log(`Placeable: ${this.cardIsOpposite(card, this[tKey].cards.slice(-1)[0]) && this.cardIsLessThan(card, this[tKey].cards.slice(-1)[0])}`)
            // console.log(this[tKey].cards.slice(-1)[0].value === card.value + 1 && this[tKey].cards.slice(-1)[0]);
        });
        // return this[card.suit].cards.length === 0 ? card.value === 1 : card.value === this[card.suit].cards.slice(-1)[0].value + 1;
    }
}