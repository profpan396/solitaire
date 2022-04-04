import Deck from './Deck.js';
import Tableau from './Tableau.js';
import Foundation from './Foundation.js';
import Solitaire from './Solitaire.js';

const mainEl = document.querySelector('main');
const tableauColumns = [...document.querySelectorAll('.column')];
const handEl = document.querySelector('#hand');
console.log(mainEl);
console.log(tableauColumns);

console.log(Deck.suits);
console.log(Deck.ranks);
console.log(Deck.valuesTable);

const deck = new Deck();
deck.shuffle();

const solitaire = new Solitaire(deck, new Foundation(), new Tableau());
solitaire.tableau.setTableau(solitaire.hand); // Use the hand pile to distribute card to the tableau
console.log(solitaire);

renderDeck();
renderTableau();

function renderDeck() {
    solitaire.hand.cards.forEach((card) => {
    let cardEl = document.createElement('div');
    cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand} shadow deck` : `card back-blue shadow deck`);
    handEl.append(cardEl);
    });
}

function renderTableau() {
    tableauColumns.forEach((tableauColumn) => {
        solitaire.tableau[tableauColumn.id].forEach((card) => {
            let cardEl = document.createElement('div');
            cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand} shadow` : `card back-blue shadow`);
            tableauColumn.append(cardEl);
        });
    });
    console.log(solitaire.tableau);
}