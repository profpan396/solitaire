export default class Tableau {
    constructor() {
        for (let i = 0; i < 7; i++) {
            this[i] = [];
        }
    }
    grabAllFromPosition(n, pile) {
        return this[pile].splice(n, this[pile].length - 1);
    }
    setTableau(deck) {
        Object.keys(this).forEach((pileKey) => {
            for (let i = 0; i < parseInt(pileKey) + 1; i++) {
                if (i === parseInt(pileKey)) deck.cards[deck.cards.length - 1].flip();
                this[pileKey].push(deck.dealOne());
            }
        });
    }
}