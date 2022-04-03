export default class Tableau {
    constructor(columns) {
        for (let i = 0; i < columns; i++) {
            this[i] = [];
        }
    }
    grabAllFromPosition(n, pile) {
        return this[pile].splice(n, this[pile].length - 1);
    }
    setTableau(deck) {
        Object.keys(this).forEach((pileKey) => {
            let cardsToDeal = parseInt(pileKey) + 1;
            console.log(cardsToDeal);
            for (let i = 0; i < cardsToDeal; i++) {
                this[pileKey].push(deck.dealOne());
            }
        });
    }
}