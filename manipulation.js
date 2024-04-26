let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: `"The best way to find yourself is to lose yourself in the service of others"`,
    person: `"Mahatma Gandhi"`,
  },
  {
    quote: `"If you want to live a happynlife, tie it to a goal, not to people or things."`,
    person: "Albert Einstein",
  },
  {
    quote:
      "At his best, man uis the noblest of all animals; seprated from law and justice he is the worst",
    person: "Aristole",
  },
  {
    quote:
      "Your time is limited, so do not waste it living someone else's life",
    person: "Steve Jobs",
  },
  {
    quote:
      "Tell me and i forget. Teach me and i remember. Involve me and I learn",
    person: "Benjamin Franklyn",
  },
  {
    quote:
      "If you look at what you have in life, you'll always have more.If you look at what you dont have in life you'll never have enough",
    person: "Oprah Winfrey",
  },
  {
    quote: "It does not matter how slowly you go as long as you dont stop",
    person: "Confucius",
  },
  {
    quote:
      "Our lives begin to end the day we become silent about things that matter",
    person: "Martin Luther King Jr",
  },
  {
    quote:
      "Remember that not getting what you want is sometimes a wonderful stroke of luck",
    person: "Dalai Lana",
  },
  {
    quote: "The journey of a thousand miles begins with a single step",
    person: "Lao Tzu",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});

console.log(quotes.length);
