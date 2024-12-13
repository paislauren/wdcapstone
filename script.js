document.addEventListener('DOMContentLoaded', async () => {
    const weatherElement = document.getElementById('weather');
    
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Louisville&appid=2c973da105dbad25dd9922831d94642a&units=imperial');
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const weatherData = await response.json();
        const temp = Math.round(weatherData.main.temp);
        const description = weatherData.weather[0].description.toUpperCase();
        const icon = weatherData.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`; 
        
        weatherElement.innerHTML = `
            <img src="${iconUrl}" alt="${description}" />
            <div id="temp">${temp}°F</div>
            <div id="description">${description}</div>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        weatherElement.textContent = 'Unable to load weather data.';
    }
});
