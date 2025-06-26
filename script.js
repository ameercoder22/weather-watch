const apiKey = 'YOUR_API_KEY'; // Replace this with your real API key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const weather = data.weather[0].description;
      document.getElementById('weatherResult').innerHTML = `
        <p>🌡️ Temperature: ${temp}°C</p>
        <p>💧 Humidity: ${humidity}%</p>
        <p>🌥️ Forecast: ${weather}</p>
      `;
    })
    .catch(err => {
      document.getElementById('weatherResult').innerHTML = "City not found 😢";
    });
}
