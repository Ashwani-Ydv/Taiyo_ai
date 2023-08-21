
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 h-screen bg-slate-700 fixed top-0 left-0 overflow-y-auto">
      <h2 className="text-white text-xl font-bold p-4 border-b border-gray-600">Sidebar</h2>
      <div className="p-4">
        <div className="block text-white px-4 py-2 hover:bg-gray-600 rounded transition duration-200">
          <Link to="/" className="text-blue-500 ">Contacts</Link>
        </div>
        <div className="block text-white px-4 py-2 mt-2 hover:bg-gray-600 rounded transition duration-200">
          <Link to="/map&graph" className="text-blue-500">Map and Graph</Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
