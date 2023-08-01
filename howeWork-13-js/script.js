
function searchWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = "30fa9a95b3384de6b8a173631233007";

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const cityName = data.location.name;
            const countryName = data.location.country;
            const temperature = data.current.temp_c;

            const result = `Город: ${cityName}<br>Страна: ${countryName}<br>Температура: ${temperature}°C`;

            document.getElementById("result").innerHTML = result;
        })
        .catch(error => {
            console.log(error);
            document.getElementById("result").innerHTML = "Ошибка.";
        });
}