class Solitaire {
    constructor(hand, waste, foundation, tableau) {
        this.hand = hand;
        this.waste = waste;
        this.foundation = foundation;
        this.tableau = tableau;
        this.cardsToDraw = -3;
    }
    resetHand() { //Modify code to be a more succinct
        this.waste.cards.reverse();
        this.waste.cards.forEach((card) => {
            if(card.faceup) card.flip();
            this.hand.addCardToPile(card);
        });
        this.waste.cards = [];
    }
    pullFromHand() {
        this.hand.drawFromDeck(this.cardsToDraw).forEach((card, idx) => {
            console.log(card);
            card.flip();
            this.waste.addCardToPile(card);
        });
    }
    checkLegalMove(card) {
        console.log(Object.keys(this.tableau));
        console.log(Object.keys(this.foundation));
        Object.keys(this.foundation).forEach((fKey) => {
            console.log(this.foundation[fKey]);
        });
        Object.keys(this.tableau).forEach((tKey) => {
            console.log(this.tableau[tKey]);
        });
    }
}