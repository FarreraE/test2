/*---------- SCORE SECTION -----*/
class Score {
    constructor(countMovements, timeScore) {
        this.countMovements = countMovements;
        this.timeMinutes = timeScore;
        this.timeSeconds = timeScore;
        this.timeActive = timeScore;
        this.totalMovements = countMovements;
        this.totaltimeMinutes = timeScore;
        this.totaltimeSeconds = timeScore;
    }

    countMovementsDisplay() {

        this.countMovements++;
        if (this.countMovements < 10) {
            $("#movements").html('00' + String(this.countMovements));
        }
        if (this.countMovements >= 10) {
            $("#movements").html('0' + String(this.countMovements));
        }
        if (this.countMovements > 99) {
            $("#movements").html(String(this.countMovements));
        }
    }

    timeManager() {
        timeCounter(this.timeSeconds, this.timeMinutes);
    }
    finalScore() {
        this.totalMovements = this.countMovements;
        this.totaltimeMinutes = this.timeScore;
        this.totaltimeSeconds = this.timeScore;
    }
}
function timeCounter(timeSeconds, timeMinutes) {

    let timeInterval = 1000;

    cronometro = setInterval(function () {
        if (timeSeconds == 60) {
            timeSeconds = 0;
            timeMinutes++;
        }
        if (timeMinutes == 60) {
            //GAME OVER MESSAGE
        }

        timeDisplay(timeSeconds, timeMinutes);
        timeSeconds++;

    }, timeInterval);

}
function timeCounterStop() {
    clearInterval(cronometro);
}
function timeDisplay(timeSeconds, timeMinutes) {

    if (timeMinutes < 10) {
        if (timeSeconds < 10) {
            $("#time").html('0' + String(timeMinutes) + ':0' + String(timeSeconds));
        }
        if (timeSeconds >= 10) {
            $("#time").html('0' + String(timeMinutes) + ':' + String(timeSeconds));
        }
    }
    if (timeMinutes >= 10) {
        if (timeSeconds < 10) {
            $("#time").html(String(timeMinutes) + ':0' + String(timeSeconds));
        }
        if (timeSeconds >= 10) {
            $("#time").html(String(timeMinutes) + ':' + String(timeSeconds));
        }
    }

}

const globalScore = new Score(0, 0);
var cronometro;
/*---------- END SCORE SECTION -----*/

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
        //alert("reset");
        console.log("----------------- last RESET");
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
        randomVector = [0, 0, 0, 0];
        randomCount = 0;
        board.assign_Col_Row(aCard, bCard, cCard, dCard, eCard, fCard, gCard, hCard, iCard, jCard, kCard, lCard, mCard, nCard, oCard, pCard);
        $('.targetOB').removeClass('nonActive');
        $('.targetOB').removeClass('active');
        board_Manager();
    }
    // METODO DE PRUEBA UTILIZADO PARA COMPROBAR LOS DATOS DEL TABLERO
    ordenar() {
        // CONSOLE LOG DE CADA GRID, FILAS Y COLUMNAS DEL TABLERO
        console.log("-- Tablero --");
        console.log(aCard.valueCard + "" + bCard.valueCard + "" + cCard.valueCard + "" + dCard.valueCard + "\n" + eCard.valueCard + "" + fCard.valueCard + "" + gCard.valueCard + "" + hCard.valueCard + "\n" + iCard.valueCard + "" + jCard.valueCard + "" + kCard.valueCard + "" + lCard.valueCard + "\n" + mCard.valueCard + "" + nCard.valueCard + "" + oCard.valueCard + "" + pCard.valueCard);
        /*console.log("### GRID A ###");
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
        /*  console.log("|||| COL 0 ||||");
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
          }*/
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
    setValue(valueCard) {
        this.valueCard = valueCard;
    }
    getValue() {
        return this.valueCard;
    }
    getCoordinates() {
        let coordinates = String(this.xIndex) + String(this.yIndex);
        return coordinates;
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
        //  console.log("--------------------------");
        //  board.ordenar();
        // ASIGNA VALORES AL GRID B
        if (setGrid(board.gridB) == true) {
            randomVector = [0, 0, 0, 0];
            randomCount = 0;
            //  console.log("--------------------------");
            //  board.ordenar();
            // ASIGNA VALORES AL GRID C
            if (setGrid(board.gridC) == true) {
                randomCount = 0;
                randomVector = [0, 0, 0, 0];
                // console.log("--------------------------");
                //  board.ordenar();
                // ASIGNA VALORES AL GRID D
                if (setGrid(board.gridD) == true) {
                    randomVector = [0, 0, 0, 0];
                    randomCount = 0;
                    // console.log("--------------------------");
                    //  board.ordenar();
                    board.display_Board();

                    for (let changes = 0; changes < 1; changes++) {

                        randomSwap();

                    }
                    findOne();
                    board.display_Board();
                    movementManager();
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
    let validationManagerResult;
    for (const cardAux of board_Vector) {

        // ASIGNAR UN VALOR ENTRE 1 Y 4 A LA VARIABLE RANDOM
        let random = null;
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
                ++randomCount;
                validationManagerResult = validationManager(cardAux, random);
                if (randomCount == 40) {
                    // alert("reset Automatico");
                    validationManagerResult = false;
                    return false;
                }
            } while (validationManagerResult == false);


            //SI SUPERA EL VALIDATION MANAGER ASIGNA EL VALOR A LA TARJETA
            board.ordenar();
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
    let random = Math.round(Math.random() * (199 - 1) + 1);
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

    return validarRandom(random);
}
/* RECORRE UN VECTOR CON LOS VALORES QUE SE HAN ASIGNADO AL GRID
PARA EVITAR DUPLICAR VALORES, SI EL VALOR YA SE ENCUENTRA EN EL VECTOR
SOLICITA OTRO A LA FUNCIÓN GET RANDOM*/
function validarRandom(random) {
    //  console.log("PROBAR:" + random);
    for (let i = 0; i < 4; i++) {
        if (randomVector[i] == random) {
            // console.log("NO SIRVE:" + random);
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
/* CREA VAR AUX DE LOS GRID A INSPECCIONAR PARA ENCONTRAR EL VALOR 1*/
function findOne() {
    $('.targetOB').removeClass('nonActive');
    $('.targetOB').removeClass('active');
    $('.targetOB').addClass('nonActive');

    let fOcardA = gridInspectionFO(board.gridA);
    let fOcardB = gridInspectionFO(board.gridB);
    let fOcardC = gridInspectionFO(board.gridC);
    let fOcardD = gridInspectionFO(board.gridD);

    formatFORS(fOcardA, fOcardB, fOcardC, fOcardD);
}
/* DA FORMATO CSS AL TABELRO DEPENDIENDO DEL VALOR*/
function formatFORS(fOcardA, fOcardB, fOcardC, fOcardD) {
    try {
        formatFO(fOcardA.xIndex, fOcardA.yIndex);
        formatFO(fOcardB.xIndex, fOcardB.yIndex);
        formatFO(fOcardC.xIndex, fOcardC.yIndex);
        formatFO(fOcardD.xIndex, fOcardD.yIndex);

    } catch (error) {
        formatFORS(fOcardA, fOcardB, fOcardC, fOcardD);
        // return cardAux;
    }

}
/*RECORRE EL GRID QUE PASA POR PARAMETRO PARA IDENTIFICAR LA CARTA 
CON VALOR 1*/
function gridInspectionFO(vectorFO) {
    try {
        for (const cardAux of vectorFO) {
            if (cardAux.valueCard == 1) {
                return cardAux;
            }
        }

    } catch (error) {
        gridInspectionFO(vectorFO);
        return cardAux;
    }

}
/*CAMBIA LA CLASS DE LA CARTA INDICADA POR EL INDEX*/
function formatFO(xIndex, yIndex) {
    //alert(xIndex + "-" + yIndex);
    switch (xIndex) {
        case 0:
            if (yIndex == 0) {
                $('#aCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 1) {
                $('#bCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 2) {
                $('#cCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 3) {
                $('#dCard').toggleClass('active nonActive');
                break;
            }
            break;
        case 1:
            if (yIndex == 0) {
                $('#eCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 1) {
                $('#fCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 2) {
                $('#gCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 3) {
                $('#hCard').toggleClass('active nonActive');
                break;
            }
            break;
        case 2:
            if (yIndex == 0) {
                $('#iCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 1) {
                $('#jCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 2) {
                $('#kCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 3) {
                $('#lCard').toggleClass('active nonActive');
                break;
            }
            break;
        case 3:
            if (yIndex == 0) {
                $('#mCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 1) {
                $('#nCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 2) {
                $('#oCard').toggleClass('active nonActive');
                break;
            }
            if (yIndex == 3) {
                $('#pCard').toggleClass('active nonActive');
                break;
            }
            break;
    }
}
/*CAMBIOS ALEATORIOS EN EL TABLERO PARA GENERAR DIFICULTAD DE JUEGO*/
function randomSwap() {
    boardValues = Object.values(board);
    randomGrid = Math.round(Math.random() * 3);
    gridAuxa = boardValues[randomGrid];
    oneCard = gridInspectionFO(gridAuxa);
    targetCard = new Card(0, 0, 0);

    if (targetCard.valueCard != 1) {

        switch (coordinateTranslate(oneCard.getCoordinates())) {
            case 0: case 3:
                if (randomGrid >= 2) {
                    //  alert("entre");
                    targetCard = gridAuxa[2];
                }
                else {
                    // alert("entre else");
                    targetCard = gridAuxa[1];
                }
                break;

            case 1: case 2:
                if (randomGrid >= 2) {
                    //  alert("entre");
                    targetCard = gridAuxa[3];
                }
                else {
                    // alert("entre else");
                    targetCard = gridAuxa[0];
                }
                break;
        }

        oneCard.setValue(targetCard.getValue());
        targetCard.setValue(1);

    }
    else {
        console.log("randonswapaux");
        randomSwap();
    }

    findOne();
    board.display_Board();

}
/*---------- END BOARD SECTION -----*/

/*---------- PLAY SECTION -----*/
$(document).ready(function () {
    board_Manager();
    //obtainJsonRnaking();
});
//RANKING GLOBAL JSON
let rankingArray = [];
const obtainJsonRnaking = () => {
    //Get Json
    const URLJSON = "ranking.json";
    $.getJSON(URLJSON, function (reply, status) {
        if (status == "success") {
            rankingArray = reply.ranking;
            console.log(rankingArray);
            renderizarRanking();
        }
    });
}
function renderizarRanking() {
    console.log("entre");
    for (const player of rankingArray) {
        $("#rankingScreenDisplay").append(`
        <div class="userDisplay">
        <div class="offset-1 nameScore">
            <h2>${player.playerName}</h2>
        </div>
        <div class=" movTimScore">
            <img src="..img/movements.svg" class="movementImg" alt="">
            <h3>${player.movement}</h3>
            <img src="img/timmer.svg" class="timmerImg" alt="">
            <h3>${player.minutes} ":"${player.seconds}</h3>
        </div>
    </div>
    <hr>
        `);
    }
}
function indentifyGrid(idOption) {
    switch (idOption) {
        case "aCard": case "bCard": case "eCard": case "fCard":
            return board.gridA;
        case "cCard": case "dCard": case "gCard": case "hCard":
            return board.gridB;
        case "iCard": case "jCard": case "mCard": case "nCard":
            return board.gridC;
        case "kCard": case "lCard": case "oCard": case "pCard":
            return board.gridD;
    }
}
function indentifyGridIndex(letter) {
    switch (letter) {
        case "a": case "c": case "i": case "k":
            return 0;
        case "b": case "d": case "j": case "l":
            return 1;
        case "e": case "g": case "m": case "o":
            return 2;
        case "f": case "h": case "n": case "p":
            return 3;
    }
}
function coordinateTranslate(coordinates) {
    switch (coordinates) {
        case "00": case "02": case "20": case "22":
            return 0;
        case "01": case "03": case "21": case "23":
            return 1;
        case "10": case "12": case "30": case "32":
            return 2;
        case "11": case "13": case "31": case "33":
            return 3;
    }
}
function movementValidation(targetCard, oneCard) {

    switch (coordinateTranslate(targetCard.getCoordinates())) {
        case 0:
            if (coordinateTranslate(oneCard.getCoordinates()) == 1) {
                return 1;
            }
            if (coordinateTranslate(oneCard.getCoordinates()) == 2) {
                return 2;
            }
            return 6;
        case 1:
            if (coordinateTranslate(oneCard.getCoordinates()) == 0) {
                return 3;
            }
            if (coordinateTranslate(oneCard.getCoordinates()) == 3) {
                return 2;
            }
            return 6;
        case 2:
            if (coordinateTranslate(oneCard.getCoordinates()) == 0) {
                return 0;
            }
            if (coordinateTranslate(oneCard.getCoordinates()) == 3) {
                return 1;
            }
            return 6;
        case 3:
            if (coordinateTranslate(oneCard.getCoordinates()) == 1) {
                return 0;
            }
            if (coordinateTranslate(oneCard.getCoordinates()) == 2) {
                return 3;
            }
            return 6;
    }
}
/*JQUERY ANIMATIONS BOARD*/
function shiftCard(targetCard, oneCard, target, direction) {
    zIndexOrchestator(direction);
    switch (direction) {
        case 0:
            $("#" + target).animate({ bottom: 73.7 }, 500, function () {
                oneCard.setValue(targetCard.getValue());
                //  board.display_Board();
                $("#" + target).css({ opacity: 0.0 });
                targetCard.setValue(1);
                $("#" + target).toggleClass('active nonActive');
                findOne();
                board.display_Board();
                $("#" + target).animate({ bottom: 0 }, 500, function () {
                    $("#" + target).css({ opacity: 1.0 });
                });
            });
            break;
        case 1:
            $("#" + target).animate({ left: 73.7 }, 500, function () {
                oneCard.setValue(targetCard.getValue());
                board.display_Board();
                $("#" + target).css({ opacity: 0.0 });
                targetCard.setValue(1);
                $("#" + target).toggleClass('active nonActive');
                findOne();
                board.display_Board();
                $("#" + target).animate({ left: 0 }, 500, function () {
                    $("#" + target).css({ opacity: 1.0 });
                });
            });
            break;
        case 2:
            $("#" + target).animate({ bottom: - 73.7 }, 500, function () {
                oneCard.setValue(targetCard.getValue());
                board.display_Board();
                $("#" + target).css({ opacity: 0.0 });
                targetCard.setValue(1);
                $("#" + target).toggleClass('active nonActive');
                findOne();
                board.display_Board();
                $("#" + target).animate({ bottom: 0 }, 500, function () {
                    $("#" + target).css({ opacity: 1.0 });
                });
            });
            break;
        case 3:
            $("#" + target).animate({ right: 73.7 }, 500, function () {
                oneCard.setValue(targetCard.getValue());
                board.display_Board();
                $("#" + target).css({ opacity: 0.0 });
                targetCard.setValue(1);
                $("#" + target).toggleClass('active nonActive');
                findOne();
                board.display_Board();
                $("#" + target).animate({ right: 0 }, 500, function () {
                    $("#" + target).css({ opacity: 1.0 });
                });
            });
            break;
    }
}
function zIndexOrchestator(direction) {

    switch (direction) {
        case 0:
            $("#row1").css('zIndex', 1);
            $("#row3").css('zIndex', 1);
            $("#row2").css('zIndex', 9);
            $("#row4").css('zIndex', 9);

            break;
        case 1:
            $(".left").css('zIndex', 9);
            $(".right").css('zIndex', 1);
            break;
        case 2:
            $("#row1").css('zIndex', 9);
            $("#row3").css('zIndex', 9);
            $("#row2").css('zIndex', 1);
            $("#row4").css('zIndex', 1);
            break;
        case 3:
            $(".left").css('zIndex', 1);
            $(".right").css('zIndex', 9);
            break;
    }
}
function validationWinnerManager() {
    if (validateWin(board.row0) == true) {
        if (validateWin(board.row1) == true) {
            if (validateWin(board.row2) == true) {
                if (validateWin(board.row3) == true) {
                    if (validateWin(board.col0) == true) {
                        if (validateWin(board.col1) == true) {
                            if (validateWin(board.col2) == true) {
                                if (validateWin(board.col3) == true) {
                                    //console.log("DONE");
                                    /*ALMACENA El SCORE Y TIEMPO FINAL*/
                                    globalScore.finalScore(globalScore.timeSeconds, globalScore.timeMinutes);

                                    //STOP CLOCK 
                                    /*DISPLAY El SCORE Y TIEMPO FINAL*/
                                    timeDisplay(globalScore.totaltimeSeconds, globalScore.totaltimeMinutes);
                                    //POP UP NEW GAME, FINAL SCORE, 
                                    timeCounterStop();
                                    alert("YOU WIN");
                                }
                                else {
                                    console.log("not yet");
                                }
                            }
                            else {
                                console.log("not yet");
                            }
                        }
                        else {
                            console.log("not yet");
                        }
                    }
                    else {
                        console.log("not yet");
                    }
                }
                else {
                    console.log("not yet");
                }
            }
            else {
                console.log("not yet");
            }
        }
        else {
            console.log("not yet");
        }
    } else {
        console.log("not yet");
    }
}
function validateWin(vectorToValidate) {
    // alert("entre");
    let oneCard = false;
    let twoCard = false;
    let threeCard = false;
    let fourCard = false;

    for (const cardAux of vectorToValidate) {
        if (cardAux.valueCard == 1) {
            oneCard = true;
        }
        if (cardAux.valueCard == 2) {
            twoCard = true;
        }
        if (cardAux.valueCard == 3) {
            threeCard = true;
        }
        if (cardAux.valueCard == 4) {
            fourCard = true;
        }
    }

    if (oneCard == true && twoCard == true && threeCard == true && fourCard == true) {
        return true;
    }
    return false;
}
function movementManager() {

    $(".targetOB").click(function (e) {

        let target = e.currentTarget.id;
        let gridAux = indentifyGrid(target);
        let letter = Array.from(target);
        let targetCard = gridAux[indentifyGridIndex(letter[0])];
        let oneCard = gridInspectionFO(gridAux);
        let direction = movementValidation(targetCard, oneCard);

        if (direction != 6 && globalScore.timeActive == 1) {
            globalScore.countMovementsDisplay();
            shiftCard(targetCard, oneCard, target, direction);
        }

        else if (globalScore.timeActive == 0) {
            globalScore.timeManager();
            globalScore.timeActive = 1;
            globalScore.countMovementsDisplay();
            shiftCard(targetCard, oneCard, target, direction);
        }
        setTimeout(() => {
            validationWinnerManager();
        }, 1000);

    });


}
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
const newGameScreen = document.getElementById("newGameScreen");


homeScreen.style.display = "block";
profileScreen.style.display = "none";
newProfileScreen.style.display = "none";
rankingScreen.style.display = "none";
boardScreen.style.display = "none";
newGameScreen.style.display = "none";

//BTN
// HOME BTN
const newGame = document.getElementById("newGame");
const ranking = document.getElementById("ranking");
const profiles = document.getElementById("profiles");
const newGamBtn = document.getElementById("newGamBtn");
const newGamBtnProfile = document.getElementById("newGamBtnProfile");
const newGamBtnPWOP = document.getElementById("newGamBtnPWOP");

newGame.addEventListener("click", function () { screenController(6) });
ranking.addEventListener("click", function () { screenController(3) });
profiles.addEventListener("click", function () { screenController(4) });
newGamBtn.addEventListener("click", function () { screenController(2) });
newGamBtnProfile.addEventListener("click", function () { screenController(4) });
newGamBtnPWOP.addEventListener("click", function () { alert("The board, user, score and data will not be storage"); screenController(2) });

// NEW PROFILE BTN
const submitNewProfile = document.getElementById("submitNewProfile");
const profileNewProfile = document.getElementById("profileNewProfile");
const playNoProfile = document.getElementById("playNoProfile");
//const settingsBtn = document.getElementById("settingsBtn");

submitNewProfile.addEventListener("click", function () { screenController(2) });
profileNewProfile.addEventListener("click", function () { screenController(1) });
//settingsBtn.addEventListener("click", function () { screenController(5) });
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



// Obtener referencia a botones
// Recuerda: el punto . indica clases
const settingsBTNGroup = document.querySelectorAll(".settingsBtn");
// Definir función y evitar definirla de manera anónima

const settingsCall = function (evento) {
    screenController(5);
}

// botones es un arreglo así que lo recorremos
settingsBTNGroup.forEach(settingsBtn => {
    //Agregar listener
    settingsBtn.addEventListener("click", settingsCall);
});