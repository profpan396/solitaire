export default class Tableau {
    constructor(...tableauPiles) {
        tableauPiles.forEach((tableauPile, i) => this[i] = tableauPile);
    }
    grabAllFromPosition(n, pile) {
        return this[pile].splice(n, this[pile].length - 1);
    }
    setTableau(deck) {
        Object.keys(this).forEach((pileKey) => {
            for (let i = 0; i < parseInt(pileKey) + 1; i++) {
                if (i === parseInt(pileKey)) deck.cards[deck.cards.length - 1].flip();
                this[pileKey].cards.push(deck.dealOne());
            }
        });
    }
}