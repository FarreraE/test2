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

/*---------- PLAYER SECTION -----*/
// CLASE JUGADOR 
