/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
/*Procedimento:
1) prendo la prima lettera della parola
2) se la prima lettera == vocale assegno 1, altrimenti 0
*/

// Dichiara la funzione qui.
function vocali (parola){
    let numeroVocali = 0;
    for (let i=0; i<parola.length; i++){
        if(parola[i] == "a" || parola [i] == "e" || parola[i] =="i" || parola[i] =="o" || parola[i] =="u"){
           numeroVocali += 1
        }
    }
    return numeroVocali
}

// Invoca la funzione qui e stampa il risultato in console
let risultato = vocali (word)
console.log(risultato)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)