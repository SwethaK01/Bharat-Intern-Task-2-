const apiKey = '256ed27efe2583cbe9ab726bd9dc067f';

async function getWeather() {
    const city = document.getElementById("city").value;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const weatherElement = document.querySelector('.weather');
    const { name, main: { temp, humidity } } = data;
    weatherElement.innerHTML = `
        <p>Location: ${name}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        
    `;
}
