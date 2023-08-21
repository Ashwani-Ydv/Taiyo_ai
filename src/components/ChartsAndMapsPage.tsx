import React from 'react';
import LineGraph from '../components/LineGraph';
import Maps from './Maps'

const ChartsAndMapsPage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Cases Fluctuations</h1>
      <LineGraph />
      <h1 className="text-xl mt-6 ">World Map</h1>
      <Maps />
    </div>
  );
}

export default ChartsAndMapsPage;
