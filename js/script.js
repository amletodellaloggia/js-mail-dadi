// SVOLGIMENTO
// ESERCIZIO 1 - MAIL

// Creo variabile lista mail invitate e variabile mail che inserirà l'utente
const invitedEmails = [
  `topolino@email.com`,
  `pippo@email.com`,
  `paperino@email.com`,
];
const userEmail = prompt("Inserisci la tua email:");

// Effettuo un controllo che vede se la mail inserita è presente nella lista email
// Utilizzo una variabile booleana inizializzata a 'false' che mi permette di far partire il messaggio per l'utente, e che cambierà valore e quindi messaggio a seconda del risultato

let isUserInvited = false;

// Eseguo il ciclo for, per scorrere la lista mail invitate
for (let i = 0; i < invitedEmails.length; i++){
	// Eseguo il controllo di uguaglianza tra le [i] trovate dal for e il contenuto di userEmail
  if (userEmail === invitedEmails[i]) {
	// Se al controllo il contenuto di userEmail è uguale alla [i] trovata dal ciclo 'for', allora il valore di isUserInvited viene cambiato a 'true', altrimenti rimane invariato
    isUserInvited = true;
  }
}

