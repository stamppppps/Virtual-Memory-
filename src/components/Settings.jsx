import React, { useState } from 'react';

function Settings({ setPage, setSettings }) {
  const [algorithm, setAlgorithm] = useState('FIFO');
  const [tlbSize, setTlbSize] = useState(4);
  const [pageTableSize, setPageTableSize] = useState(16);

  const handleApply = () => {
    setSettings({ algorithm, tlbSize, pageTableSize });
    setPage('simulation');
  };

  return (
<<<<<<< HEAD
    <div className="mt-10 p-8 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-2xl mx-auto max-w-lg border border-indigo-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Setting
        </h2>
        
      </div>

      {/* Page Replacement Algorithm */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Page Replacement Algorithm</label>
        <div className="relative">
          <select
            className="appearance-none p-3 w-full bg-white border-2 border-indigo-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 text-gray-700 pr-10"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="FIFO">FIFO (First-In-First-Out)</option>
            <option value="LRU">LRU (Least Recently Used)</option>
            <option value="Optimal">Optimal</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* TLB Cache Size */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">TLB Cache Size</label>
        <input
          className="p-3 w-full bg-white border-2 border-indigo-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 text-gray-700"
          type="number"
          value={tlbSize}
          onChange={(e) => setTlbSize(Number(e.target.value))}
          min="1"
        />
      </div>

      {/* Page Table Size */}
      <div className="mb-8">
        <label className="block text-lg font-medium text-gray-700 mb-2">Page Table Size</label>
        <input
          className="p-3 w-full bg-white border-2 border-indigo-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 text-gray-700"
          type="number"
          value={pageTableSize}
          onChange={(e) => setPageTableSize(Number(e.target.value))}
          min="1"
        />
      </div>

      {/* Apply Button */}
      <div className="text-center">
        <button
          onClick={handleApply}
          className="py-3 px-8 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center mx-auto"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          apply settings.
        </button>
=======
    <div className="mt-10 p-8 bg-gray-900 bg-opacity-70 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-700 mx-auto max-w-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
          Simulation Configuration
        </h2>
        <p className="text-gray-400 mt-2">Customize your virtual memory experience</p>
      </div>

      <div className="space-y-6">
        <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
          <label className="block text-lg font-medium text-blue-200 mb-2">Page Replacement Algorithm</label>
          <select
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
            value={algorithm}
            onChange={(e) => setAlgorithm(e.target.value)}
          >
            <option value="FIFO" className="bg-gray-800">First-In-First-Out (FIFO)</option>
            <option value="LRU" className="bg-gray-800">Least Recently Used (LRU)</option>
            <option value="Optimal" className="bg-gray-800">Optimal</option>
          </select>
          <p className="text-gray-400 mt-2 text-sm">Select the algorithm for page replacement</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
            <label className="block text-lg font-medium text-blue-200 mb-2">TLB Cache Size</label>
            <input
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              type="number"
              value={tlbSize}
              onChange={(e) => setTlbSize(Number(e.target.value))}
              min="1"
            />
            <p className="text-gray-400 mt-2 text-sm">Number of entries in TLB</p>
          </div>

          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
            <label className="block text-lg font-medium text-blue-200 mb-2">Page Table Size</label>
            <input
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
              type="number"
              value={pageTableSize}
              onChange={(e) => setPageTableSize(Number(e.target.value))}
              min="1"
            />
            <p className="text-gray-400 mt-2 text-sm">Number of pages in memory</p>
          </div>
        </div>

        <div className="flex justify-between pt-6">
          <button
            onClick={() => setPage('home')}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300 flex items-center"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back
          </button>
          <button
            onClick={handleApply}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg shadow-lg transition duration-300 flex items-center"
          >
            Apply Configuration
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
>>>>>>> fab4caccac20c57efa242fe9eb00c54265deb449
      </div>
    </div>
  );
}

export default Settings;