const quotes = [
    "I am doing my best, and that is enough 💖",
    "I am allowed to take up space and time ✨",
    "I am worthy of love, even on my hardest days 💫",
    "I trust the pace of my own journey 🌙",
    "I give myself permission to rest and heal 🌷",
    "I am proud of how far I’ve come ✨",
    "I can be a work in progress and still be whole 💖",
    "I carry strength within me, always 🌷",
    "I am allowed to take up emotional space 🌙",
    "I carry strength within me, always 💫",
];
  
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
}