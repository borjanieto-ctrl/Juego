// ======================================
// NOX
// app.js
// Inicialización
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    const playButton = document.getElementById("playButton");
    const backButton = document.getElementById("backButton");

    const decks = document.querySelectorAll(".deck");

    const card = document.getElementById("card");

card.addEventListener("click", () => {

    card.classList.toggle("flipped");

});

    playButton.addEventListener("click", () => {

        showScreen("deck");

    });

    decks.forEach(deck => {

    deck.addEventListener("click", () => {

        setDeck(

            deck.classList[1]

        );

        console.log(Game.deck);

        showScreen("game");

    });

});

    backButton.addEventListener("click", () => {

        showScreen("deck");

    });

});
