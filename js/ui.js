// ======================================
// NOX
// ui.js
// Gestión de pantallas
// ======================================

const screens = {

    home: document.getElementById("homeScreen"),
    deck: document.getElementById("deckScreen"),
    game: document.getElementById("gameScreen")

};

function hideScreens(){

    Object.values(screens).forEach(screen => {

        screen.classList.remove("active");

    });

}

function showScreen(screenName){

    hideScreens();

    screens[screenName].classList.add("active");

}
