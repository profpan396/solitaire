export default class Solitaire {
    constructor(hand, foundation, tableau) {
        this.hand = hand;
        this.waste = {};
        this.foundation = foundation;
        this.tableau = tableau;
    }
}