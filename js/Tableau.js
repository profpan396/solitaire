class Tableau {
    constructor(columns) {
        for (let i = 0; i < columns; i++) {
            this[i] = [];
        }
    }
}

const tableau = new Tableau(7);
console.log(tableau);
console.log(tableau[0]);
