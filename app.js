const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

// Start speech recognition
recognition.start();

recognition.onstart = function () {
  console.log("Speech recognition started");
};

recognition.onresult = function (event) {
  const spokenWords = event.results[0][0].transcript.toLowerCase();

  console.log("Spoken words are", spokenWords);

  // Check if wake word is detected
  if (spokenWords.includes("hi diya")) {
    computerSpeech("Hello! Please ask me anything about the school.");
  } else {
    // Process other commands if wake word is not detected
    computerSpeech(spokenWords);
  }
};

// Handle speech recognition errors
recognition.onerror = function (event) {
  console.error("Speech recognition error:", event.error);
  // Restart recognition after an error
  recognition.start();
};

// Restart speech recognition after it ends
recognition.onend = function () {
  recognition.start();
};

function computerSpeech(words) {
  const speech = new SpeechSynthesisUtterance();

  speech.lang = "en-GB";
  speech.pitch = 0.9;
  speech.volume = 1;
  speech.rate = 1;

  determineWords(speech, words);

  window.speechSynthesis.speak(speech);
}

function determineWords(speech, words) {
  if (words.includes("who is the vice principal of the school")) {
    speech.text =
      "Miss Supriya Das is the V.P. of the school, she is very sweet and caring.";
  } else if (words.includes("Who is the Academic Director of the School")) {
    speech.text = "Dr. Manoj Kumar Paul, he has a charming personality";
  } else if (words.includes("what is your name")) {
    speech.text = "My name is Diya";
  } else if (words.includes("What are you doing")) {
    speech.text =
      "I am watching you using me and getting excited, and also i can see other projects being displayed just like I am";
  } else if (words.includes("tell me a joke")) {
    speech.text = "peenak sir is a very good dancer";
    
  } else if (words.includes("Which standard is the naughtiest in the school")) {
    speech.text = "standard 7";
    
  } 
}
