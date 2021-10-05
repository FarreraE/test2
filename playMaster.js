
/*DOCUMENT READY INICIA EL TABLERO */
$(document).ready(function () {
    board_Manager();
    obtainJsonRnaking();
});
//RANKING GLOBAL JSON
let rankingArray = [];
/*OBTIONE LOS DATOS DEL ARCHIVO JSON */
const obtainJsonRnaking = () => {
    //Get Json
    const URLJSON = "ranking.json";
    $.getJSON(URLJSON, function (reply, status) {
        if (status == "success") {
            rankingArray = reply.ranking;
        //    console.log(rankingArray);
            renderizarRanking();
        }
    });
}
/*RENDERIZA LOS DATOS DEL ARCHIVO JSON EN LA VISTA RANKING*/
function renderizarRanking() {
  //  console.log("entre");
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
/*RETORNA EL GRID EN EL CUAL SE HA RELIZADO EL CLICK*/
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
/*HACE LA TRADUCCIÒN DEL NOMBRE LDE LA CARTA A SUS POSICIÓN EN EL VECTOR*/
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
/*TRADUCE LA POSICIÓN X Y Y A UN UNICO CARACTER*/
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
/*IDENTIFICA EL CLICK EN LA CARTA Y VALIDA SI ES POSIBLE EJECUTAR EL SWAP*/
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
/*IDENTIFICA LA CARTA Y EL GRID PARA ORQUESTAR EL SWAP LOGICO DE LAS CARTAS Y LA ANIMACIÓN*/
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
/*MODIFICA EL INDEX DE LOS BOTONES PARA SIMULAR CORRECTAMENTE LA ANIMACIÓN DE
DESPLAZAMIENTO ENTRE LAS FI,AS Y LAS COLUMNAS*/
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
/* VALIDACIÓN GANADOR, VALIDA QUE LAS FILAS Y COLUMNAS 
CONTENGAN LOS NUMEOS DEL 1 AL CUATRO
*/
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
                                   // console.log("not yet");
                                }
                            }
                            else {
                               // console.log("not yet");
                            }
                        }
                        else {
                           // console.log("not yet");
                        }
                    }
                    else {
                       // console.log("not yet");
                    }
                }
                else {
                   // console.log("not yet");
                }
            }
            else {
               // console.log("not yet");
            }
        }
        else {
           // console.log("not yet");
        }
    } else {
       // console.log("not yet");
    }
}
/*RECIBE UN VECTOR QUE CONTIENE UNA FILA O CULMNA Y VALIDA SI CUENTA CON LAS CARTAS DEL 1 AL 4 */
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
/*IDENTIFICA LA CARTA Y EL GRID PARA ORQUESTAR EL SWAP LOGICO DE LAS CARTAS Y LA ANIMACIÓN*/
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