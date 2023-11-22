// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// creare lista email che possono accedere
const mailList = ["mariorossi.gmail.com", "nomecognome.gmail.com", "azienda.info.it", "benvenuto.gmail.com", "buongiorno.gmail.com", "ciao.gmail.com"];
// non si può mettere @
console.log(mailList);

// chiedere all'utente la sua mail
const userMail = prompt("inserisci la tua email");
console.log(userMail);

let text;

// controllare se l'utente può accedere, e scrivere un messaggio sull'esito del controllo
for (i = 0; i < mailList.length; i++){

    let mailElement = mailList[i];

    if(userMail === mailElement){
        text = "La tua mail risulta in quelle registrate, bentornato, puoi accedere a questo sito";
        console.log(text);
    }
    else{
        text = "La tua mail non corrisponde a quelle cha hanno accesso al sito, perciò non puoi accedervi";
    }

    

}