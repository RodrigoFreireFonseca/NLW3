import leaflet from 'leaflet';

import mapMarkerImg from '../images/local.svg';

const mapIcon = leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize:[58, 60],
  iconAnchor: [29, 68],
  popupAnchor: [170, -5],
});

export default mapIcon;