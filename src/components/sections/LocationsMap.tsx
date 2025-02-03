'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlobeAltIcon, BoltIcon, SignalIcon } from '@heroicons/react/24/outline';


const locations = [
  {
    id: 1,
    name: 'NorthCarolina',
    region: 'North America East',
    ping: '< 10ms',
    servers: '0+',
    status: '99.99%',
  },
  {
    id: 2,
    name: 'Dallas',
    region: 'North America Central',
    ping: '< 10ms',
    servers: '0+',
    status: '99.99%',
  },
  {
    id: 3,
    name: 'London - Coming soon',
    region: 'Europe West',
    ping: '< 12ms',
    servers: '0+',
    status: '99.99%',
  },
  {
    id: 4,
    name: 'Frankfurt - Coming soon',
    region: 'Europe Central',
    ping: '< 10ms',
    servers: '0+',
    status: '99.99%',
  },

];

const regions = ['All Regions', 'North America', 'Europe'];

export default function LocationsMap() {
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [pingData, setPingData] = useState<{ [key: string]: string }>({});

  const filteredLocations = locations.filter(
    (location) =>
      selectedRegion === 'All Regions' || location.region.includes(selectedRegion)
  );

  // Function to ping the server
  const pingServer = async (locationName: string) => {
    try {
      // Fetch ping data from your API (localhost:4000)
      const response = await fetch(`http://localhost:4000/ping/${locationName.toLowerCase()}`);
      const data = await response.json();

      // Handle response based on location name
      if (data.latency) {
        setPingData((prev) => ({
          ...prev,
          [locationName]: `${data.latency}ms`, // Store latency value in the state
        }));
      } else {
        setPingData((prev) => ({
          ...prev,
          [locationName]: 'N/A',
        }));
      }
    } catch (error) {
      console.error('Failed to ping server:', error);
      setPingData((prev) => ({
        ...prev,
        [locationName]: 'N/A',
      }));
    }
  };

  useEffect(() => {
    // Ping all servers when the component loads
    locations.forEach((location) => pingServer(location.name));
  }, []);

  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary-600 dark:text-primary-400">Global Network</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Server Locations
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our globally distributed network ensures low latency for players worldwide.
          </p>
        </div>

        {/* Region Filter */}
        <div className="mt-16 flex justify-center gap-4 flex-wrap">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedRegion === region
                  ? 'bg-primary-600 text-white dark:bg-primary-500'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Location Cards */}
        <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredLocations.map((location) => (
            <motion.div
              layout
              key={location.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{location.name}</h3>
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 dark:bg-green-900/20 dark:text-green-400">
                  Active
                </span>
              </div>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{location.region}</p>

              <dl className="mt-4 grid grid-cols-1 gap-4 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">Latency:</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">
                    {pingData[location.name] || location.ping}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">Servers:</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{location.servers}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600 dark:text-gray-400">Uptime:</dt>
                  <dd className="font-medium text-gray-900 dark:text-white">{location.status}</dd>
                </div>
              </dl>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
