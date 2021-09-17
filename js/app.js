const loadData = () => {
  fetch("https://restcountries.eu/rest/v2/all")
    .then((res) => res.json())
    .then((data) => displayData(data));
};

const displayData = (countries) => {
  const allCountries = countries.map((country) => setHtml(country));
  console.log(allCountries[0]);
  const container = document.getElementById("countries");
  console.log(allCountries);
  container.innerHTML = allCountries;
};
const setHtml = (country) => {
  const html = `
    <div class ="country">
    <h3>${country.name}</h3>
    <h4>${country.capital}</h4>
    <img src ="${country.flag}">
       
    </div>
    `;
  return html;
};
loadData();
