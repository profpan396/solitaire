import Deck from './Deck.js';
import Tableau from './Tableau.js';


console.log(Deck.suits);
console.log(Deck.ranks);
console.log(Deck.valuesTable);

const deck = new Deck();
console.log(deck);

deck.shuffle();
console.log(deck);

console.log(deck.dealOne);
// console.log(deck.dealOne());



const tableau = new Tableau(7);
console.log(tableau);

console.log(tableau.setTableau(deck));
console.log(tableau);

console.log(deck);