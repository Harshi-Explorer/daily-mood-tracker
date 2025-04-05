const dateElement = document.getElementById('date');
const output = document.getElementById('output');

// Show today's date
const today = new Date();
dateElement.textContent = `Today is: ${today.toDateString()}`;

function selectMood(mood) {
  let message = `You selected: ${mood}`;
  let reply = "";

  switch(mood) {
    case 'Happy':
      reply = "That's awesome! Spread the smiles around!";
      break;
    case 'Sad':
      reply = "It’s okay to feel sad. Tomorrow will be better.";
      break;
    case 'Angry':
      reply = "Take a deep breath. You got this!";
      break;
    case 'Excited':
      reply = "Yay! Let’s ride that energy today!";
      break;
    case 'Calm':
      reply = "Peaceful vibes are the best vibes.";
      break;
  }

  output.innerHTML = `
    <p>${message}</p>
    <p>${reply}</p>
  `;
}