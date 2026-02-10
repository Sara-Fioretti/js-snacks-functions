/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

// Dichiara la funzione qui.
function saluto (nome){
    return ("Ciao " + nome)
}

// Invoca la funzione qui e stampa il risultato in console
const userName = 'Mario';
saluto (userName)
console.log (saluto(userName))

//Risultato atteso se si passa 'Mario': // ciao Mario

//OPPURE con le arrow functions
const saluto1 = (nome) => console.log("Ciao " + nome)
saluto1 (userName)
