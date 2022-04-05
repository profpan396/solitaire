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
}