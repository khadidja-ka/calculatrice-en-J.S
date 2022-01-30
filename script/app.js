// la calculatrice est/commence toujours à zéro
let total = 0;

//fonction qui prend deux parametres qui additionne,multiplie, soustrait, divise
function addition(x) {
    total += x;
    return total;
}

function addition(x) {
    total += x;
    return total;
}

function soustraction(x) {
    total -= x;
    return total;
}

//divise avec une condition si total = 0 , si c'est le cas attribuer la valeur de x, sinon faire le reste de l'instruction
function division(x) {
    if (total === 0) {
        return (total=x);
    }else { 
        total /= x;
        return total;
    }
}

function multiplication(x) {
    if (total === 0) {
        return (total = x);
    }else {
        total *= x;
        return total;
    }
}
