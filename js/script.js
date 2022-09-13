const url = 'https://fiskogvine-6dcb.restdb.io/rest/';
const info = {
  headers: {
    'x-apikey': '631f796bfdc15b0265f17343',
  },
};

//const wine = document.querySelector('#wine');
const wineCard = document.querySelector('.drink-type-headline');

let dbResponse;
let filter = 'alle';

//wine.addEventListener('click', findDrinks);

async function getData() {
  const response = await fetch(url + 'wine', info);
  dbResponse = await response.json();
  if (this.winetype == 'wine') {
    visDrinks();
  }
}

function findDrinks() {
  const filterKnapper = document.querySelectorAll('#wine-card button');
  filterKnapper.forEach((knap) =>
    knap.addEventListener('click', filtrerDrinks)
  );
  getData();
}

function filtrerDrinks() {
  filter = this.dataset.winetype;
  document.querySelector('.valgt').classList.remove('valgt');
  this.classList.add('valgt');
  wineCard.textContent = this.textContent;
  visDrinks();
}

function visDrinks() {
  const drinkSection = document.querySelector('#drink-type');
  const drinkTemplate = document.querySelector('#drink-template').content;

  drinkSection.textContent = '';

  dbResponse.forEach((drink) => {
    if (filter == drink.winetype || filter == 'alle') {
      const clone = drinkTemplate.cloneNode(true);
      clone.querySelector('.drink-decription').textContent = drink.description;
      clone.querySelector('.drink-vintage').textContent = drink.vintage;
      clone.querySelector('.drink-price').textContent = drink.price;

      drinkSection.appendChild(clone);
    }
  });
}
