const startButton = document.getElementById('startButton');
const message = document.getElementById('message');
const result = document.getElementById('result');

let gameReady = false; // Controla si puedes disparar
let timeout; // Temporizador para mostrar "¡DISPARA!"
let loseTimeout; // Temporizador para perder si no disparas a tiempo

startButton.addEventListener('click', () => {
  // Restablece todos los estados del juego
  startButton.disabled = true; // Desactiva el botón mientras el juego está activo
  result.textContent = ''; // Limpia el resultado previo
  message.textContent = 'Prepárate...'; // Mensaje inicial
  gameReady = false; // Asegura que el juego comience correctamente
  clearTimeout(timeout); // Limpia temporizadores previos
  clearTimeout(loseTimeout);

  // Genera un tiempo aleatorio entre 2 y 4 segundos para mostrar "¡DISPARA!"
  const delay = Math.random() * 2000 + 2000;

  timeout = setTimeout(() => {
    gameReady = true; // Ahora el jugador puede disparar
    message.textContent = '¡DISPARA!'; // Cambia el mensaje

    
    loseTimeout = setTimeout(() => {
      if (gameReady) { // Solo pierdes si no disparaste
        gameReady = false; // Desactiva el estado de "listo para disparar"
        result.textContent = '¡Perdiste! Te dispararon 🤕';
        message.textContent = 'Presiona "Iniciar Duelo" para intentarlo de nuevo.';
        startButton.disabled = false; // Habilita el botón para reiniciar
      }
    }, 1000); // Límite de tiempo para disparar 
  }, delay);
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    if (gameReady) {
      // Si disparas en el momento correcto
      clearTimeout(timeout);
      clearTimeout(loseTimeout); // Detén el temporizador de perder
      gameReady = false; // Evita disparos múltiples
      result.textContent = '¡Ganaste! 🤠'; // Mensaje de victoria
      message.textContent = 'Presiona "Iniciar Duelo" para jugar otra vez.'; // Mensaje de reinicio
      startButton.disabled = false; // Habilita el botón
    } else {
      
      clearTimeout(timeout); // Limpia el temporizador de mostrar "¡DISPARA!"
      clearTimeout(loseTimeout); // Limpia el temporizador de perder
      result.textContent = '¡Disparaste antes de tiempo! 💥'; // Penalización
      message.textContent = 'Presiona "Iniciar Duelo" para intentarlo de nuevo.';
      startButton.disabled = false; // Habilita el botón
    }
  }
});

