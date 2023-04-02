const jokes = document.querySelector("button");
const value = document.querySelector("p");

async function fetchJoke() {
  const respons = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await respons.json();
  return data;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  value.textContent = joke;
}
jokes.addEventListener("click", handleClick);
