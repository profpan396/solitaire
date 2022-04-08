class Solitaire {
    constructor(hand, waste, foundation, tableau) {
        this.hand = hand;
        this.waste = waste;
        this.foundation = foundation;
        this.tableau = tableau;
        this.cardsToDraw = -1;
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
        this.hand.drawFromDeck(this.cardsToDraw).forEach((card) => {
            console.log(card);
            card.flip();
            this.waste.addCardToPile(card);
        });
    }
    moveCard(section, key, cardPos) {
        let isPlaceableFoundation, isPlaceableTableau;
        if (section === 'tableau') {
            if (this[section][key].cards.slice(cardPos).length === 1) isPlaceableFoundation = this.foundation.isPlaceableFoundation(this[section][key].cards.slice(cardPos)[0]);
            isPlaceableTableau = this.tableau.isPlaceableTableau(this[section][key].cards[cardPos]);
            if (isPlaceableFoundation) {
                this.foundation.addCardToFoundation(this[section][key].grabTopCard());
                if (this.tableau[key].cards.length !== 0 && !this.tableau[key].cards.slice(-1)[0].faceup) this.tableau[key].cards[this.tableau[key].cards.length - 1].flip();
            }
            else if (isPlaceableTableau) {
                this.tableau[isPlaceableTableau].addCardsToPile(this[section][key].grabCardsFromPosition(cardPos));
                if (this.tableau[key].cards.length !== 0 && !this.tableau[key].cards.slice(-1)[0].faceup) this.tableau[key].cards[this.tableau[key].cards.length - 1].flip();
            }
        } else if (section === 'waste') {
            isPlaceableFoundation = this.foundation.isPlaceableFoundation(this[section].cards.slice(-1)[0]);
            isPlaceableTableau = this.tableau.isPlaceableTableau(this[section].cards.slice(-1)[0]);
            if (isPlaceableFoundation) this.foundation.addCardToFoundation(this[section].grabTopCard());
            else if (isPlaceableTableau) this.tableau[isPlaceableTableau].addCardsToPile(this[section].grabTopCard());
        } else if (section === 'foundation') {
            isPlaceableTableau = this.tableau.isPlaceableTableau(this[section][key].cards.slice(-1)[0]);
            if (isPlaceableTableau) this.tableau[isPlaceableTableau].addCardsToPile(this[section][key].grabTopCard());
        }
    }
}