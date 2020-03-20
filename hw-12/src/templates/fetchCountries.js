export default function getCountriesAPI(name) {
    return fetch(`https://restcountries.eu/rest/v2/name/${name}/`)
      .then(response => {
        if (response.ok) return response.json();
      }).then(data => data)
  }