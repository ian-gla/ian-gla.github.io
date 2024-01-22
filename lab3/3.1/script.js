// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1IjoiaWp0dXJ0b24iLCJhIjoiY2xyNTYzc2c5MDN4cDJrcHFpeXBjdThobyJ9.lmKwk5nO6gnslOtzi1aMSg";

//Before map
const beforeMap = new mapboxgl.Map({
  container: "before",
  style: "mapbox://styles/ijturton/clrot9ccj007601ple4befz6d",
  center: [-3.0335, 54.3864], // change to your centre
  zoom: 12
});

//After map
const afterMap = new mapboxgl.Map({
  container: "after",
  style: "mapbox://styles/ijturton/clrou81b2008f01pj2wpjcmjs",
  center: [-3.0335, 54.3864], // change to your centre
  zoom: 12
});
const container = "#comparison-container";
const map = new mapboxgl.Compare(beforeMap, afterMap, container, {});