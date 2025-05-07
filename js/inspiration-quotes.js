const quotes = [
    "You're doing better than you think 💖",
    "A mother's love is the alchemy of the soul ✨",
    "You are the magic in our every day 💫",
    "Even potions need time to brew—so do you 🌙",
    "Your kindness is your superpower 🌷",
    "You’re made of stardust and strength ✨",
    "You’ve already walked through fire. Now you glow 💖",
    "I can imagine no heroism greater than motherhood 🌷",
    "Mothers possess a power beyond that of a king on his throne 🌙",
    "The future belongs to those who believe in the beauty of their dreams 💫"
];
  
function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").textContent = quotes[randomIndex];
}