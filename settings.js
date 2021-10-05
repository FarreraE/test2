/*
CLASS SETTINGS GUARDA LAS OPCIONES DEL USER  THEME, MUSICA Y SONIDOS
**MUSICA Y SONIDO NO SE ENCUENTRAN DISPONIBLES EN ESTE MOMENTO 
*/
class Settings {
    constructor(theme, music, sound) {
        this.theme = theme;
        this.music = music;
        this.sound = sound;
    }
}
//VARIABLE QUE GUARDAR EL CSS DEL DOM 
const styleCss = document.documentElement.style;
/* GRUPO DE BOTONES EN LA PANTALLA PROFILE Y SETTINGS 
PARA SELECCIONAR EL THEME 
*/
const themeGreen = document.getElementById("themeGreen");
const themePurple = document.getElementById("themePurple");
const themeDark = document.getElementById("themeDark");
const themeLight = document.getElementById("themeLight");

const themeGreenS = document.getElementById("themeGreenS");
const themePurpleS = document.getElementById("themePurpleS");
const themeDarkS = document.getElementById("themeDarkS");
const themeLightS = document.getElementById("themeLightS");

themeGreen.addEventListener("click", function () { setTheme(0) });
themePurple.addEventListener("click", function () { setTheme(1) });
themeDark.addEventListener("click", function () { setTheme(2) });
themeLight.addEventListener("click", function () { setTheme(3) });

themeGreenS.addEventListener("click", function () { setTheme(0) });
themePurpleS.addEventListener("click", function () { setTheme(1) });
themeDarkS.addEventListener("click", function () { setTheme(2) });
themeLightS.addEventListener("click", function () { setTheme(3) });

let themeOption = null;

/*
setTheme cambia la clase de los ID del DOM para cambiar el estilo del DOM
*/
function setTheme(Option) {

    themeGreen.className = "themeExample green";
    themePurple.className = "themeExample purple";
    themeDark.className = "themeExample dark";
    themeLight.className = "themeExample light";
    themeOption = Option;

    switch (Option) {

        case 0:
            $('.themeGreen').className = "themeExample green activeTheme";
            styleCss.setProperty('--colorPrima', '#7ecc87');
            styleCss.setProperty('--colorSecun', '#4f5250');
            styleCss.setProperty('--colorThird', '#fff');
            styleCss.setProperty('--gradientBase', '#478d4f');
            styleCss.setProperty('--gradient', 'linear-gradient(180deg, #95da9d 0%, #75b989 74%)');
            styleCss.setProperty('--gradientBoard', 'linear-gradient(310deg, #95da9d 0%, #75b989 74%)');
            styleCss.setProperty('--gradientEnd', '#75b989');
            break;
        case 1:
            $('.themePurple').className = "themeExample purple activeTheme";

            styleCss.setProperty('--colorPrima', '#4c5186');
            styleCss.setProperty('--colorSecun', '#39A3CD');
            styleCss.setProperty('--colorThird', '#43DEBB');
            styleCss.setProperty('--gradientBase', 'rgb(30, 33, 64)');
            styleCss.setProperty('--gradient', 'linear-gradient(180deg, rgba(30, 33, 64, 1) 0%, rgba(34, 37, 71, 1) 10%, rgba(37, 41, 79, 1) 30%, rgba(41, 46, 86, 1) 75%, rgba(45, 50, 94, 1) 94%)');
            styleCss.setProperty('--gradientBoard', 'linear-gradient(310deg, rgba(30, 33, 64, 1) 0%, rgba(34, 37, 71, 1) 10%, rgba(37, 41, 79, 1) 30%, rgba(41, 46, 86, 1) 75%, rgba(45, 50, 94, 1) 94%)');
            styleCss.setProperty('--gradientEnd', 'rgba(45, 50, 94,1)');
            break;
        case 2:
            $('.themeDark').className = "themeExample dark activeTheme";

            styleCss.setProperty('--colorPrima', '#5c5e62');
            styleCss.setProperty('--colorSecun', '#68d1c5');
            styleCss.setProperty('--colorThird', '#000');
            styleCss.setProperty('--gradientBase', 'rgb(255, 255, 255)');
            styleCss.setProperty('--gradient', 'linear-gradient(0deg, #282B30 0%, #232324 74%)');
            styleCss.setProperty('--gradientBoard', 'linear-gradient(310deg, #282B30 0%, #232324 74%)');
            styleCss.setProperty('--gradientEnd', '#282B30');
            break;
        case 3:
            $('.themeLight').className = "themeExample light activeTheme";

            styleCss.setProperty('--colorPrima', '#fff');
            styleCss.setProperty('--colorSecun', '#000');
            styleCss.setProperty('--colorThird', '#6d6d6d');
            styleCss.setProperty('--gradientBase', 'rgb(255, 255, 255)');
            styleCss.setProperty('--gradient', 'linear-gradient(0deg, #f0f0f0 0%, #fff 74%)');
            styleCss.setProperty('--gradientBoard', 'linear-gradient(310deg, #f0f0f0 0%, #fff 74%)');
            styleCss.setProperty('--gradientEnd', '#f0f0f0');
            break;
    }

}

class Player {

    constructor(playerName, playerID, playerScore, playerSettings) {
        this.playerName = playerName;
        this.playerID = playerID;
        this.playerScore = playerScore;
        this.playerSettings = playerSettings;
    }
}
let playerList = [];
// CREA UN NUEVO USUARIO Y LO GUARDA EN EL LOCAL STORAGE
function createUser() {

    //CAPTURA EL USERNAME
    const username = document.getElementById("playerName").value;
    let playerScore = [2];
    playerScore[0] = new Score(0, 0);
    playerScore[1] = new Score(0, 0);
    playerScore[2] = new Score(0, 0);

    const music = document.getElementById("music").checked;
    const sound = document.getElementById("sound").checked;

    let playerSettings = new Settings(themeOption, music, sound);

    newPlayer = new Player(username, 1, playerScore, playerSettings);

    playerList.push(newPlayer);
    // CONVIERTE LA LISTA DE JUGADORES A JSON
    listPlayerJSON = JSON.stringify(playerList);
    // GUARDO LA LISTA EN FORMATO JSON
    localStorage.setItem('playerListJSON', listPlayerJSON);
    console.log("capturado");

    let listAux = localStorage.getItem('playerListJSON');
    listAuxParse = JSON.parse(listAux);

    player1.innerHTML = listAuxParse[1].playerName;

}
let playerScore = new Score(100, 200);
let playerSettingsT = new Settings(themeOption, true, false);

let newPlayerAux = new Player("Ely Farrera", 1, playerScore, playerSettingsT);
playerList.push(newPlayerAux);

// NEW PROFILE BTN

const profileNewProfile = document.getElementById("profileNewProfile");
const playNoProfile = document.getElementById("playNoProfile");


/*---------- END PLAYER SECTION -----*/