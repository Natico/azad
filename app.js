var players = [];


var tass = 0;
var nobat = 0;

var playersCount = parseInt(prompt("tedad player :"));

for (var index = 1; index <= playersCount; index++) {

    var playersName = prompt("player " + index + " , smet chie :");
    var playersColor = prompt("color chie :");

    var player = {
        color: playersColor,
        name: playersName,
        num: index,
        state: null,
    }

    players.push(player);
    createPlayerDom(player)
}



function randomTass() {

    tass = Math.floor(Math.random() * 6) + 1

    /* bendaz meghdar tass ro toie input */
    var tt = document.querySelector('.show-tass')
    tt.value = tass;

    move(nobat, tass);
}

function createPlayerDom(player) {
    /** player begir ie div barash besaz ran div ro be rang player dar biar */


    var playersBox = document.querySelector('.players-box')
    var newPlayer = document.createElement("div");
     newPlayer.style.background = player.color;
     newPlayer.classList.add("playerBox");
     newPlayer.classList.add("player-"+ player.num);

     playersBox.appendChild(newPlayer);



}

function move(player , tass) {

    /* mohre bazikon ro pida kon va montaghelesh kon be jaie ke tass mige*/
    var nobateKie;

    if(nobat == 0){
        nobateKie = ".player-1";
    }else{

        nobateKie = ".player-"+nobat;
    }

    var movePlayer = document.querySelector(nobateKie);

    var clone = movePlayer.cloneNode(true);

    var findBox = document.querySelector("[data-box-number='"+tass+"']");

    findBox.appendChild(clone);








    nobat =+1
    if(nobat > playersCount) {
        nobat = 1
    }

    
}






