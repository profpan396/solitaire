class Solitaire {
    constructor(hand, waste, foundation, tableau) {
        this.hand = hand;
        this.waste = waste;
        this.foundation = foundation;
        this.tableau = tableau;
        this.cardsToDraw = -1;
    }
    resetHand() {
        this.waste.cards.reverse();
        this.waste.cards.forEach((card) => {
            if(card.faceup) card.flip();
            this.hand.addCardToPile(card);
        });
    }
    draw() {
        this.hand.grabCardsFromPosition(this.cardsToDraw).forEach((card) => {
            console.log(card);
            card.flip();
            this.waste.addCardToPile(card);
        });
    }
}