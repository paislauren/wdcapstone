document.addEventListener('DOMContentLoaded', async () => {
    const weatherElement = document.getElementById('weather');
    const weatherIcon = document.getElementById('weather-icon');

    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=2c973da105dbad25dd9922831d94642a&units=imperial');
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const weatherData = await response.json();
        const temp = weatherData.main.temp;
        const description = weatherData.weather[0].description;
        const iconCode = weatherData.weather[0].icon;

        weatherElement.textContent = `Temperature: ${temp}°F, Weather: ${description}`;

        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        weatherIcon.src = iconUrl;
        weatherIcon.style.display = 'block';
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherElement.textContent = 'Unable to load weather data.';
    }
});

