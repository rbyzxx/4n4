const messages = [
    "Tem certeza?",
    "Certeza absoluta??",
    "Absoluta mesmo?",
    "??",
    "Pensa mais!!",
    "Eu vou ficar triste se você dizer não...",
    "BEMM triste",
    "Tá, vou parar de perguntar",
    "Brincadeira! Aceita por favor!"
]

let messageIndex = 0

function handleNoClick() {
    const noButton = document.querySelector(".no-button");
    const yesButton = document.querySelector(".yes-button");

    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize *1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}