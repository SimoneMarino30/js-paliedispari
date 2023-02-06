// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

//dichiarazioni variabili e costanti
const even = document.getElementById("btn_pari");
const odd = document.getElementById("btn_dispari");

const min = 1;
const max = 5;

const pcNumber = random(min, max);

//funzioni
function isEven(num) {
  return num % 2 == 0;
}

function random(min, max) {
  const numeroRandom = Math.floor(Math.random() * (max - min)) + min;
  return numeroRandom;
}

//add event listener
even.addEventListener(
  "click",

  function () {
    const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
    const sum = userNumber + pcNumber;
    if (isEven(sum)) {
      alert(
        "Tuo numero:  " +
          userNumber +
          "\nNumero computer:  " +
          pcNumber +
          "\nLa somma é:   " +
          sum +
          "\nPARI,  HAI VINTO!"
      );
    } else {
      alert(
        "Tuo numero:  " +
          userNumber +
          "\nNumero computer:  " +
          pcNumber +
          "\nLa somma é:  " +
          sum +
          "\nDISPARI,  HAI PERSO!"
      );
    }
  }
);

odd.addEventListener(
  "click",

  function () {
    const userNumber = parseInt(prompt("inserisci un numero da 1 a 5"));
    const sum = userNumber + pcNumber;
    if (isEven(sum)) {
      alert(
        "Tuo numero:  " +
          userNumber +
          "\nNumero computer:  " +
          pcNumber +
          "\nLa somma é:   " +
          sum +
          "\nPARI,  HAI PERSO!"
      );
    } else {
      alert(
        "Tuo numero:  " +
          userNumber +
          "\nNumero computer:  " +
          pcNumber +
          "\nLa somma é:   " +
          sum +
          "\nDISPARI,  HAI VINTO!"
      );
    }
  }
);
