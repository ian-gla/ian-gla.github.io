/*

Add an event listener that runs

when a user clicks on the map element.

*/

map.on('click', (event) => {

// If the user clicked on one of your markers, get its information. 
  const features = map.queryRenderedFeatures(event.point, {
layers: ['charging-sites'] // replace with your layer name 
});
if (!features.length) {

return;

}

const feature = features[0];

/*

Create a popup, specify its options

and properties, and add it to the map.

*/

const popup = new mapboxgl.Popup({ offset: [0, -15], class: "my-popup"}).setLngLat(feature.geometry.coordinates).setHTML(

`<h3>Location: ${feature.properties.sitename}</h3><p>${feature.properties.taxipublicuses }</p>
<p>Number of points: ${feature.properties.numberrcpoints}`

).addTo(map);

});