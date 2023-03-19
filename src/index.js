import './css/styles.css';


import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchCountries } from './js/fetchCountries';



const DEBOUNCE_DELAY = 300;

// function fetchCountries (searchQuery) {
//     return fetch('https://restcountries.eu/rest/v2/name/' + searchQuery)
//     .then(response => response.json())
//     .catch(error => console.log(error));
// }
// const refs = {
//     searchForm: document.querySelector('#search-box'),
//     countriesList: document.querySelector('.country-list'),
//     countryCard: document.querySelector('.country-info'),
// };
// console.log(refs);
// refs.searchForm.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

// function onSearch(event){
//     event.preventDefault();
//     const searchQuery = event.target.value;
//     if(searchQuery === ''){
//         return;
//     }
//     fetchCountries(searchQuery);
//     console.log(searchQuery);
// }

// console.log(fetchCountries);







