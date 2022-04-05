// import CardPile from './CardPile.js';
// import TableauPile from './TableauPile.js';
// import Deck from './Deck.js';
// import Tableau from './Tableau.js';
// import Foundation from './Foundation.js';
// import Solitaire from './Solitaire.js';

const tableauColumns = [...document.querySelectorAll('.column')];
const handEl = document.querySelector('#hand');
const wasteEl = document.querySelector('#waste');
console.log(tableauColumns);

const foundationPiles = Array(4).fill(null).map(_ => new CardPile());
const foundation = new Foundation(...foundationPiles);

const tableauPiles = Array(7).fill(null).map(_ => new TableauPile())
const tableau = new Tableau(...tableauPiles);

const waste = new CardPile();

const deck = new Deck();
console.log(deck);
deck.shuffle();
console.log(deck);

const solitaire = new Solitaire(deck, waste, foundation, tableau);
console.log(solitaire);
solitaire.tableau.setTableau(solitaire.hand); // Use the hand pile to distribute card to the tableau
console.log(solitaire);

renderDeck();
renderTableau();
renderWaste();

function renderDeck() {
    solitaire.hand.cards.forEach((card) => {
        let cardEl = document.createElement('div');
        cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand} shadow deck` : `card back-blue shadow deck`);
        handEl.append(cardEl);
    });
}

function renderTableau() {
    tableauColumns.forEach((tableauColumn, idx) => {
        tableauColumn.innerHTML = '';
        solitaire.tableau[idx].cards.forEach((card) => {
            let cardEl = document.createElement('div');
            cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand} shadow` : `card back-blue shadow`);
            tableauColumn.append(cardEl);
        });
    });
    console.log(solitaire.tableau);
}

function renderWaste() {
    wasteEl.innerHTML = '';
    solitaire.waste.cards.forEach((card) => {
        let cardEl = document.createElement('div');
        cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand} shadow` : `card back-blue shadow`);
        wasteEl.append(cardEl);
    });
}