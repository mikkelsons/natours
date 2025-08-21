/* eslint-disable */
export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoibWlra2Vsc29ucyIsImEiOiJjbWVmcGZvNDcweW5vMmtvZWdtbjBhOXJ4In0.fVyxDDeIeVHA_mxCtIoMvA";

  const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mikkelsons/cmeg0x0ni00lp01s43kv7cyyk",
    scrollZoom: false,
    // center: [-118.113491, 34.111745], // starting position [lng, lat]. Note that lat must be set between -90 and 90
    // zoom: 5, // starting zoom
    // interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    // Create marker
    const el = document.createElement("div");
    el.className = "marker";

    // Add marker
    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
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
