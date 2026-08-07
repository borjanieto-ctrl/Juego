// ======================================
// NOX
// app.js
// Inicialización
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const playButton = document.getElementById("playButton");
    const backButton = document.getElementById("backButton");

    const decks = document.querySelectorAll(".deck");

    playButton.addEventListener("click", () => {

        showScreen("deck");

    });

    decks.forEach(deck => {

        deck.addEventListener("click", () => {

            showScreen("game");

        });

    });

    backButton.addEventListener("click", () => {

        showScreen("deck");

    });

});
