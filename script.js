// Crea una funzione che accetti due numeri interi. Ritorna true se uno dei due è 50 o se la somma dei due è 50

let a = 30;
let b = 20;

let check50 = (a, b) => {
  return a + b === 50 ? true : (a || b) === 50 ? true : false;
};

check50(a, b); 

 /*   Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. 
      Passa la stringa e la posizione come parametri e ritorna la stringa modificata          */  

let string = 'supercalifragilisticoespiralidoso'; 

let removeChar = (givenString, position) => {
   return givenString.substr(0, position - 1) + givenString.substr(position, givenString.lenght);
};

removeChar(string, 4);


/*  Crea una funzione che controlli se due numeri sono compresi tra 40 e 60 o tra 70 e 100.
    ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false` */

let c = 70; 
let d = 98; 

let checkBetween = (c, d) => {
    return ((c >= 40 && c <= 60 ) && ( d >= 40 && d <= 60)) ? true 
    : ((c >= 70 && c <= 100) && ( d >= 70 && d <= 100)) ? true 
    : false; 
} 

checkBetween(c, d);


/* crea una funzione che accetti un nome di citta che parametro e 
   ritorni il nome stesso se inizia con "Los" o "New" altrimenti ritorna `false` */

let cityName = 'NEW YORK';

let checkName = (name) => {
    return name.toLowerCase().includes('los') ? name
    : name.toLowerCase().includes('new') ? name 
    : false ; 
}

console.log(checkName(cityName)); 