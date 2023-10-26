const apiKey = '02092c144ea8ac79ab62f34923f96cc0'; // Replace with your actual API key

const weatherForm = document.getElementById('weather-form');
const locationInput = document.getElementById('location');
const weatherInfo = document.getElementById('weather-info');
const weatherDetails = document.getElementById('weather-details');
const loadingSpinner = document.getElementById('loading-spinner');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = locationInput.value;

    // Show the loading spinner
    loadingSpinner.style.display = 'block';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('City not found or an error occurred.');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data); // inspect the API response

            // Hide the loading spinner
            loadingSpinner.style.display = 'none';

            // The rest of your code to display weather information
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
            // Hide the loading spinner in case of an error
            loadingSpinner.style.display = 'none';

            weatherInfo.textContent = error.message;
        });
});
