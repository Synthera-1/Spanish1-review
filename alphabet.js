// alphabet.js

const alphabet = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const greetings = [
  "Hola", "Adiós", "Buenos días", "Buenas tardes", "Buenas noches", "¿Cómo estás?", "¿Qué tal?", "¿Cómo te va?"
];

function startAlphabetGame() {
  const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
  const greetingLetters = randomGreeting.split("");
  let currentLetterIndex = 0;

  function displayLetter() {
    if (currentLetterIndex < greetingLetters.length) {
      const letter = greetingLetters[currentLetterIndex];
      const letterIndex = alphabet.indexOf(letter.toUpperCase());
      if (letterIndex !== -1) {
        console.log(`Letra: ${letter} - Índice: ${letterIndex}`);
      }
      currentLetterIndex++;
      setTimeout(displayLetter, 1000);
    } else {
      console.log("¡Juego terminado!");
    }
  }

  displayLetter();
}

startAlphabetGame();
