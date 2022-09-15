const url = "https://fiskogvine-6dcb.restdb.io/rest/";
const info = {
  headers: {
    "x-apikey": "631f796bfdc15b0265f17343",
  },
};

const lunch = document.querySelector("#lunch");
const dinner = document.querySelector("#dinner");
const lunchSection = document.querySelector("#popup-lunch");
const dinnerSection = document.querySelector("#popup-dinner");

lunch.addEventListener("click", getData);
dinner.addEventListener("click", getData);

let dbConnection;

async function getData() {
  const response = await fetch(url + this.id, info);
  dbConnection = await response.json();

  console.log(dbConnection);
  if (this.id == "lunch") {
    visLunch();
  } else if (this.id == "dinner") {
    visDinner();
  }
}

document.querySelector("#luk").addEventListener("click", () => (lunchSection.style.display = "none"));
document.querySelector("#luk1").addEventListener("click", () => (dinnerSection.style.display = "none"));

function visLunch() {
  const lunchTemplate = document.querySelector("#lunch-template").content;
  lunchSection.style.display = "block";

  dbConnection.forEach((lunchItem) => {
    const klon = lunchTemplate.cloneNode(true);
    klon.querySelector(".mainingredient1").textContent = lunchItem.mainIngredient;
    klon.querySelector(".description1").textContent = lunchItem.description;
    klon.querySelector(".price1").textContent = lunchItem.price + " " + "DKK";
    lunchSection.appendChild(klon);
  });
}

function visDinner() {
  const dinnerTemplate = document.querySelector("#dinner-template").content;
  dinnerSection.style.display = "block";

  dbConnection.forEach((dinnerItem) => {
    const klon = dinnerTemplate.cloneNode(true);
    klon.querySelector(".mainingredient1").textContent = dinnerItem.mainIngredient;
    klon.querySelector(".description1").textContent = dinnerItem.description;
    klon.querySelector(".price1").textContent = dinnerItem.price + " " + "DKK";
    dinnerSection.appendChild(klon);
  });
}
