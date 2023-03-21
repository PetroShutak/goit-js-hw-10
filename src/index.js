import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';

const DEBOUNCE_DELAY = 300;

const countriesList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
const searchBox = document.querySelector('#search-box');
const body = document.querySelector('body');
body.style.margin = '50px 50px';

body.style.backgroundImage =
  'url(https://amazing-ukraine.info/wp-content/uploads/2021/04/169062270_271594621282708_6514637710719845885_n.jpg)';
body.style.backgroundSize = 'cover';
body.style.backgroundRepeat = 'no-repeat';

searchBox.addEventListener('input', debounce(onInputSearch, DEBOUNCE_DELAY));

function onInputSearch(e) {
  e.preventDefault();

  const searchCountries = e.target.value.trim();

  if (!searchCountries) {
    countriesList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(searchCountries)
    .then(result => {
      if (result.length > 10) {
        Notify.info(
          'Too many matches found. Please, enter a more specific name.'
        );
        return;
      }
      renderedCountries(result);
    })
    .catch(error => {
      countriesList.innerHTML = '';
      countryInfo.innerHTML = '';
      Notify.failure('Oops, there is no country with that name');
    });
}

function renderedCountries(result) {
  const inputLetters = result.length;

  if (inputLetters === 1) {
    countriesList.innerHTML = '';

    countryCardMarkup(result);
  }

  if (inputLetters > 1 && inputLetters <= 10) {
    countryInfo.innerHTML = '';
    countriesListMarkup(result);
  }
}

function countriesListMarkup(result) {
  const listMarkup = result
    .map(({ name, flags }) => {
      return /*html*/ `<li>
                        <img src="${flags.svg}" alt="${name}" width="60" height="auto">
                        <span>${name.official}</span>
                </li>`;
    })
    .join('');
  countriesList.innerHTML = listMarkup;
  return listMarkup;
}

function countryCardMarkup(result) {
  const cardMarkup = result
    .map(({ flags, name, capital, population, languages }) => {
      languages = Object.values(languages).join(', ');
      return /*html*/ `
            <img src="${flags.svg}" alt="${name}" width="320" height="auto">
            <p> ${name.official}</p>
            <p>Capital: <span> ${capital}</span></p>
            <p>Population: <span> ${population}</span></p>
            <p>Languages: <span> ${languages}</span></p>`;
    })
    .join('');
  countryInfo.innerHTML = cardMarkup;
  return cardMarkup;
}
