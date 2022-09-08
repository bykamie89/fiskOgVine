const endpoint = 'https://fiskogvine-6dcb.restdb.io/rest/';
const info = {
  headers: {
    'x-apikey': '6319b950e906d642de324320',
  },
};

const dinner = document.querySelector('#dinner');
const lunch = document.querySelector('#lunch');
const wine = document.querySelector('#wine');

let dbResponse;

dinner.addEventListener('click', getData);
lunch.addEventListener('click', getData);
wine.addEventListener('click', getData);

async function getData() {
  const response = await fetch(endpoint + this.id, info);
  dbResponse = await response.json();

  console.log(dbResponse);
}
