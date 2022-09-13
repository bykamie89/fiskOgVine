const url = 'https://fiskogvine-6dcb.restdb.io/rest/';
const info = {
  headers: {
    'x-apikey': '631f796bfdc15b0265f17343',
  },
};

const wineCard = document.querySelector('.drink-type-headline');

let dbDrinks;
let filter = 'alle';

document.addEventListener('DOMContentLoaded', findDrinks);

function findDrinks() {
  const filterKnapper = document.querySelectorAll('#wine-card button');
  filterKnapper.forEach((knap) =>
    knap.addEventListener('click', filtrerDrinks)
  );
  getData();
}

async function getData() {
  const response = await fetch(url + 'wine', info);
  dbDrinks = await response.json();
  console.log(dbDrinks);
  visDrinks();
}

function filtrerDrinks() {
  filter = this.dataset.winetype;
  document.querySelector('.valgt').classList.remove('valgt');
  this.classList.add('valgt');
  console.log(filter);
  visDrinks();
  wineCard.textContent = this.textContent;
}

function visDrinks() {
  const drinkSection = document.querySelector('#drink-holder');
  const drinkTemplate = document.querySelector('#drink-template').content;
  const h2DrinkType = document.querySelector('.drink-type');

  let drinkType = filter;

  drinkSection.textContent = '';

  dbDrinks.forEach((drink) => {
    if (filter == drink.type || filter == 'alle') {
      const clone = drinkTemplate.cloneNode(true);

      if (filter != drink.type) {
        h2DrinkType.textContent = drink.type;
        filter = drink.type;
      }

      clone.querySelector('.drink-decription').textContent = drink.description;
      if (drink.vintage != '0') {
        clone.querySelector('.drink-vintage').textContent = drink.vintage;
      } else {
        clone.querySelector('.drink-vintage').textContent = '';
      }
      clone.querySelector('.drink-price').textContent = drink.price;

      drinkSection.appendChild(clone);
    }
  });
}
