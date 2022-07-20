// get dom
let card = document.querySelector(".js-card");
let cardBefore = document.querySelector(".js-card-before");
let cardAfter = document.querySelector(".js-card-after");
let txtBefore = document.querySelector(".js-txt-before");
let txtAfter = document.querySelector(".js-txt-after");
let authorBefore = document.querySelector(".js-author-before");
let authorAfter = document.querySelector(".js-author-after");
let countBefore = document.querySelector(".js-count-before");
let countAfter = document.querySelector(".js-count-after");

// flip card
card.addEventListener("click", () => {
  card.classList.toggle("active");
});

// set height
let height = cardBefore.offsetHeight + 48;
// cardAfter.style.height = height + "px";
card.style.height = height + "px";

// calc day
const FROM = new Date("07/20/2022");
const TO = new Date();
const ONE_DAY = 24 * 60 * 60 * 1000;
const DIFF_DAY = Math.floor(Math.abs((FROM - TO) / ONE_DAY));

// data
import motivation from './motivation.json' assert {type: 'json'};
let ran = Math.floor(Math.random() * motivation.length);
function morning(){

  // let randomNum = DIFF_DAY % motivation.data.length;
  let randomNum = Math.floor(Math.random() * motivation.data.length);

  // Set text
  // countBefore.textContent = `#DAY${DIFF_DAY + 1}`
  // countAfter.textContent = `#DAY${DIFF_DAY + 1}`
  countBefore.textContent = `#${randomNum + 1}`
  countAfter.textContent = `#${randomNum + 1}`
  authorBefore.textContent = `#${motivation.data[randomNum].author}`
  authorAfter.textContent = `#${motivation.data[randomNum].author}`
  txtBefore.textContent = motivation.data[randomNum].english;
  txtAfter.textContent = motivation.data[randomNum].vietnamese;
}

morning()
