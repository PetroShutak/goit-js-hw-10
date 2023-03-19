import './css/styles.css';

import API from './fetchCountries'; 
import throttle from 'lodash.debounce'; 

const DEBOUNCE_DELAY = 300; 
const input = document.querySelector('#search-box');
const countryList = document.querySelector(".country-list");
const countryDiv = document.querySelector(".country-info");

input.addEventListener('input', throttle(onCountrySearch, DEBOUNCE_DELAY)); 

function onCountrySearch(event) {
    const countries = input.value.trim(); 
    if (countries) { 
        API.fetchCountries(countries); 
    } else { 
        clearer();
    };
};

export function clearer() { 
    countryList.innerHTML = null; 
    countryDiv.innerHTML = null; 
};






