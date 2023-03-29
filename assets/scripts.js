
    function getWeather() {
        // Get the user's location input
        const location = document.getElementById('location').value;

        // Make a GET request to the weather API endpoint
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=API-key`)
          .then(response => response.json())
          .then(data => {
            // Extract the weather information from the response
            const weather = data.weather[0].description;
            const temperature = Math.round(data.main.temp - 273.15); // Convert from Kelvin to Celsius
            // Display the weather information on the page
            document.getElementById('weather').textContent = `The weather in ${location} is ${weather} with a temperature of ${temperature}°C.`;
          })
          .catch(error => {
            console.log('Something went wrong:', error);
            document.getElementById('weather').textContent = 'Sorry, we could not get the weather information for your location. Please try again later.';
          });
      }
      function getActivity() {
        fetch('https://www.boredapi.com/api/activity')
          .then(response => response.json())
          .then(data => {
            document.getElementById('activity').textContent = data.activity;
          })
          .catch(error => console.error(error));
      }