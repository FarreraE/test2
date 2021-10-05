// SCREEN CONTROLLER 
/*
GRUPO DE BOTONOS QUE MANIPULAN EL SCREEN A MOSTRAR
*/
const body = document.getElementById("body");
const homeScreen = document.getElementById("homeScreen");
const profileScreen = document.getElementById("profileScreen");
const newProfileScreen = document.getElementById("newProfileScreen");
const rankingScreen = document.getElementById("rankingScreen");
const boardScreen = document.getElementById("boardScreen");
const newGameScreen = document.getElementById("newGameScreen");
const newGame = document.getElementById("newGame");
const ranking = document.getElementById("ranking");
const profiles = document.getElementById("profiles");
const newGamBtn = document.getElementById("newGamBtn");
const newGamBtnProfile = document.getElementById("newGamBtnProfile");
const newGamBtnPWOP = document.getElementById("newGamBtnPWOP");
const submitNewProfile = document.getElementById("submitNewProfile");

/*
GRUPO DE EVENT LISTENER QUE MANIPULAN EL SCREEN A MOSTRAR
*/

newGame.addEventListener("click", function () { screenController(6) });
ranking.addEventListener("click", function () { screenController(3) });
profiles.addEventListener("click", function () { screenController(4) });
newGamBtn.addEventListener("click", function () { screenController(2) });
newGamBtnProfile.addEventListener("click", function () { screenController(4) });
newGamBtnPWOP.addEventListener("click", function () { alert("The board, user, score and data will not be storage"); screenController(2) });
submitNewProfile.addEventListener("click", function () { screenController(2) });
profileNewProfile.addEventListener("click", function () { screenController(1) });
playNoProfile.addEventListener("click", function () { alert("The board, user, score and data will not be storage"); screenController(2) });

/* SETUP DEL SCREEN INICIAL*/
homeScreen.style.display = "block";
profileScreen.style.display = "none";
newProfileScreen.style.display = "none";
rankingScreen.style.display = "none";
boardScreen.style.display = "none";
newGameScreen.style.display = "none";

/* METODO QUE DESACTIVA Y ACTIVA SECCIONES DEL DOM */
function screenController(option) {

    homeScreen.style.display = "none";
    profileScreen.style.display = "none";
    newProfileScreen.style.display = "none";
    rankingScreen.style.display = "none";
    boardScreen.style.display = "none";
    settingsScreen.style.display = "none";
    newGameScreen.style.display = "none";

    switch (option) {
        case 0:
            homeScreen.style.display = "block";
            break;
        case 1:
            newProfileScreen.style.display = "block";
            break;
        case 2:
            boardScreen.style.display = "block";
            break;
        case 3:
            rankingScreen.style.display = "block";
            break;
        case 4:
            profileScreen.style.display = "block";
            break;
        case 5:
            settingsScreen.style.display = "block";
            break;
        case 6:
            newGameScreen.style.display = "block";
            break;
    }

}


// GRUPO DE CONTROLLES SETTIGNS EN TODAS LAS PANTALLAS
const settingsBTNGroup = document.querySelectorAll(".settingsBtn");
//SCREEN CONTROLLER - SETTINGS
const settingsCall = function (evento) {
    screenController(5);
}
// RECORRE EL VECTOR DE BOTONES SETTINGS Y LLAMA ALA FUNCION SETTINGSCALL
settingsBTNGroup.forEach(settingsBtn => {
    settingsBtn.addEventListener("click", settingsCall);
});

// GRUPO DE CONTROLLES HOME EN TODAS LAS PANTALLAS
const homeBTNGroup = document.querySelectorAll(".home");
//SCREEN CONTROLLER - HOME
const homeCall = function (evento) {
    screenController(0);
}
// RECORRE EL VECTOR DE BOTONES SETTINGS Y LLAMA ALA FUNCION HOMECALL
homeBTNGroup.forEach(homeBtn => {
    homeBtn.addEventListener("click", homeCall);
});