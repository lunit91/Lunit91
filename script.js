//var numero1= 3
//var numero2= 6

//var numero1= parseInt(prompt("ingresa el primer numero para la suma"))
//var numero2= parseInt(prompt("ingresa el segundo numero para la sma"))

//var resultado = sumarDosNumeros(numero1,numero2) ;
//alert( resultado );

function sumarDosNumeros(numero1,numero2) {
    resultado = numero1 + numero2;
    return resultado;
}
//prompt('ingrese su edad')

const startButton = document.getElementById('startButton');
const message = document.getElementById('message');
const result = document.getElementById('result');
let gameReady = false;
let timeout;

startButton.addEventListener('click', () => {
  startButton.disabled = true;
  result.textContent = '';
  message.textContent = 'Prepárate...';

  // Espera aleatoria antes de mostrar "¡DISPARA!"
  const delay = Math.random() * 2000 + 2000; // Entre 2 y 4 segundos
  timeout = setTimeout(() => {
    gameReady = true;
    message.textContent = '¡DISPARA!';
  }, delay);
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    if (gameReady) {
      clearTimeout(timeout);
      gameReady = false;
      result.textContent = '¡Ganaste! 🤠';
      message.textContent = 'Presiona "Iniciar Duelo" para jugar otra vez.';
      startButton.disabled = false;
    } else {
      result.textContent = '¡Disparaste antes de tiempo! 💥';
      message.textContent = 'Presiona "Iniciar Duelo" para intentarlo de nuevo.';
      startButton.disabled = false;
    }
  }
});
