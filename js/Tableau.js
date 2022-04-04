export default class Tableau {
    constructor(columns) {
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
                this[pileKey].push(deck.dealOne());
            }
        });
    }
}