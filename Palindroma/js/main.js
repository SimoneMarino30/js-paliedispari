// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// Chiedere all'utente di inserire una parola
const string = prompt("Inserisci una parola");

// Invocazione della funzione
checkPalindrome(string);

// Creare una funzione per capire se la parola inserita è palindroma
function checkPalindrome(string) {
  // Length della stringa in una variabile
  const len = string.length;

  // Ciclo metà della stringa inserita
  for (let i = 0; i < len / 2; i++) {
    // console.log(string[i]);               // Prime lettere della metà della mia parola
    // console.log(string[len - 1 - i]);     // Stampo la fine della parola, torno indietro di una lettera (-1 partendo dall' ultima lettera), tolgo i.

    // Controllo SE la prima metà e la seconda della stringa non coincidono
    if (string[i] !== string[len - 1 - i]) {
      //  Allora non è palindroma
      return alert("La tua parola non è palindroma");
    }
  }
  //    SE coincidono: la parola è palindroma
  return alert("La tua parola è palindroma");
}
