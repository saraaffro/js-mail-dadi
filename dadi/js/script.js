// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto. Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che “cosa” ci serve?

// Generare un numero random da 1 a 6 per l'utente
const userNumber = Math.floor(Math.random() * 6) +1;
console.log(userNumber);

// Generare un numero random da 1 a 6 per il computer
const pcNumber = Math.floor(Math.random() * 6) +1;
console.log(pcNumber);

let text;

// Confronto i due numeri, osservando quale è maggiore e assegno la vincita
if(userNumber > pcNumber){
    text = "Il tuo numero è maggiore, hai vinto!";
} else if (userNumber < pcNumber){
    text = "Il tuo numero è minore, hai perso :(";
} else{
    text = "I vostri numeri sono uguali, siete pari ;)";
}

console.log(text);
