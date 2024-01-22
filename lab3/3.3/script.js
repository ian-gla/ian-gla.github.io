// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1IjoiaWp0dXJ0b24iLCJhIjoiY2xyNTYzc2c5MDN4cDJrcHFpeXBjdThobyJ9.lmKwk5nO6gnslOtzi1aMSg";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  center: [-3.0335, 54.3864], // change to your centre
  zoom: 10
});

const data_url =
  "https://api.mapbox.com/datasets/v1/ijturton/clrozh3ms36ku20n0f06phdpe/features?access_token=pk.eyJ1IjoiaWp0dXJ0b24iLCJhIjoiY2xyNTYzc2c5MDN4cDJrcHFpeXBjdThobyJ9.lmKwk5nO6gnslOtzi1aMSg";

map.on("load", () => {
  map.addLayer({
    id: "crimes",
    type: "circle",
    source: {
      type: "geojson",
      data: data_url
    },
    paint: {
      "circle-radius": 10,
      "circle-color": "#eb4d4b",
      "circle-opacity": 0.9
    }
  });
  //Slider interaction code goes below
  type = "all";
  filterType = ["!=", ["get", "Crime Type"], "placeholder"];
  filterMonth = ["=="[("get", "Month")], "2021-01"];

  //   console.log(type);
  // update the map filter
  if (type == "all") {
    filterType = ["!=", ["get", "Crime type"], "placeholder"];
  } else if (type == "shoplifting") {
    filterType = ["==", ["get", "Crime type"], "Burglary"];
  } else if (type == "bike") {
    filterType = ["==", ["get", "Crime type"], "Burglary"];
  } else {
    console.log("error");
  }
  map.setFilter("crimes", ["all", filterMonth, filterType]);
});

document.getElementById("slider").addEventListener("input", (event) => {
  //Get the month value from the slider
  const month = parseInt(event.target.value);

  // get the correct format for the data
  formatted_month = "2021-" + ("0" + month).slice(-2);
  //Create a filter

  filterMonth = ["==", ["get", "Month"], formatted_month];
  //set the map filter
  map.setFilter("crimes", ["all", filterType, filterMonth]);

  // update text in the UI
  document.getElementById("active-month").innerText = month;
});
//Radio button interaction code goes below
document.getElementById("filters").addEventListener("change", (event) => {
  const type = event.target.value;
  console.log(type);
  // update the map filter
  if (type == "all") {
    filterType = ["!=", ["get", "Crime type"], "placeholder"];
  } else if (type == "shoplifting") {
    filterType = ["==", ["get", "Crime type"], "Drugs"];
  } else if (type == "bike") {
    filterType = ["==", ["get", "Crime type"], "Burglary"];
  } else {
    console.log("error");
  }
  console.log(filterType);
  map.setFilter("crimes", ["all", filterMonth, filterType]);
});