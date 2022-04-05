// import CardPile from './CardPile.js';

class TableauPile extends CardPile {
    constructor(){
        super();
    }
    grabCardsFromPosition() {
        return this.cards.splice(n, this[pile].length - 1);
    }
}