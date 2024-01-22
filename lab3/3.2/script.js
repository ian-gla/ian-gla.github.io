// The value for 'accessToken' begins with 'pk...'
mapboxgl.accessToken =
  "pk.eyJ1IjoiaWp0dXJ0b24iLCJhIjoiY2xyNTYzc2c5MDN4cDJrcHFpeXBjdThobyJ9.lmKwk5nO6gnslOtzi1aMSg";
const style_2019 = "mapbox://styles/ijturton/clrot9ccj007601ple4befz6d";
const style_2021 = "mapbox://styles/ijturton/clrou81b2008f01pj2wpjcmjs";

const map = new mapboxgl.Map({
  container: "map",
  style: style_2019,
  center: [-3.0335, 54.3864], // change to your centre
  zoom: 12
});

const layerList = document.getElementById("menu");
const inputs = layerList.getElementsByTagName("input");

//On click the radio button, toggle the style of the map.
for (const input of inputs) {
  input.onclick = (layer) => {
    if (layer.target.id == "style_2019") {
      map.setStyle(style_2019);
    }
    if (layer.target.id == "style_2021") {
      map.setStyle(style_2021);
    }
  };
}