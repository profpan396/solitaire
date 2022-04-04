import Deck from './Deck.js';
import Tableau from './Tableau.js';
import Foundation from './Foundation.js';
import Solitaire from './Solitaire.js';

const mainEl = document.querySelector('main');
const tableauColumns = [...document.querySelectorAll('.column')];
console.log(mainEl);
console.log(tableauColumns);

console.log(Deck.suits);
console.log(Deck.ranks);
console.log(Deck.valuesTable);

const deck = new Deck();
deck.shuffle();

const solitaire = new Solitaire(deck, new Foundation(), new Tableau());
solitaire.tableau.setTableau(solitaire.hand);
console.log(solitaire);

renderDeck()
renderTableau();

function renderDeck() {
    deck.cards.forEach((card, idx) => {
    let cardEl = document.createElement('div');
    cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand}` : `card ${card.suit}${card.shorthand} back-blue`);
    mainEl.append(cardEl);
    });
}

function renderTableau() {
    tableauColumns.forEach((tableauColumn) => {
        solitaire.tableau[tableauColumn.id].forEach((card) => {
            let cardEl = document.createElement('div')
            cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand}` : `card ${card.suit}${card.shorthand} back-blue`);
            tableauColumn.append(cardEl);
        });
    });
    console.log(solitaire.tableau);
}
// deck.shuffle();
// console.log(deck);

// console.log(deck.dealOne);
// // console.log(deck.dealOne());



// const tableau = new Tableau(7);
// console.log(tableau);

// console.log(tableau.setTableau(deck));
// console.log(tableau);

// console.log(deck);