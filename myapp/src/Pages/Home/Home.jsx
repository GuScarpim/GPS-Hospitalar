/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import Logo from '../../Components/Atoms/Logo';

import { Card } from '../Login/styles';
import { Container } from './styles';

// import { GoogleApiWrapper, Marker } from 'google-maps-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from './mapIcon';
import 'leaflet/dist/leaflet.css';

const Home = ({ google }) => {
  const [stores, setStores] = useState([
    {
      latitude: -27.0922364,
      longitude: -52.6166878,
      name: 'Hospital São Miguel',
    },
    { latitude: -26.9605363, longitude: -52.5335505, name: 'Xaxim' },
  ]);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);
  const [setActiveMarker] = useState({});
  const [setSelectedPlace] = useState({});
  const [geolocation, setGeolocation] = useState({
    lat: -23.4992421,
    lng: -46.4544832,
  });

  function onMarkerClick(props, marker) {
    setSelectedPlace(props);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  }

  function onMapClicked() {
    if (showingInfoWindow) {
      setActiveMarker(null);
      setShowingInfoWindow(false);
    }
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setGeolocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  // const points = [
  //   { lat: -23.497387793950786, lng: -46.404823065278954 },
  //   { lat: -23.491602227930116, lng: -46.41546607005374 },
  //   { lat: -23.486682329161113, lng: -46.431988476659775 },
  //   { lat: -23.503999558405532, lng: -46.43091559311392 },
  //   { lat: -23.478915867654425, lng: -46.41790979317774 },
  //   { lat: -23.478049895476428, lng: -46.42400377171815 },
  // ];
  // const bounds = new google.maps.LatLngBounds();
  // let i = 0;
  // for (i; i < points.length; i++) {
  //   bounds.extend(points[i]);
  // }

  const position = [-23.497387793950786, -46.404823065278954];
  // const position = [geolocation.lat, geolocation.lng];

  return (
    <Container>
      <Logo />
      <Card>
        {/* <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
        <MapContainer
          center={position}
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />

          <Marker position={position}>
            <Popup>Você está aqui!</Popup>
          </Marker>

          {/* <Marker position={position}>
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className='map-popup'
            >
              Hospital
              <div>AAAA</div>
            </Popup>
          </Marker> */}
        </MapContainer>
      </Card>
    </Container>
  );
};

export default Home;
//   GoogleApiWrapper(() => ({
//   apiKey: 'AIzaSyCWkJOC_Je4v3QIE3Qblwa0yrCTr46Lo7Y',
//   language: 'pt-BR',
// }))(Home);
