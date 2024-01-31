/* Esercizi extra. 
Esercizi extra
NOTA: tutti gli esercizi devono essere svolti usando le funzioni
1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa. */

let stringa = "Aaa bd ff";

let mostUsed = (phrase) => {
  let stringObj = {};
  let phraseArr = Array.from(phrase);

  phraseArr.forEach((char) => {
    if (Object.keys(stringObj).includes(char)) {
      stringObj[char] += 1;
      return;
    }
    stringObj[char] = 1;
  });

  let biggestValue = 0;
  let biggestKey = null;

  for (const key in stringObj) {
    if (stringObj[key] > biggestValue) {
      biggestValue = stringObj[key];
      biggestKey = key;
    }
  }

  return biggestKey;
};

mostUsed(stringa);

/*
2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. 
Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. 
Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`. */

let stringa1 = 'listeDn'; 
let stringa2 = 'silent'; 

let checkAnagramma = (stringa1, stringa2) => {
    let result = true; 
    for(char of stringa1.toLowerCase()) {
       if (!stringa2.toLowerCase().includes(char)){
        result = false;
        break 
       } 
    }
    for(char of stringa2.toLowerCase()) {
        if (!stringa1.toLowerCase().includes(char)){
         result = false;
         break 
        } 
     }
    return result; 
}

checkAnagramma(stringa1, stringa2);



/* 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”].
4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981
6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
Es.
X = 2
'# '
'##'
X = 3
'# '
'## '
'###'
7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC”
8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y.
Es. array: [1, 2, 3, 4], y: 2 ⇒ [[ 1, 2], [3, 4]]
array: [1, 2, 3, 4, 5], y: 4 ⇒ [[ 1, 2, 3, 4], [5]]
9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
Es.
X = 3
' # '
' ### '
'#####'
10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN:
Es. N = 2
[[1, 2],[4, 3]]
N = 3
[[1, 2, 3],[8, 9, 4],[7, 6, 5]]
N = 4
[[1, 2, 3, 4],[12, 13, 14, 5],[11, 16, 15, 6],[10, 9, 8, 7]]
*/
