//whow many guesses do you want to have?
let counter = document.getElementById('counter').value;
//generate the 3-digit numner
let firstDigi = Math.floor(Math.random()*9 + 1 );
let secoundDigi = Math.floor(Math.random()*9 + 1);
let thirdDigi = Math.floor(Math.random()*9 + 1);
//asking for every single number if + it counts together
console.log(firstDigi);
console.log(secoundDigi);
console.log(thirdDigi);

let firstDigiHit = false;
let secoundDigiHit = false;
let thirdDigiHit = false;

let round = 0; 

function guessThe3DigiNumber(){
    if(counter > 1 && counter <= 12){
        //dann kann gespielt werden
        let number = document.getElementById('guessNumber').value;

        if(number >= 111 && number <= 999){
            let firstNumber = number.charAt(0);
            let secoundNumber = number.charAt(1);
            let thirdNumber = number.charAt(2);
            console.log('die Zahl: ' + firstNumber + secoundNumber + thirdNumber);
            let exactHits = 0; 
            let hits = 0; 

            //compare
            if(firstDigi == firstNumber){
                exactHits++;
                hits++;
                firstDigiHit = true;
            } else if (firstDigi == secoundNumber || firstDigi == thirdNumber){
                hits++;
            }

            if(secoundDigi == secoundNumber){
                exactHits++;
                hits++;
                secoundDigiHit = true;
            } else if (secoundDigi == firstNumber || secoundDigi == thirdNumber){
                hits++;
            }

            if(thirdDigi == thirdNumber){
                exactHits++;
                hits++
                thirdDigiHit = true;
                round++;
            }else if (thirdDigi == firstNumber || thirdDigi == secoundNumber){
                hits++;
                round++;
            }else round++;

            if (firstDigiHit && secoundDigiHit && thirdDigiHit) {
              let won = document.getElementById("result");
              won.append("Gratulation! Du hast die Zahl erraten");
              let fieldset = document.getElementsByTagName('fieldset')[0];
              fieldset.style.backgroundColor = "rgba(164, 119, 96, 0.6)";
              let button = document.getElementById('button');
              button.classList.add('firstHidden');
              
            } else {
              let result = document.createElement("div");
              let choice = document.createElement("p");
                choice.append(
                    round +
                    ". Runde,  " +
                    hits +
                    " richtige Zahl(en), " +
                    exactHits +
                    " an der richtigen Stelle"
                );
              result.append(choice);

              let results = document.getElementById("result");
              results.append(result);
            }


        } else alert('Bitte geben Sie eine gültige Zahl zwischen 111 und 999 ein');

        //falls die eingegebene RUnden-Zahl nicht passt...
    }else alert('Bitte geben Sie eine Zahl zwischen eins und zwölf ein!');

}

function playAgain(){
    location.reload();
}
