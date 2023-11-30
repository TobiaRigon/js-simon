const numeriSimon = document.getElementById("numeri_simon");
const verdetto = document.getElementById("risultato");
const risultatoGiusti = document.getElementById("numeri_individuati");
const risultatoSbagliati = document.getElementById("numeri_sbagliati");

numeriIndovinati = [];
numeriSbagliati = [];
let numeriCasuali;

// esegui funzione gioco

giocoSimonSays();


// ===========FUNZIONI===================


// Funzione Gioco Simon Says

function giocoSimonSays(){


    // Generazione dei numeri casuali
    
    numeriCasuali = generaNumeriCasuali();


    // Chiamata per mostrare i numeri
    mostraNumeri();


    //  nascondi numeri
    setTimeout(nascondiNumeri,2990)


    // dope 30 secondi 
    setTimeout(() => {
        
    

        // Chiedi numeri utente
        const numeriUtente = chiediNumeriUtente();

        //  confronta numeri
        const risultatiConfronto = confrontaNumeri(numeriCasuali, numeriUtente);

        // visualizza risultati
        if (numeriIndovinati.length === 1){
            verdetto.innerHTML = `Mi dispiace. Hai indovinato solo ${numeriIndovinati.length} numero,
            ne hai dimenticati ${numeriSbagliati.length} `
        }
        else if (numeriIndovinati.length >= (numeriCasuali.length / 2)){
            verdetto.innerHTML = `Complimenti! Hai indovinato ${numeriIndovinati.length} numeri,
            ne hai dimenticati solo ${numeriSbagliati.length} `
        }else if  (numeriIndovinati.length === 0){
            verdetto.innerHTML =`Mi dispiace.Non hai indovinato nessun numero.`
        }else{
            verdetto.innerHTML =`Mi dispiace. Hai indovinato solo ${numeriIndovinati.length} numeri,
            ne hai dimenticati ${numeriSbagliati.length} `
        };

        risultatoGiusti.innerHTML = "Numeri indovinati:" + numeriIndovinati;
        risultatoSbagliati.innerHTML = "Numeri sbagliati:" + numeriSbagliati;


        console.log("Numeri indovinati:", numeriIndovinati);
        console.log("Numeri sbagliati:", numeriSbagliati);

    },
    3000); // 30 secondi

}

// Funzione mostrare i numeri
function mostraNumeri() {
   numeriSimon.innerHTML = numeriCasuali;

    console.log(numeriCasuali);
  }

// Funzione Generazione dei numeri casuali
function generaNumeriCasuali() {
  numeriCasuali = [];

  for (let i = 0; i < 5; i++) {
    let numeroCasuale = Math.floor(Math.random() * 99) + 1;
    numeriCasuali.push(numeroCasuale);
  }

  return numeriCasuali;
}

//  Funzione chiedi numero all'utente
function chiediNumeriUtente() {
    const numeriUtente = [];
    
    for (let i = 0; i < 5; i++) {
      // Chiedi all'utente di inserire i numeri uno alla volta
      let numeroInserito = prompt(`Inserisci il ${i + 1}° numero che ricordi:`);
      numeriUtente.push(parseInt(numeroInserito, 10));
    }
    
    return numeriUtente;
}

// funzione confronta numeri
function confrontaNumeri(numeriCasuali, numeriUtente) {
    
    // Confronta i numeri e riempi gli array appropriati
    for (let i = 0; i < 5; i++) {
      if (numeriCasuali.includes(numeriUtente[i])) {
        numeriIndovinati.push(numeriUtente[i]);
      } else {
        numeriSbagliati.push(numeriUtente[i]);
      }
    }
  
    return { numeriIndovinati, numeriSbagliati };
  }

//    funzione nascondi numeri
function nascondiNumeri(){
    numeriSimon.innerHTML = "";
};