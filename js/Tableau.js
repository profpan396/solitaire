class Tableau {
    constructor(...tableauPiles) {
        tableauPiles.forEach((tableauPile, idx) => this[idx] = tableauPile);

    }
    setTableau(hand) {
        Object.keys(this).forEach((pileKey) => {
            for (let i = 0; i < parseInt(pileKey) + 1; i++) {
                if (i === parseInt(pileKey)) hand.cards[hand.cards.length - 1].flip();
                this[pileKey].cards.push(hand.dealOne());
            }
        });
    }
    cardIsOpposite(cardOne, cardTwo) {
        return cardTwo === undefined || cardOne.isRed() !== cardTwo.isRed();
    }
    cardIsLessThan(cardOne, cardTwo) {
        return cardOne.value === 13 && !cardTwo || cardOne.value === cardTwo.value - 1;
    }
    isPlaceableTableau(card) {
        let key;
        let tabIndices = Object.keys(this);
        for (const tabIdx in tabIndices) {
            let cardTwo = this[tabIdx].cards.slice(-1)[0];
            if (this[tabIdx].cards.length === 0 && card.rank !== 'king') continue;
            else if (this.cardIsOpposite(card, cardTwo) && this.cardIsLessThan(card, cardTwo)) return tabIdx;
        }
        // Object.keys(this).forEach((tKey) => {
        //     let cardTwo = this[tKey].cards.slice(-1)[0];
        //     if (this[tKey].cards.length === 0 && card.rank !== 'king') return;
        //     else if (this.cardIsOpposite(card, cardTwo) && this.cardIsLessThan(card, cardTwo)) key = tKey;
        // });
        return false;
    }
}