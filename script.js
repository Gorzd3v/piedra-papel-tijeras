// Varaibles de puntuacion de los jugadores
let pScore = 0;
let cScore = 0;

// Se selecionan los elementos desde el documento HTML

const piedra = document.querySelector("#piedra");
const papel = document.querySelector("#papel");
const tijera = document.querySelector("#tijera");
const resultado = document.querySelector("#resultado");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#computerScore");
const container = document.querySelector(".container");
const player = document.querySelector("#player");
const pc = document.querySelector("#pc");

// computerPlay hace una eleccion azar entre 3

function computerPlay() {
  let resultado = Math.floor(Math.random() * 3) + 1;

  if (resultado == 3) {
    document.getElementById("pc").src = "../images/pcPiedra.png";
    return "Piedra";
  } else if (resultado == 2) {
    document.getElementById("pc").src = "../images/pcPapel.png";
    return "Papel";
  } else document.getElementById("pc").src = "../images/pcTijera.png";
  return "Tijera";
}

// game decide el ganador de cada ronda y muestra el score actual

function game(playerSelection, computerSelection) {
  let r;

  if (playerSelection == computerSelection) {
    r = "Empate";
  } else if (playerSelection == "Piedra" && computerSelection == "Tijera") {
    r = "Ganas";
    pScore++;
  } else if (playerSelection == "Papel" && computerSelection == "Piedra") {
    r = "Ganas";
    pScore++;
  } else if (playerSelection == "Tijera" && computerSelection == "Papel") {
    r = "Ganas";
    pScore++;
  } else {
    r = "Pierdes";
    cScore++;
  }

  resultado.textContent = r;

  playerScore.textContent = "Jugador : " + pScore;
  computerScore.textContent = "Maquina : " + cScore;

  if (pScore == 5 || cScore == 5) {
    end();
  }
}

// funcion reset para reiniciar el juego cuando acaba

function reset() {
  pScore = 0;
  cScore = 0;
  playerScore.textContent = "Jugador : 0";
  computerScore.textContent = "Maquina : 0";
  resultado.textContent = "Resultado";
  document.getElementById("pc").src = "/images/default.png";
  document.getElementById("player").src = "/images/default.png";
}

/*End crea el pop up de final de partida y muestra quien fue el ganador de la misma , 
  no es la manera mas eficiente de hacerlo (se puede hacer en HTML y ocultarlo hasta el momento de su uso)
  , pero lo hice de esta manera con la intencion practicar manipulacion del DOM */

function end() {
  const restart = document.createElement("div");
  restart.setAttribute("class", "restart");
  container.appendChild(restart);
  const popup = document.createElement("div");
  popup.setAttribute("class", "popup");
  restart.appendChild(popup);
  const winLose = document.createElement("p");
  if (pScore > cScore) {
    winLose.textContent = "¡Has Ganado!";
  } else {
    winLose.textContent = "¡Has Perdido!";
  }
  popup.appendChild(winLose);
  const newGame = document.createElement("p");
  newGame.textContent = "¿Quieres jugar nuevamente?";
  popup.appendChild(newGame);
  const resetBtn = document.createElement("button");
  resetBtn.textContent = "¡Volver a jugar!";
  resetBtn.setAttribute("id", "resetBtn");
  popup.appendChild(resetBtn);

  resetBtn.addEventListener("click", reset);
  resetBtn.addEventListener("click", () => {
    restart.style.display = "none";
  });
}

// Eventos de los botones para la eleccion del jugador

piedra.addEventListener("click", () => game("Piedra", computerPlay()));
papel.addEventListener("click", () => game("Papel", computerPlay()));
tijera.addEventListener("click", () => game("Tijera", computerPlay()));

piedra.addEventListener("click", () => {
  document.getElementById("player").src = "../images/playerPiedra.png";
});
papel.addEventListener("click", () => {
  document.getElementById("player").src = "../images/playerPapel.png";
});
tijera.addEventListener("click", () => {
  document.getElementById("player").src = "../images/playerTijera.png";
});
