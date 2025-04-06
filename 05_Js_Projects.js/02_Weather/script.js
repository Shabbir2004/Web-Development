document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const weatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityName = document.getElementById("city-name");
  const temperature = document.getElementById("temperature");
  const description = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  const KEY = "d478339565dbbd0e7b2b7cb22894c073";

  weatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) {
      return;
    }

    try {
      const detail = await fetchData(city);
      displayData(detail);
    } catch (error) {
      showError();
    }
  });

  async function fetchData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${KEY}`;
    const response = await fetch(url);
    console.log(typeof response);
    console.log("RESPONSE", response);

    if (!response.ok) {
      throw new Error("City Not Found");
    }

    const data = await response.json();
    return data;
  }

  function displayData(data) {
    console.log(data);

    const { name, main, weather } = data;
    cityName.textContent = name;
    temperature.textContent = `Temperature : ${main.temp}`;
    description.textContent = `Description : ${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError() {
    weatherInfo.classList.add("hidden");
    errorMessage.textContent = "City not found. Please enter a valid city name.";
    errorMessage.classList.remove("hidden");
  }
});
