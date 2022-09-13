const url = 'https://fiskogvine-6dcb.restdb.io/rest/';
const info = {
  headers: {
    'x-apikey': '631f796bfdc15b0265f17343',
  },
};

const lunch = document.querySelector('#lunch');
const dinner = document.querySelector('#dinner');

lunch.addEventListener('click', getData);
dinner.addEventListener('click', getData);

let dbConnection;

async function getData() {
  const response = await fetch(url + this.id, info);
  dbConnection = await response.json();

  console.log(dbConnection);
  if (this.id == 'lunch') {
    visLunch();
  } else if (this.id == 'dinner') {
    visDinner();
  }
}

function visLunch() {
  const lunchSection = document.querySelector('#holder-lunch');
  const lunchTemplate = document.querySelector('#template-dinner').content;

  lunchSection.textContent = '';

  dbConnection.forEach((lunchItem) => {
    console.log('Kategori', lunchItem.kategori);
    const klon = lunchTemplate.cloneNode(true);
    klon.querySelector('.mainingredient').textContent =
      lunchItem.mainingredient;
    klon.querySelector('.description').textContent = lunchItem.description;
    klon.querySelector('.pris').textContent = lunchItem.price + 'DKK';
    lunchSection.appendChild(klon);
  });
}

function visDinner() {
  const dinnerSection = document.querySelector('#holder-dinner');
  const dinnerTemplate = document.querySelector('#template-dinner').content;

  dinnerSection.textContent = '';

  dbConnection.forEach((dinnerItem) => {
    console.log('Kategori', dinnerItem.kategori);
    const klon = dinnerTemplate.cloneNode(true);
    klon.querySelector('.mainingredient').textContent =
      dinnerItem.mainingredient;
    klon.querySelector('.description').textContent = dinnerItem.description;
    klon.querySelector('.pris').textContent = dinnerItem.price + 'DKK';
    dinnerSection.appendChild(klon);
  });
}
