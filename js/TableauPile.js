import CardPile from './CardPile.js';

export default class TableauPile extends CardPile {
    constructor(){
        super();
    }
    grabCardsFromPosition() {
        return this.cards.splice(n, this[pile].length - 1);
    }
}