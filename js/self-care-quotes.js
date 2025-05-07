const quotes = [
   "Rest is not a reward — it's a right 💖",
   "Water your own roots, too ✨",
   "Healing isn’t a straight line — it’s a garden that blooms in its own time 💫",
   "You don’t have to prove your worth — you already have it 🌙",
   "Some days your light is a spark, and that’s still enough 🌷",
   "The gentle way you care for others? Give that to yourself, too ✨",
   "You can pause. You can breathe. You can begin again 💖",
   "Peace isn't always loud — sometimes it’s a quiet cup of coffee 🌷",
   "Grace is giving yourself the kindness you offer everyone else 🌙",
   "Lighten up on yourself. No one is perfect. Gently accept your humanness 💫",
];
  
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
}