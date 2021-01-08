//das Monster soll immer in der gleichen Entfernung stehen. 
//aber wie mach ich da? damit es diese Zahl nur einmal berechnet?
let distanceToMonster = Math.round(Math.random()*90+10); //zufällige Zahl
localStorage.clickcount = 0;
let daneben;
let won; 
let lost; 
let planet = document.getElementById("planet");
    planet = planet.options[planet.selectedIndex].value;

function setBG() {
  let backgroundField = document.getElementsByTagName('fieldset')[0];

  if (planet == "erde") {
    backgroundField.style.backgroundColor = "rgba(109, 203, 231, 0.5)";
  }
  if (planet == "mond") {
    backgroundField.style.backgroundColor = "rgba(247, 202, 64, 0.5)";
  }
  if (planet == "mars") {
    backgroundField.style.backgroundColor = "rgba(216, 61, 40, 0.5)";
  }
  if (planet == "jupiter") {
    backgroundField.style.backgroundColor = "rgba(213, 147, 115, 0.5)";
  }
}



function playTheGame() {
  implementKlickCount();
  let tryings = document.getElementById('trying').value;
  console.log(tryings);
  //der user hat soviele versuche wie er oben eingibt
  //nach jedem versuch - also bei jedem Klick wird der Counter um eins hochgestellt.
  //Aber die Variable "distanceToMonster" muss gleich bleiben.
  if (localStorage.clickcount < tryings) {
    // steht für die Fallbeschleunigung
    //wenn der User nichts verstellt, Erde =
    let fallingSpeed = 9.81;
    if (planet == "mond") {
      fallingSpeed = 1.62;
    }
    if (planet == "mars") {
      fallingSpeed = 3.69;
    }
    if (planet == "jupiter") {
      fallingSpeed = 24.79;
    }

    //click counter. Hier wird gezählt, wie oft geklickt wird

    let counter = localStorage.clickcount - 1;

    //der Speed und angle wird vom User verändert
    let speed = document.getElementById("speed").value;
    let angle = document.getElementById("angle").value;

    let throwingDistance = Math.round(
      (speed * speed * Math.sin(2 * angle)) / fallingSpeed
    );
    if (throwingDistance < 0) {
      throwingDistance = throwingDistance * -1;
    }

    //einlesen testen
    //console.log(fallingSpeed + ' auf ' + planet + ' eingegeben Speed' + speed + ' Wurfwinkel: ' + angle);

    daneben = throwingDistance - distanceToMonster;

    if (throwingDistance == distanceToMonster) {
      won = document.getElementById("winner");
      won.style.backgroundColor = "#090";
      won.innerHTML = "Gratuliere! <br> Sie haben das Monster Getroffen";
      let button = document.getElementById("los");
      button.style.visibility = "hidden";

      
    } else {
      let distance;
      lost = document.getElementById("winner");
      lost.style.backgroundColor = "#900";
      if (daneben < 0){
        distance = "Zu kurz";
      }else{
        distance = "Zu weit!";
      }

      lost.innerHTML =  distance + "<br>" + daneben +  "m daneben!";
      // lost.innerHTML = "Sie haben noch " + 3-counter + " Versuche";
      counter++;
      console.log(counter + "counter");
    }
    //in der Konsole wird die geworfene Weite und die Entfernung zum Monster ausgegeben
    console.log(
      "geworfene Weite " +
        throwingDistance +
        " Entfernung zum Monster " +
        distanceToMonster
    );
    //wenn der Spieler die maximale Anzahl an Runden erreicht hat
  } else {
    let button = document.getElementById("los");
    button.style.visibility = "hidden";

    document.getElementById("winner").innerHTML =
      daneben + "m entfernt!";

    document.getElementById('playAgain').innerHTML = '<button id="again" onclick="playAgain()">Nachmal Spielen </button>';
    }
}

//test
//console.log("test");                


function implementKlickCount() {
  if (typeof (Storage) !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    // document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

function playAgain(){
  location.reload();
}


