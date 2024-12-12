const resources = [
    {
        title: "Canva",
        description: "A graphic design platform to create stunning visuals and presentations.",
        link: "https://www.canva.com"
    },
    {
        title: "JCPS Digital Learning Channel",
        description: "Explore tutorials and resources to enhance digital learning.",
        link: "https://www.youtube.com/c/JCPSDigitalLearningChannel"
    },
    {
        title: "Teachers Pay Teachers",
        description: "Discover educational resources and lesson plans for educators.",
        link: "https://www.teacherspayteachers.com"
    },
    {
        title: "Clever",
        description: "A single sign-on platform for seamless access to educational apps and tools.",
        link: "https://www.clever.com"
    }
];

const container = document.getElementById("resources-container");

function renderResources() {
    container.innerHTML = '';
    resources.forEach(resource => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3 class="card-title">${resource.title}</h3>
            <p class="card-description">${resource.description}</p>
            <a class="card-link" href="${resource.link}" target="_blank">Visit</a>
        `;
        container.appendChild(card);
    });
}

const form = document.getElementById("resource-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("resource-title").value;
    const link = document.getElementById("resource-link").value;
    const description = document.getElementById("resource-description").value;

    if (title && link && description) {
        resources.push({ title, description, link });
        renderResources();
        form.reset();
    }
});

renderResources();


// Weather
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