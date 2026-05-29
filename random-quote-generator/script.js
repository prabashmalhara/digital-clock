let quotes = [
  {
    text: "Learning never exhausts the mind.",
    author: "Leonardo da Vinci"
  },
  {
    text: "Practice makes progress.",
    author: "Unknown"
  },
  {
    text: "The expert in anything was once a beginner.",
    author: "Helen Hayes"
  },
  {
    text: "Code is like humor. When you have to explain it, it is bad.",
    author: "Cory House"
  },
  {
    text: "First, solve the problem. Then, write the code.",
    author: "John Johnson"
  }
];

let quoteText = document.getElementById("quote");
let authorText = document.getElementById("author");
let newQuoteBtn = document.getElementById("newQuoteBtn");

function showRandomQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  quoteText.textContent = '"' + quotes[randomIndex].text + '"';
  authorText.textContent = "- " + quotes[randomIndex].author;
}

newQuoteBtn.addEventListener("click", showRandomQuote);