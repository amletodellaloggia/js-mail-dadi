// SVOLGIMENTO
// ESERCIZIO 2 - DADI

// Dichiaro due variabili che assumeranno un valore numerico (da 1 a 6) generato da 'math.random', ma utilizzerò math.floor per mostrare solo gli interi e +1 per evitare lo 0

// Le variabili sono anche inizializzate perché entreranno subito in un controllo 'if'
let	pcNumber = Math.floor(Math.random() *6 +1);
let playerNumber = Math.floor(Math.random() *6) +1;

// Il controllo 'if' comparerà quale delle due variabili ha il valore numerico generato da 'math.random' più alto, e restituisce subito un messaggio al giocatore in base al punteggio: vittoria, sconfitta, pareggio

// Aggiungo un controllo di maggioranza per playerNumber che determina vittoria per il giocatore
if (playerNumber > pcNumber) {
	console.log(`Hai vinto ! Il tuo numero è ${playerNumber}, mentre quello del computer è ${pcNumber}.`);
}

// Aggiungo un controllo di maggioranza per pcNumber che determina sconfitta per il giocatore
else if (pcNumber > playerNumber) {
	console.log(`Hai perso ! Il numero del computer è ${pcNumber}, mentre il tuo è ${playerNumber}.`);
}

// Il pareggio non ha bisogno di alcun controllo, in quanto quelli per maggiore e minore sono già stati effettuati
else {
	console.log(`Pareggio !`);
}