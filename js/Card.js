export default class Card {
    constructor(suit, rank, valuesTable) {
        this.suit = suit;
        this.rank = rank;
        this.value = valuesTable[rank];
        this.revealed = false;
    }
    flip() {
       this.revealed = !this.revealed;
    }
}