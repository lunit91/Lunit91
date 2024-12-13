const selectedGames = [];
let total = 0;


document.querySelectorAll('.game-button').forEach((button) => {
  button.addEventListener('click', () => {
    const gameName = button.getAttribute('data-name');
    const gamePrice = parseFloat(button.getAttribute('data-price'));

    
    if (!selectedGames.includes(gameName)) {
      selectedGames.push(gameName);
      total += gamePrice;

      
      updateCart();
    } else {
      alert(`${gameName} ya está en el carrito.`);
    }
  });
});


function updateCart() {
  document.getElementById('selectedGames').innerText = selectedGames.join(', ');
  document.getElementById('totalPrice').innerText = total.toFixed(2);
  document.getElementById('result').classList.remove('hidden');
}


document.getElementById('buyButton').addEventListener('click', () => {
  if (selectedGames.length > 0) {
    alert(`Gracias por tu compra 🎉. Compraste: ${selectedGames.join(', ')}. Total: $${total.toFixed(2)}.`);
    resetCart();
  } else {
    alert('El carrito está vacío.');
  }
});


function resetCart() {
  selectedGames.length = 0;
  total = 0;
  document.getElementById('selectedGames').innerText = '';
  document.getElementById('totalPrice').innerText = '0';
  document.getElementById('result').classList.add('hidden');
}





const startButton = document.getElementById('startButton');
const message = document.getElementById('message');
const result2 = document.getElementById('result2');

let gameReady = false; 
let timeout; 
let loseTimeout; 
startButton.addEventListener('click', () => {
  
  startButton.disabled = true; 
  result2.textContent = '';
  message.textContent = 'Prepárate...'; 
  gameReady = false; 
  clearTimeout(timeout); 
  clearTimeout(loseTimeout);

  
  const delay = Math.random() * 2000 + 2000;

  timeout = setTimeout(() => {
    gameReady = true; 
    message.textContent = '¡DISPARA!'; 

    
    loseTimeout = setTimeout(() => {
      if (gameReady) { 
        gameReady = false; 
        result2.textContent = '¡Perdiste! Te dispararon 🤕';
        message.textContent = 'Presiona "Iniciar Duelo" para intentarlo de nuevo.';
        startButton.disabled = false; 
      }
    }, 1000); 
  }, delay);
});

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    if (gameReady) {
      
      clearTimeout(timeout);
      clearTimeout(loseTimeout); 
      gameReady = false; 
      result2.textContent = '¡Ganaste! 🤠'; 
      message.textContent = 'Presiona "Iniciar Duelo" para jugar otra vez.'; 
      startButton.disabled = false; 
    } else {
      
      clearTimeout(timeout); 
      clearTimeout(loseTimeout); 
      result2.textContent = '¡Disparaste antes de tiempo! 💥'; 
      message.textContent = 'Presiona "Iniciar Duelo" para intentarlo de nuevo.';
      startButton.disabled = false; 
    }
  }
});

