// import CardPile from './CardPile.js';

class TableauPile extends CardPile {
    constructor(){
        super();
    }
    grabCardsFromPosition(n) {
        return this.cards.splice(n, this.cards.length);
    }
}