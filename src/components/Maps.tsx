import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Icon } from "leaflet";
import { useQuery } from 'react-query';

const fetchCountryData = async () => {
  const response = await fetch('https://disease.sh/v3/covid-19/countries');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  
  return response.json();
}

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34], 
  tooltipAnchor: [16, -28], 
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;


interface CountryData {
  country: string;
  active: number;
  recovered: number;
  deaths: number;
  countryInfo: {
    _id: number;
    lat: number;
    long: number;
    flag:string;
  };
}


const Maps: React.FC = () => {
  const { data: countries, isLoading, isError } = useQuery('countriesData', fetchCountryData);
  console.log("CountryData",countries);;

  if (isLoading) return <div>Loading...</div>;
  if (isError || !countries) return <div>Error loading data</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <MapContainer
      center={[0, 0]}
      zoom={2}
      className="w-full h-[500px] rounded-md shadow-lg overflow-hidden"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright" class="text-blue-500 hover:underline">OpenStreetMap</a> contributors'
      />
      {countries.map((country: CountryData) => (
        <Marker 
          key={country.countryInfo._id} 
          position={[country.countryInfo.lat, country.countryInfo.long]}
          icon={DefaultIcon}
        >
          <Popup className="text-sm">
            <div className='flex'> <img className="w-5 h-4" src={country.countryInfo.flag} alt={`${country.country} flag`} />&nbsp;
           <b>{country.country}</b></div>
            Active: {country.active}<br />
            Recovered: {country.recovered}<br />
            Deaths: {country.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
</div>

  );
}

export default Maps;
