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
const foundationEls = [...document.querySelectorAll('#foundation > div')];
const tableauColumns = [...document.querySelectorAll('.column')];
const handEl = document.querySelector('#hand');
const wasteEl = document.querySelector('#waste');
const winEl = document.querySelector('#win-message');

/*----- event listeners -----*/
// window.addEventListener('load', openModal);
document.querySelector('#solitaire-board').addEventListener('click', handleClick);
document.querySelector('#new-deal').addEventListener('click', init);


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
    renderWinMessage();
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
    wasteEl.innerHTML = '';
    waste.cards.slice(-3).forEach((card, idx) => {
        let cardEl = document.createElement('div');
        cardEl.setAttribute('class', card.faceup ? `card ${card.suit}${card.shorthand} shadow` : `card back-blue shadow`);
        wasteEl.append(cardEl);
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
    if (gameWon || !evt.target.classList.contains('card')) return;

    if (evt.target.parentElement.classList.contains('column')) {
        let column = evt.target.parentElement.id;
        let idx = [...evt.target.parentElement.children].indexOf(evt.target);
        solitaire.moveCard('tableau', column, idx);
    }
    else if (evt.target.parentElement.parentElement.id === 'foundation') {
        let key = evt.target.parentElement.id;
        solitaire.moveCard('foundation', key);
    }
    else if (evt.target.parentElement.id === 'hand' || evt.target.id === 'hand') {
        if (solitaire.hand.cards.length > 0) solitaire.pullFromHand();
        else solitaire.resetHand();
    }
    else if (evt.target.parentElement.id === 'waste') solitaire.moveCard('waste');
    
    gameWon = checkGameWon();
    render();
}

function checkGameWon() {
    return Object.keys(solitaire.foundation).reduce((cardTotal, pile) => cardTotal += solitaire.foundation[pile].cards.length, 0) === 52;
}

function renderWinMessage() {
    winEl.innerText = '';
    if (gameWon) winEl.innerText = 'You Won!'
}