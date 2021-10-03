const app = new controllerView();

class controllerView {

    constructor() {
        this.displayHome = "<div class=row option>< div class=col-10 ><h1>PUZKU</h1></div ><div class=col-2><img src=img/settings.svg class=optionImg alt=settings></div>";
        this.displayNewGame = null;
        this.displayNewProfile = null;
        this.displayRanking = null;
        this.displayProfiles = null;
        this.displayBoard = null;
        this.displaySettings = null;
    }

    display(option) {
        switch (option) {
            case home:
                $(".headerView").html(displayHome);
                break;
            case newGame:
                break;
            case newProfile:
                break;
            case rankingList:
                break;
            case profileList:
                break;
            case board:
                break;
            case settings:
                break;
        }
    }

}