const schoolLinks = [
    { name: 'Behavior Intervention Handbook', url: 'https://core-docs.s3.us-east-1.amazonaws.com/documents/asset/uploaded_file/4298/JCPS/4075474/Student_Support_and_Behavior_Intervention_Handbook.pdf' },
    { name: 'Counselor Referral', url: 'https://docs.google.com/forms/d/e/1FAIpQLScIwSRhT876F3zae9Vl5F-MH9TTsxukXvLXU6ZbZbl95fj9mg/viewform' },
    { name: 'Faculty Handbook', url: 'https://docs.google.com/presentation/d/1lxApT24oySZTj6X1pqr_4DJUw6B_BhotWhV6YLRRAaU/edit#slide=id.pk' },
    { name: 'Guest Teacher Plans', url: 'https://docs.google.com/document/d/1raVO2wjgp5_zlk_h0UBdVKEZPF87h3NrZ83qhRNI6RQ/edit?usp=sharing' },
    { name: 'ML Support Request', url: 'https://docs.google.com/forms/d/1toA9O7GIM9t8EHgeJFXcSOZzPOYNLufO5qmKMnjZeMw/viewform?edit_requested=true' },
    { name: 'Virtual Calming Room', url: 'https://virtualcalmingroom.net/' }
];

function displayLinks() {
    const linksList = document.getElementById('links-list');
    const resourceCount = document.getElementById('resource-count');

    linksList.innerHTML = '';

    schoolLinks.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.target = '_blank';
        anchor.textContent = link.name;
        listItem.appendChild(anchor);
        linksList.appendChild(listItem);
    });

    resourceCount.textContent = schoolLinks.length;
}

window.onload = displayLinks;

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
