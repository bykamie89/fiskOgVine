const url = 'https://fiskogvine-6dcb.restdb.io/rest/';
const info = {
  headers: {
    'x-apikey': '6319b950e906d642de324320',
  },
};

//const dinner = document.querySelector('#dinner');
//const lunch = document.querySelector('#lunch');
const wine = document.querySelector('#wine');
const wineCard = document.querySelector('.drink-type-headline');

console.log(wine);

let dbResponse;
let filter = 'alle';

//dinner.addEventListener('click', getData);
//lunch.addEventListener('click', getData);
wine.addEventListener('click', getData);

async function getData() {
  const response = await fetch(url + this.dataset.endpoint, info);
  dbResponse = await response.json();

  console.log(dbResponse);

  // if (this.dataset.endpoint == 'wine') {
  //   findDrinks();
  // } else {
  // }
}

function findDrinks() {
  const filterKnapper = document.querySelectorAll('#wine-card button');
  filterKnapper.forEach((knap) =>
    knap.addEventListener('click', filtrerDrinks)
  );
}

function filtrerDrinks() {
  filter = this.dataset.wineType;
  document.querySelector('.valgt').classList.remove('valgt');
  this.classList.add('valgt');
  visDrinks();
  wineCard.textContent = this.textContent;
}

function visDrinks() {
  const drinkSection = document.querySelector('#drink-type');
  const drinkTemplate = document.querySelector('#drink-template').content;

  drinkSection.textContent = '';

  dbResponse.forEach((drink) => {
    if (filter == drink.wineType || filter == 'alle') {
      const clone = drinkTemplate.cloneNode(true);
      clone.querySelector('.drink-decription').textContent = drink.beskrivelse;
      clone.querySelector('.drink-vintage').textContent = drink.year;
      clone.querySelector('.drink-price').textContent = drink.price;

      drinkSection.appendChild(clone);
    }
  });
}
