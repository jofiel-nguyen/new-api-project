const fetchButton = document.getElementById("fetch-button");
const earthquakeDataDiv = document.getElementById("earthquake-data");

fetchButton.addEventListener("click", () => {
  fetch("https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2023-03-01&endtime=2023-03-02&minmagnitude=5")
    .then(response => response.json())
    .then(data => {
      const earthquakes = data.features;
      const earthquakeList = document.createElement("ul");
      earthquakeList.classList.add("earthquake-list");

      earthquakes.forEach(earthquake => {
        const earthquakeItem = document.createElement("li");
        earthquakeItem.classList.add("earthquake-item");
        earthquakeItem.innerHTML = `${earthquake.properties.place} - Magnitude ${earthquake.properties.mag}`;
        earthquakeList.appendChild(earthquakeItem);
      });

      earthquakeDataDiv.innerHTML = "";
      earthquakeDataDiv.appendChild(earthquakeList);
    })
    .catch(error => {
      console.error(error);
      earthquakeDataDiv.innerHTML = "An error occurred while fetching earthquake data.";
    });
});


      function getActivity() {
        fetch('https://www.boredapi.com/api/activity')
          .then(response => response.json())
          .then(data => {
            document.getElementById('activity').textContent = data.activity;
          })
          .catch(error => console.error(error));
      }