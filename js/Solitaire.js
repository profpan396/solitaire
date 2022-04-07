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
            if (card.faceup) card.flip();
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
    checkLegalMove(section, cardPos, key) {
        if (section === 'tableau') {
            if (this.foundation.isPlaceableFoundation(this[section][key].cards.slice(-1)[0])) this.foundation.addCardToFoundation(this[section][key].grabTopCard());
            else if (this.tableau.isPlaceableTableau(this[section][key].cards[cardPos])) console.log('Placeable');
            else console.log('Not placeable');
        } else if (section === 'waste') {
            if (this.foundation.isPlaceableFoundation(this[section].cards.slice(-1)[0])) this.foundation.addCardToFoundation(this[section].grabTopCard());
            else if (this.tableau.isPlaceableTableau(this[section].cards[cardPos])) console.log('Placeable');
            else console.log('Not placeable');
        } else if (section === 'foundation') {
            if (this.tableau.isPlaceableTableau(this[section][key].cards[cardPos])) console.log('Placeable');
            else console.log('Not placeable');
        }
    }
}