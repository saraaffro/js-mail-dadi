// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.


// seleziono input
const inputMail = document.getElementById("mail");
const sendButton = document.getElementById("sendbutton");


// creare lista email che possono accedere
const mailList = ["mariorossi@gmail.com", "nomecognome@gmail.com", "azienda@info.it", "benvenuto@gmail.com", "buongiorno@gmail.com", "ciao@gmail.com"];
// console.log(mailList);


// controllare se l'utente può accedere, e scrivere un messaggio sull'esito del controllo
// funzionamento click
sendButton.addEventListener("click",

    function(){

        let emailFound = false;
    
        // chiedere all'utente la sua mail
        let userMail = inputMail.value;
        console.log(userMail);
     
        // controllo se l'email è nella lista
        for(let i = 0; i < mailList.length; i++){
            
            // prendo elemento iesimo della lista
            let mailElement = mailList[i];

            if(mailElement.toLowerCase() === userMail.toLowerCase()){
                emailFound = true;
            }
        }
        

        if(emailFound === true){
            alert("La tua email può accedere, bentornato!")
        }
        else{
            alert("La tua email non può accedere, riprova")
        }
    }
);



