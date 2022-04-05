// import CardPile from './CardPile.js';
// import TableauPile from './TableauPile.js';
// import Deck from './Deck.js';
// import Tableau from './Tableau.js';
// import Foundation from './Foundation.js';
// import Solitaire from './Solitaire.js';

/*----- constants -----*/



/*----- app's state (variables) -----*/
let solitaire, deck, waste, foundation, tableau, moves, gameWon;



/*----- cached element references -----*/
const tableauColumns = [...document.querySelectorAll('.column')];
const handEl = document.querySelector('#hand');
const wasteContainer = document.querySelector('.waste-container');
const wasteAnchor = wasteContainer.querySelector('#waste-anchor');
const wasteExtend = wasteContainer.querySelector('#waste-extend');
console.log(tableauColumns);
/*----- event listeners -----*/



/*----- functions -----*/
init();

function init() {
    moves = 0;
    gameWon = false;

    deck = new Deck();
    deck.shuffle();

    waste = new CardPile();
    foundation = new Foundation(...Array(4).fill(null).map(_ => new CardPile()));
    tableau = new Tableau(...Array(7).fill(null).map(_ => new TableauPile()));

    solitaire = new Solitaire(deck, waste, foundation, tableau);
    tableau.setTableau(solitaire.hand); // Use the hand pile to distribute card to the tableau

    render();
}

function render() {
    renderDeck();
    renderTableau();
    renderWaste();
}

function renderDeck() {
    handEl.innerHTML = '';
    hand.cards.forEach((card) => {
        let cardEl = document.createElement('div');
        cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand} shadow deck` : `card back-blue shadow deck`);
        handEl.append(cardEl);
    });
}

function renderTableau() {
    tableauColumns.forEach((tableauColumn, idx) => {
        tableauColumn.innerHTML = '';
        tableau[idx].cards.forEach((card) => {
            let cardEl = document.createElement('div');
            cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand} shadow` : `card back-blue shadow`);
            tableauColumn.append(cardEl);
        });
    });
}

function renderWaste() {
    wasteContainer.childNodes.forEach((node) => node.innerHTML = '');
    waste.cards.slice(-3).forEach((card, idx) => {
        let cardEl = document.createElement('div');
        cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand} shadow` : `card back-blue shadow`);
        idx === 0 ? wasteAnchor.append(cardEl) : wasteExtend.append(cardEl);
    });
}