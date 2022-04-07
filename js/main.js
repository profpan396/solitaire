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
const solitaireBoard = document.querySelector('#solitaire-board');
const foundationEls = [...document.querySelectorAll('#foundation > div')];
const tableauColumns = [...document.querySelectorAll('.column')];
const handEl = document.querySelector('#hand');
const wasteContainer = document.querySelector('.waste-container');
const wasteAnchor = wasteContainer.querySelector('#waste-anchor');
const wasteExtend = wasteContainer.querySelector('#waste-extend');
console.log(solitaireBoard);
console.log(tableauColumns);
/*----- event listeners -----*/
solitaireBoard.addEventListener('click', handleClick);


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
    renderFoundation();
}

function renderDeck() {
    handEl.innerHTML = '';
    solitaire.hand.cards.forEach((card) => {
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

function renderFoundation() {
    foundationEls.forEach((pile) => {
            pile.innerHTML = '';
            let card = foundation[pile.id].cards.slice(-1)[0];
            if (!card) return;
            let cardEl = document.createElement('div');
            cardEl.setAttribute('class', `card ${card.suit}${card.shorthand} shadow`);
            pile.append(cardEl);
    });
}

function handleClick(evt) {
    if (!evt.target.classList.contains('card')) return;
    console.log(evt.target);
    console.log(evt.target.parentElement);
}