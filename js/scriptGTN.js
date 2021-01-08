let numberPC;
let upperLimit;
let counter;
let button2;
function setTheLimit(){
    //alles, was nur einmal benötigt wird, wird in dieser Funktion aufgerufen

    //das obere Limit ist für die gesamten Spielrunden gleich
    upperLimit = document.getElementById('upperLimit').value;
    let chosenLimit = document.getElementById('uL');
    chosenLimit.innerHTML  = upperLimit;
    let labelUL =  document.getElementById('labelUL');
    labelUL.innerHTML = "Dein oberes Limit: ";

    //die Zufallsnummer soll nur einmal ermittelt werden
    numberPC = Math.floor(Math.random()*upperLimit + 1);
    //wie oft soll gespielt werden, bleibt auch immer gleich
    counter = document.getElementById('counter').value;
    let allrounds = document.getElementById('ct');
    allrounds.innerHTML = counter;
    let rounds = document.getElementById('rounds');
    rounds.innerHTML = "Soviele Runden kannst du insgesamt raten: ";


    let button1 = document.getElementById('button1');
    button2 = document.getElementById('button2');
    button1.classList.add('firstHidden');
    button2.classList.remove('firstHidden');
    guessTheNumber();

}

function guessTheNumber(){

    if(counter > 0){
    //die zu ratende Nummer, ändert sich jedes mal 
    let guessNumber = document.getElementById('guessNumber').value;

    console.log(upperLimit + "uL\n" + numberPC + "NPC\n" + guessNumber + "gN\n" + counter + "Counter" );

        if(numberPC == guessNumber){
            let win = document.getElementById('spielstand');
            win.innerHTML = "Du hast Gewonnen!";

        }else if (guessNumber > numberPC){
            counter--;
            spielstand.innerHTML = "Zahl zu hoch. Du hast noch " + counter + " Versuche";
        }else{
            counter--;
            spielstand.innerHTML = "Zahl zu niedrig. Du hast noch " + counter + " Versuche";
        }
    }else{
        spielstand.innerHTML = "LEIDER VERLOREN";
    }


}

