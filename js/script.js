
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER(document.getElementById("city-input").value);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;


      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;

      console.log(data);

      

      // On récupère l'information principal
      const main2 = data.list[1].weather[0].main;
      const description2 = data.list[1].weather[0].description;
      const temp2 = data.list[1].main.temp;
      const icon2 = apiWeather.getHTMLElementFromIcon(data.list[1].weather[0].icon);

      // Modifier le DOM
      document.getElementById('tomorrow-forecast-main').innerHTML = main2;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description2;
      document.getElementById('icon-weather-container2').innerHTML = icon2;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp2}°C`;

      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
