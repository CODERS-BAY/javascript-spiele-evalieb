let userWon = 0;
let pcWon = 0;
let winningRounds = 0; 
let userPoints;
let pcPoints;
let pP; 
let uP;
let pc;

function playSSP(){
    //Auf wieviel gewonnene Runden soll gespielt werden?
    winningRounds = wonRounds.value;
    console.log(winningRounds);
    
        //if the user wants to play more than one round
    if(winningRounds > 0){
        //screen ausblenden
        rounds.classList.add('hidden');
        

        let sspGame = document.getElementById('sspGame');
        sspGame.classList.remove('firstHidden');

        let cont = document.getElementById('cont');
        cont.style.background = "transparent";

        uP = document.getElementById('uP'); 
        uP.classList.remove('firstHidden');
        pP = document.getElementById('pP'); 
        pP.classList.remove('firstHidden');

        userPoints = document.getElementById('userPoints'); 
        userPoints.classList.remove('firstHidden');
        // userPoints = userPoints.append(userWon);
    
        pcPoints = document.getElementById('pcPoints');
        pcPoints.classList.remove('firstHidden');
        // pcPoints = pcPoints.append(pcWon);

        spielstand.innerHTML = "Du spielst auf " + winningRounds + " gewonnene Runden!";

    }else { //wenn der Benutzer keine gültige Zahl eingegeben hat
        popup.classList.remove('hidden');
        popupH3.innerHTML= 'Bitte gib eine Zahl > 0 ein';
    }
    
}

//Schere = 1; Stein = 2; Papier = 3; 
let pcElement = 0; 
let pcWonRound = "Der PC hat diese Runde gewonnen";
let userWonRound = "Du hast diese Runde gewonnen";
let noOne = "Unentschieden, Niemand hat diese Runde gewonnen";
let whoWon; 

function userScissor() {
    pcElement = (Math.floor(Math.random()*3+1));
    if (pcElement == 2) {
        pcWon++;
        whoWon = pcWonRound;
    } else if (pcElement == 3) {
        userWon++;
        whoWon = userWonRound;
    }else {//unentschieden
        whoWon = noOne;
    }
    zwischenstand();
}

function userCrystal(){
    pcElement = (Math.floor(Math.random()*3+1));
    if(pcElement == 1){
        userWon++;
        whoWon = userWonRound;
    }else if (pcElement == 3){
        pcWon++;
        whoWon = pcWonRound;
    }else {//unentschieden
        whoWon = noOne;
    }


    zwischenstand();
}

function userPaper(){
    pcElement = (Math.floor(Math.random()*3+1));
    if(pcElement == 1){
        pcWon++;
        whoWon = pcWonRound;
    }else if (pcElement == 2){
        userWon++;
        whoWon = userWonRound;
    }else {//unentschieden
        whoWon = noOne;
    }

    zwischenstand();
}

function zwischenstand(){
    if (pcElement == 1) {
        pc = 'Schere';
    } else if (pcElement == 2) {
        pc = 'Stein';
    } else if (pcElement == 3) {
        pc = 'Papier';
    }
    if (userWon == winningRounds) {
        alert('Der PC hat ' + pc + ' gewählt!\n Sie haben gewonnen');
        playAgain();
    } else if (pcWon == winningRounds) {
        alert('Der PC hat ' + pc + ' gewählt!\n Leider verloren');
        playAgain();
    } else {  // if (userWon < winningRounds && pcWon < winningRounds){
        alert('Der PC hat ' + pc + ' gewählt\n' + whoWon);
        userPoints.innerHTML = userWon;
        pcPoints.innerHTML = pcWon;
    }
}

function playAgain(){
    location.reload();
}

function closePopUp(){
    popup.classList.add('hidden');

}
