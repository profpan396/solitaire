export default class Card {
    constructor(suit, rank, valuesTable) {
        this.suit = suit;
        this.rank = rank;
        this.value = valuesTable[rank].value;
        this.shorthand = valuesTable[rank].shorthand;
        this.faceup = false;
    }
    flip() {
       this.faceup = !this.faceup;
    }
}