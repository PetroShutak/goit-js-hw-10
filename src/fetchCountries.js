const BASE_URL = 'https://restcountries.com/v3.1/name/';
const searchParams = new URLSearchParams({
    fields: 'name,capital,population,flags,languages,',
});

export const fetchCountries = (name) => {
    return fetch(`${BASE_URL}${name}?${searchParams}`)
        .then(response => {
            if (response.status === 404) {
                throw new Error(response.status);
            }
            return response.json();
        });
};
// import Notiflix from 'notiflix'; 
// import {clearer} from './index'; 

// const BASE_URL = 'https://restcountries.com/v3.1/name/'; 
// const PROP_FILTER = '?fields=name,capital,population,flags,languages'; 
// const countryList = document.querySelector(".country-list"); 
// const countryDiv = document.querySelector(".country-info");     

// function fetchCountries(name) { 
//   clearer(); 
//   const url = `${BASE_URL}${name}${PROP_FILTER}`;   
//   return fetch(url).
//     then(response => response.json()). 
//     then((data) => { 
//       createCountryList(data); 
//       if (data.length > 10) { 
//         infoMessageTooManyCountries();  
//       };
//       if (data.length === 1) { 
//         createCountryInfo(data); 
//       };
//     }).
//     catch(error);  
// };


// const infoMessageTooManyCountries = () => { 
//   Notiflix.Notify.info(`Too many matches found. Please enter a more specific name.`);
//   clearer(); 
// };

// const error = () => { 
//   Notiflix.Notify.failure(`Oops, there is no country with that name`); 
// };

// const createCountryList = (data) => { 
//   const allCountriesArray = data.reduce( 
//     (acc, country) => acc + 
//       `<li class="country">
//       <img class="country-flags"
//       src="${country.flags.svg}" 
//       alt="${country.name.official}" 
//       width="40" heigth="30"/>
//       <h2 class="country-name"> ${country.name.official}</h2>
//       </li>`,
//     ""); 
//   countryList.innerHTML = allCountriesArray; 
// };

// const createCountryInfo = (data) => { 
//   const countryInfo = data.reduce( 
//     (acc, country) => acc + 
//      `<p class="capital"><span class="capital-info">Capital: </span> ${country.capital}</p>
//       <p class="population"><span class="population-info">Population: </span> ${country.population}</p>
//       <p class="languages"><span class="languages-info">Languages: </span> ${Object.values(country.languages)}</p>`,
//     "");
//   const countryInfoWithSpaces = countryInfo.replaceAll(",", ", "); 
//   countryDiv.innerHTML = countryInfoWithSpaces; 
// };