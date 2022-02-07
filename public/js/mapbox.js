export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiY3VyYXRvcjY5IiwiYSI6ImNrejA2NGwzZTAyZjYyd3BuNzIyZzA3ZzAifQ.foqIs3Sq5H6QJGCAi9tXdg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/curator69/ckz078bt6001s14olz7evt5fz',
    scrollZoom: false,
    // center: [-118.113491, 34.111745],
    // zoom: 10,
    // interactive: false
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    // Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    // Extend map bounds to include current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
