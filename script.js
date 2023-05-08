const checkBtn = document.getElementById("check-btn");

function getCountryData() {
  const countryInput = document.getElementById('country-input').value;
  const url = `https://api.covid19api.com/dayone/country/${countryInput}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      const activeCases = data[data.length - 1].Active;
      const totalDeaths = data[data.length - 1].Deaths;
      document.getElementById("active-cases").textContent = `Total Active Cases in ${countryInput}: ${activeCases}`;
      document.getElementById("total-deaths").textContent = `Total Deaths: ${totalDeaths}`;
    })
    .catch(error => console.log(error));
}

checkBtn.addEventListener("click", getCountryData);
