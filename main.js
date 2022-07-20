// get dom
let card = document.querySelector(".js-card");
let cardBefore = document.querySelector(".js-card-before");
let cardAfter = document.querySelector(".js-card-after");
let txt = document.querySelector(".js-txt");
let count = document.querySelector(".js-count");

// flip card
card.addEventListener("click", () => {
  card.classList.toggle("active");
});

// set height
let height = cardBefore.offsetHeight;
cardAfter.style.height = height + "px";
card.style.height = height + "px";

// data
import quotes from './quotes.json' assert {type: 'json'};

// Get Index for quote
let from = new Date("07/20/2022");
let to = new Date();
const ONE_DAY = 24 * 60 * 60 * 1000;
const diffDays = Math.floor(Math.abs((from - to) / ONE_DAY));
let randomNum = diffDays % quotes.data.length;

// Set text
count.textContent = `#DAY${diffDays}`
txt.textContent = quotes.data[randomNum].replace(/“/g, '').replace(/”/g, '');
