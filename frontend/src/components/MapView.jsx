// Your code had:
// <div id="map" style={{height: '600px',marginBottom: '2rem',marginTop: '30px'}}s>

import { MapContainer, TileLayer } from 'react-leaflet';

function MapView() {
  return (
    <div id="map" style={{ height: '600px', marginBottom: '2rem', marginTop: '10px' }}>
      <MapContainer center={[22.0, 79.0]} zoom={5} style={{ height: '100%' }}>
        <TileLayer
          url="http://<YOUR_TILE_SERVER_HOST>:8080/data/india/{z}/{x}/{y}.png"
          attribution="&copy; India Map Portal"
        />
      </MapContainer>
    </div>
  );
}

export default MapView;
