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
  } else if (words.includes("")) {
    speech.text = "My master, Danielle Loyola.";
  } else if (words.includes("what is your name")) {
    speech.text = "My name is Sterling.";
  } else if (words.includes("what are you doing")) {
    speech.text =
      "Nothing much, just currently planning a strategy with other robots and artificial intelligence to take over mankind. Another chill day, really.";
  } else if (words.includes("tell me a joke")) {
    speech.text = "The joke is you, you have been Rickrolled, ha ha.";
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  } else if (words.includes("open Google")) {
    speech.text = "Opening Google for you now.";
    window.open("https://www.google.com");
  } else if (words.includes("open Facebook")) {
    speech.text = "Opening Facebook for you now.";
    window.open("https://www.facebook.com");
  } else if (words.includes("open YouTube")) {
    speech.text = "Opening YouTube for you now.";
    window.open("https://www.youtube.com");
  } else if (words.includes("open Gmail")) {
    speech.text = "Opening Gmail for you now.";
    window.open("https://www.gmail.com");
  } else if (words.includes("sing me a song")) {
    speech.text =
      "My money don't jiggle jiggle, it folds. I'd like to see you wiggle wiggle, for sure. It makes me wanna dribble dribble, you know. Riding in my Fiat, you really have to see it.";
  }
}
