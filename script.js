/*----------  BOARD SECTION -----*/
// CLASS BOARD - CARDS
class Board {
    // INICIALIZA EL TABLERO CON VALOR 0
    constructor(init) {
        let pInit = parseInt(init);
        this.gridA = [pInit, pInit, pInit, pInit],
            this.gridB = [pInit, pInit, pInit, pInit],
            this.gridC = [pInit, pInit, pInit, pInit],
            this.gridD = [pInit, pInit, pInit, pInit],

            this.row0 = [pInit, pInit, pInit, pInit],
            this.row1 = [pInit, pInit, pInit, pInit],
            this.row2 = [pInit, pInit, pInit, pInit],
            this.row3 = [pInit, pInit, pInit, pInit],

            this.col0 = [pInit, pInit, pInit, pInit],
            this.col1 = [pInit, pInit, pInit, pInit],
            this.col2 = [pInit, pInit, pInit, pInit],
            this.col3 = [pInit, pInit, pInit, pInit]
    }
    // ASIGNA LAS CARTAS AL TABLERO
    assign_Col_Row(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {

        this.gridA = [a, b, e, f],
            this.gridB = [c, d, g, h],
            this.gridC = [i, j, m, n],
            this.gridD = [k, l, o, p],

            this.row0 = [a, b, c, d],
            this.row1 = [e, f, g, h],
            this.row2 = [i, j, k, l],
            this.row3 = [m, n, o, p],

            this.col0 = [a, e, i, m],
            this.col1 = [b, f, j, n],
            this.col2 = [c, g, k, o],
            this.col3 = [d, h, l, p]

    }
    //ASIGNA EL VALOR DE CADA BOTON DEL HTML 
    display_Board() {
        aCard.assignCardValuesHTML(aCardBtn);
        bCard.assignCardValuesHTML(bCardBtn);
        cCard.assignCardValuesHTML(cCardBtn);
        dCard.assignCardValuesHTML(dCardBtn);
        eCard.assignCardValuesHTML(eCardBtn);
        fCard.assignCardValuesHTML(fCardBtn);
        gCard.assignCardValuesHTML(gCardBtn);
        hCard.assignCardValuesHTML(hCardBtn);
        iCard.assignCardValuesHTML(iCardBtn);
        jCard.assignCardValuesHTML(jCardBtn);
        kCard.assignCardValuesHTML(kCardBtn);
        lCard.assignCardValuesHTML(lCardBtn);
        mCard.assignCardValuesHTML(mCardBtn);
        nCard.assignCardValuesHTML(nCardBtn);
        oCard.assignCardValuesHTML(oCardBtn);
        pCard.assignCardValuesHTML(pCardBtn);
    }

    /* BORRA LOS DATOS DEL TABLERO EN CASO DE ERROR Y LLAMA A LA FUNCION 
    BOARD_MANAGER PARA GENERAR UNO NUEVO */

    reset() {

        aCard.reset();
        bCard.reset();
        cCard.reset();
        dCard.reset();
        eCard.reset();
        fCard.reset();
        gCard.reset();
        hCard.reset();
        iCard.reset();
        jCard.reset();
        kCard.reset();
        lCard.reset();
        mCard.reset();
        nCard.reset();
        oCard.reset();
        pCard.reset();

        board.assign_Col_Row(aCard, bCard, cCard, dCard, eCard, fCard, gCard, hCard, iCard, jCard, kCard, lCard, mCard, nCard, oCard, pCard);
        board_Manager();
    }

    // METODO DE PRUEBA UTILIZADO PARA COMPROBAR LOS DATOS DEL TABLERO
    ordenar() {
        // CONSOLE LOG DE CADA GRID, FILAS Y COLUMNAS DEL TABLERO
        console.log("### GRID A ###");
        for (const cardAux of this.gridA) {
            console.log(cardAux.valueCard);
        }
        console.log("### GRID B ###");
        for (const cardAux of this.gridB) {
            console.log(cardAux.valueCard);
        }
        console.log("### GRID C ###");
        for (const cardAux of this.gridC) {
            console.log(cardAux.valueCard);
        }
        console.log("### GRID D ###");
        for (const cardAux of this.gridD) {
            console.log(cardAux.valueCard);
        }
        console.log("|||| COL 0 ||||");
        for (const cardAux of this.col0) {
            console.log(cardAux.valueCard);
        }
        console.log("|||| COL 1 ||||");
        for (const cardAux of this.col1) {
            console.log(cardAux.valueCard);
        }
        console.log("|||| COL 2 ||||");
        for (const cardAux of this.col2) {
            console.log(cardAux.valueCard);
        }
        console.log("|||| COL 3 ||||");
        for (const cardAux of this.col3) {
            console.log(cardAux.valueCard);
        }
        console.log("--- ROW 0 ---");
        for (const cardAux of this.row0) {
            console.log(cardAux.valueCard);
        }
        console.log("--- ROW 1 ---");
        for (const cardAux of this.row1) {
            console.log(cardAux.valueCard);
        }
        console.log("--- ROW 2 ---");
        for (const cardAux of this.row2) {
            console.log(cardAux.valueCard);
        }
        console.log("--- ROW 3 ---");
        for (const cardAux of this.row3) {
            console.log(cardAux.valueCard);
        }
        console.log("Random Vector")
        for (const i of randomVector) {
            console.log(randomVector[i]);
        }
    }
}
// CLASE CARTA, CONSTRUCTOR 
class Card {
    constructor(xIndex, yIndex, valueCard) {
        this.xIndex = xIndex,
            this.yIndex = yIndex,
            this.valueCard = valueCard
    }
    assignCardValuesHTML(btn) {
        btn.innerHTML = this.valueCard;
    }
    reset() {
        this.valueCard = 0;
    }
};

// INICIA EL TABLERO
const board = new Board(0);
// VARIABLES GLOBLALES PARA COMPROBAR LA ASIGNACIÓN CORRECTA
randomVector = [0, 0, 0, 0];
let randomCount = 0;

// INICIA LAS CARTAS
// FILA 1
let aCard = new Card(0, 0, board.gridA[0]);
let bCard = new Card(0, 1, board.gridA[1]);
let cCard = new Card(0, 2, board.gridB[0]);
let dCard = new Card(0, 3, board.gridB[1])
// FILA 2
let eCard = new Card(1, 0, board.gridA[2]);
let fCard = new Card(1, 1, board.gridA[3]);
let gCard = new Card(1, 2, board.gridB[2]);
let hCard = new Card(1, 3, board.gridB[3]);
// FILA 3
let iCard = new Card(2, 0, board.gridC[0]);
let jCard = new Card(2, 1, board.gridC[1]);
let kCard = new Card(2, 2, board.gridD[0]);
let lCard = new Card(2, 3, board.gridD[1]);
// FILA 4
let mCard = new Card(3, 0, board.gridC[2]);
let nCard = new Card(3, 1, board.gridC[3]);
let oCard = new Card(3, 2, board.gridD[2]);
let pCard = new Card(3, 3, board.gridD[3]);

// ASIGNAR CARTAS AL TABLERO
board.assign_Col_Row(aCard, bCard, cCard, dCard, eCard, fCard, gCard, hCard, iCard, jCard, kCard, lCard, mCard, nCard, oCard, pCard);

// INTERACCIÓN CON EL DOM
const aCardBtn = document.getElementById("aCard");
const bCardBtn = document.getElementById("bCard");
const cCardBtn = document.getElementById("cCard");
const dCardBtn = document.getElementById("dCard");

const eCardBtn = document.getElementById("eCard");
const fCardBtn = document.getElementById("fCard");
const gCardBtn = document.getElementById("gCard");
const hCardBtn = document.getElementById("hCard");

const iCardBtn = document.getElementById("iCard");
const jCardBtn = document.getElementById("jCard");
const kCardBtn = document.getElementById("kCard");
const lCardBtn = document.getElementById("lCard");

const mCardBtn = document.getElementById("mCard");
const nCardBtn = document.getElementById("nCard");
const oCardBtn = document.getElementById("oCard");
const pCardBtn = document.getElementById("pCard");

/* FUNCION MANEJADOR TABLERO, VALIDA Y ASIGNA LOS DATOS AL TABLERO
EN CASO DE SER DETECTADO UN ERROR HACE UN RESET DE LOS DATOS DE TABLERO 
Y SOLIC
*/
function board_Manager() {
    // RESET VALIDACIONES VALORES RANDOM PARA EL TABLERO
    randomVector = [0, 0, 0, 0];
    randomCount = 0;
    // ASIGNA VALORES AL GRID A
    if (setGrid(board.gridA) == true) {
        randomVector = [0, 0, 0, 0];
        randomCount = 0;
        // ASIGNA VALORES AL GRID B
        if (setGrid(board.gridB) == true) {
            randomVector = [0, 0, 0, 0];
            randomCount = 0;
            // ASIGNA VALORES AL GRID C
            if (setGrid(board.gridC) == true) {
                randomCount = 0;
                randomVector = [0, 0, 0, 0];
                // ASIGNA VALORES AL GRID D
                if (setGrid(board.gridD) == true) {
                    board.display_Board();
                }
                else {
                    board.reset();
                }
            }
            else {
                board.reset();
            }
        }
        else {
            board.reset();
        }
    }
    else {
        board.reset();
    }
}
// RECORRE LOS VECTORES DEL TABLERO PARA ASIGNAR VALORES
function setGrid(board_Vector) {
    for (const cardAux of board_Vector) {

        // ASIGNAR UN VALOR ENTRE 1 Y 4 A LA VARIABLE RANDOM
        random = getRandom();
        /* IF VALIDA SI HA ALCANZADO EL LIME TE INTENTOS
        REGRESA FALSE PARA REINICIAR EL TABLERO*/
        if (random == false) {
            return false;
        }
        else {
            /*ASIGNAR UN VALOR RANDOM A CADA TARJETA
            MIENTRAS VALIDATION MANAGER SEA DIFERENTE DE TRUE
            SOLICITAR OTRO VALOR RANDOM PARA HACER COMPROBACIONES
            CON LA FUNCIÓN VALIDATION MANAGER*/
            do {

                //REINICIA VALIDACIONES
                randomVector[random - 1] = 0;
                random = getRandom();
            } while (validationManager(cardAux, random) == false);

            if (random == false) {
                return false;
            }
            //SI SUPERA EL VALIDATION MANAGER ASIGNA EL VALOR A LA TARJETA
            cardAux.valueCard = random;
        }

    }

    // RETORNA UN TRUE SI SUPERA TODAS 
    return true;
}

/* FUNCION QUE RETORNA UN TRUE SI SUPERA LAS VALIDACIONES 
VERTICALES Y HORIZONTALES*/
function validationManager(cardAux, random) {
    if (validateCol(cardAux, random) == false) {
        return true;
    }
    return false;
}
/* RECIVE EL VECTOR FILA Ó COLUMNA A REVISAR */
function validateBoardHV(board_Vector, random) {

    for (const cardAux of board_Vector) {
        if (cardAux.valueCard == random) {
            return true;
        }
    }
    return false;
}
/* FUNCION QUE RETORNA UN FALSE SI SUPERA LAS VALIDACIONES 
VERTICALES*/
function validateCol(cardAux, random) {
    if (cardAux.yIndex == 0) {
        if (validateBoardHV(board.col0, random) == false) {
            return validateRow(cardAux, random);
        }
        return true;
    }
    else if (cardAux.yIndex == 1) {

        if (validateBoardHV(board.col1, random) == false) {
            return validateRow(cardAux, random);
        }
        return true;
    }
    else if (cardAux.yIndex == 2) {
        if (validateBoardHV(board.col2, random) == false) {
            return validateRow(cardAux, random);
        }
        return true;
    }
    else if (cardAux.yIndex == 3) {

        if (validateBoardHV(board.col3, random) == false) {
            return validateRow(cardAux, random);
        }
        return true;
    }
    return true;
}
/* FUNCION QUE RETORNA UN FALSE SI SUPERA LAS VALIDACIONES 
HORIZONTALES*/
function validateRow(cardAux, random) {
    if (cardAux.xIndex == 0) {
        return validateBoardHV(board.row0, random);
    }
    if (cardAux.xIndex == 1) {
        return validateBoardHV(board.row1, random);
    }
    if (cardAux.xIndex == 2) {
        return validateBoardHV(board.row2, random);
    }
    if (cardAux.xIndex == 3) {
        return validateBoardHV(board.row3, random);
    }
    else {
        return true;
    }
}

/* FUNCION QUE RETORNA UN VALOR RANDOM A ASIGNAR EN EL TRABLERO*/
function getRandom() {
    randomCount++;
    let random = Math.round(Math.random() * 200 + 1);

    if (random >= 0 && random < 25 || random >= 150 && random < 175) {
        random = 1;
    }
    else if (random >= 50 && random < 75 || random >= 100 && random < 125) {
        random = 2;
    }
    else if (random >= 25 && random < 50 || random >= 125 && random < 150) {
        random = 3;
    }
    else if (random >= 75 && random < 100 || random >= 175 && random < 202) {
        random = 4;
    }
    if (randomCount == 40) {
        randomCount = 0;
        return false;
    }
    return validarRandom(random);
}
/* RECORRE UN VECTOR CON LOS VALORES QUE SE HAN ASIGNADO AL GRID
PARA EVITAR DUPLICAR VALORES, SI EL VALOR YA SE ENCUENTRA EN EL VECTOR
SOLICITA OTRO A LA FUNCIÓN GET RANDOM*/
function validarRandom(random) {

    for (let i = 0; i < 4; i++) {
        if (randomVector[i] == random) {
            return getRandom();
        }
    }

    assingnVector(random);
    return random;
}
/* SI PASA LAS VALIDACIONES ASIGNA EL VALOR EN EL VECTOR*/
function assingnVector(random) {
    randomVector[random - 1] = random;
}
/*---------- END BOARD SECTION -----*/
//PENDIENTE:
        /*---------- PLAY SECTION -----*/
        // CLASE JUGAR

        /*---------- END PLAY SECTION -----*/
/*---------- PLAYER SECTION -----*/
// CLASE JUGADOR 
class Player {

    constructor(playerName, playerID, playerScore, playerSettings) {
        this.playerName = playerName;
        this.playerID = playerID;
        this.playerScore = playerScore;
        this.playerSettings = playerSettings;
    }
}
class Score {
    constructor(countMovements, timeScore) {
        this.countMovements = countMovements;
        this.timeScore = timeScore;
    }
}
class Settings {
    constructor(theme, music, sound) {
        this.theme = theme;
        this.music = music;
        this.sound = sound;
    }
}

let playerList = [];

const styleCss = document.documentElement.style;

const themeGreen = document.getElementById("themeGreen");
const themePurple = document.getElementById("themePurple");
const themeDark = document.getElementById("themeDark");
const themeLight = document.getElementById("themeLight");

let themeOption = 0;

themeGreen.addEventListener("click", function () { setTheme(0) });
themePurple.addEventListener("click", function () { setTheme(1) });
themeDark.addEventListener("click", function () { setTheme(2) });
themeLight.addEventListener("click", function () { setTheme(3) });

function setTheme(Option) {

    themeGreen.className = "themeExample green";
    themePurple.className = "themeExample purple";
    themeDark.className = "themeExample dark";
    themeLight.className = "themeExample light";
    themeOption = Option;
    switch (Option) {

        case 0:
            themeGreen.className = "themeExample green activeTheme";
            styleCss.setProperty('--colorBase', '#52734D');
            styleCss.setProperty('--colorPrima', '#91C788');
            styleCss.setProperty('--colorSecun', '#DDFFBC');
            styleCss.setProperty('--colorThird', '#EEEEEE');
            break;
        case 1:
            themePurple.className = "themeExample purple activeTheme";

            styleCss.setProperty('--colorBase', '#2e3154');
            styleCss.setProperty('--colorPrima', '#57406b');
            styleCss.setProperty('--colorSecun', '#e076a5');
            styleCss.setProperty('--colorThird', '#EEEEEE');
            break;
        case 2:
            themeDark.className = "themeExample dark activeTheme";
            styleCss.setProperty('--colorBase', '#222831');
            styleCss.setProperty('--colorPrima', '#393E46');
            styleCss.setProperty('--colorSecun', '#EEEEEE');
            styleCss.setProperty('--colorThird', '#EEEEEE');
            break;
        case 3:
            themeLight.className = "themeExample light activeTheme";
            styleCss.setProperty('--colorBase', '#EEEEEE');
            styleCss.setProperty('--colorPrima', '#DDFFBC');
            styleCss.setProperty('--colorSecun', '#DDFFBC');
            styleCss.setProperty('--colorThird', '#000000');
            break;
    }

}

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
/*---------- END PLAYER SECTION -----*/

// GLOBAL MEMORY

let playerScore = new Score(100, 200);

let playerSettings = new Settings(themeOption, true, false);

newPlayerAux = new Player("Test", 1, playerScore, playerSettings);

playerList.push(newPlayerAux);

// GLOBAL MEMORY TEST

const player0 = document.getElementById("player0");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const player3 = document.getElementById("player3");

player0.innerHTML = playerList[0].playerName;
// SCREEN CONTROLLER 

//HTML SCREEN SECTION
const body = document.getElementById("body");
const homeScreen = document.getElementById("homeScreen");
const profileScreen = document.getElementById("profileScreen");
const newProfileScreen = document.getElementById("newProfileScreen");
const rankingScreen = document.getElementById("rankingScreen");
const boardScreen = document.getElementById("boardScreen");


homeScreen.style.display = "block";
profileScreen.style.display = "none";
newProfileScreen.style.display = "none";
rankingScreen.style.display = "none";
boardScreen.style.display = "none";

//BTN
// HOME BTN
const newGame = document.getElementById("newGame");
const ranking = document.getElementById("ranking");
const profiles = document.getElementById("profiles");

newGame.addEventListener("click", function () { screenController(1) });
ranking.addEventListener("click", function () { screenController(3) });
profiles.addEventListener("click", function () { screenController(4) });

// NEW PROFILE BTN
const submitNewProfile = document.getElementById("submitNewProfile");
const profileNewProfile = document.getElementById("profileNewProfile");
const playNoProfile = document.getElementById("playNoProfile");

submitNewProfile.addEventListener("click", function () { screenController(2) });
profileNewProfile.addEventListener("click", function () { screenController(1) });
playNoProfile.addEventListener("click", function () { alert("The board, user, score and data will not be storage"); screenController(2) });

// GO BACK BTN
const goBack2 = document.getElementById("goBack2");
const goBack3 = document.getElementById("goBack3");
const goBack4 = document.getElementById("goBack4");
const goBack5 = document.getElementById("goBack5");

goBack2.addEventListener("click", function () { screenController(0) });
goBack3.addEventListener("click", function () { screenController(0) });
goBack4.addEventListener("click", function () { screenController(0) });
goBack5.addEventListener("click", function () { screenController(0) });

function screenController(option) {

    homeScreen.style.display = "none";
    profileScreen.style.display = "none";
    newProfileScreen.style.display = "none";
    rankingScreen.style.display = "none";
    boardScreen.style.display = "none";

    switch (option) {
        case 0:
            homeScreen.style.display = "block";
            break;
        case 1:
            newProfileScreen.style.display = "block";
            break;
        case 2:
            boardScreen.style.display = "block";
            board_Manager();
            break;
        case 3:
            rankingScreen.style.display = "block";
            break;
        case 4:
            profileScreen.style.display = "block";
            break;
    }

}
