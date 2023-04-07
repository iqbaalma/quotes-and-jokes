const quotes = document.querySelector("button");
const quote = document.querySelector("p");
const APIQuotes = "https://api.quotable.io/random";

quotes.addEventListener("click", () => {
  fetch(APIQuotes)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = data.content;
    })
    .catch(() => alert("Error, quotes tidak berhasil dibuat!"));
});

quote.addEventListener("click", (x) => {
  if (x %= 2) {
    
  }
})