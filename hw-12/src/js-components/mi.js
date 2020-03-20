import getCountriesAPI from './fetchCountries.js';
import countryItemTemplate from '../templates/country-list-item.hbs';
import countriesItemsTemplate from '../templates/countries-list-items.hbs';
import _ from '../../node_modules/lodash';
import PNotify from 'pnotify/dist/es/PNotify.js';

const refs = {
  input: document.querySelector('input'),
  countryList: document.querySelector('#country-list'),
};

refs.input.addEventListener('input', _.debounce(searchInput, 500));

function searchInput() {
  const inputValue = refs.input.value;
  refs.countryList.innerHTML = '';
  if (!inputValue) return;
  getCountriesAPI(inputValue)
    .then(data => {
      let markup;
      if (data.length <= 10 && data.length > 2) {
        markup = buildCountreisMarkup(data);
        insertListItems(markup);
      } else if (data.length === 1) {
        markup = buildCountryMarkup(data);
        insertListItems(markup);
      } else if (data.length > 10) {
        PNotify.alert({
          text: 'To many matches found! Please, enter more specific query',
          delay: 1500,
        });
      }
    })
    .catch(() =>
      PNotify.error({
        text: 'No such country. Please, enter more specific query.',
        delay: 1500,
      }),
    );
}

function buildCountryMarkup(item) {
  return countryItemTemplate(item);
}

function buildCountreisMarkup(item) {
  return countriesItemsTemplate(item);
}

function insertListItems(items) {
  return refs.countryList.insertAdjacentHTML('beforeend', items);
}