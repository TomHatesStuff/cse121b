const apiKey = '02092c144ea8ac79ab62f34923f96cc0'; // Replace with your actual API key

const weatherForm = document.getElementById('weather-form');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');
const weatherDetails = document.getElementById('weather-details');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = locationInput.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            const cityName = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            // Display the weather information
            document.getElementById('location-name').textContent = `Location: ${cityName}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}°C`;
            document.getElementById('description').textContent = `Description: ${description}`;
            document.getElementById('humidity').textContent = `Humidity: ${humidity}%`;
            document.getElementById('wind-speed').textContent = `Wind Speed: ${windSpeed} m/s`;

            // Show the weather details
            weatherDetails.style.display = 'block';
        })
        .catch((error) => {
            weatherInfo.textContent = 'Error: City not found.';
        });
});
