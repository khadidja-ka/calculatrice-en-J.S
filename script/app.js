// // la calculatrice est/commence toujours à zéro
// let total = 0;

// //fonction qui prend deux parametres qui additionne,multiplie, soustrait, divise
// function addition(x) {
//     total += x;
//     return total;
// }

// function addition(x) {
//     total += x;
//     return total;
// }

// function soustraction(x) {
//     total -= x;
//     return total;
// }

// //divise avec une condition si total = 0 , si c'est le cas attribuer la valeur de x, sinon faire le reste de l'instruction
// function division(x) {
//     if (total === 0) {
//         return (total=x);
//     }else { 
//         total /= x;
//         return total;
//     }
// }

// function multiplication(x) {
//     if (total === 0) {
//         return (total = x);
//     }else {
//         total *= x;
//         return total;
//     }
// }

// // remettre à zero ma calculatrice
// function reset() {
//     total = 0;
// }

//récuperer tout les bouttons de ma calculatrice
const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

/**Pour chaque bouton au click récuperer ce qui a ete cliquer 
*pour ensuite le mettre dans notre calculatrice avec le textContent
*Avec += on concatene ce qu'on tape
*/
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
        
    })
});

//avec eval ca permet de calculer tout ce qu'on met à l'interieur
equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
})

//clear la calculatrice avec l'événement click ect...
clear.addEventListener('click', () => {
    result.textContent ="";
})