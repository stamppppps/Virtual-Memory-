import { useState } from 'react';

function Simulation({ setPage, settings }) {
  const [virtualAddress, setVirtualAddress] = useState('');
  const [translationResults, setTranslationResults] = useState(null);

  const handleTranslate = () => {
    const hexAddress = parseInt(virtualAddress, 16);
    const tlbHit = Math.random() > 0.5; 
    const tlbResult = tlbHit ? 'Hit' : 'Miss';
    const pageFault = Math.random() > 0.5 ? 'No Fault' : 'Fault';
    const physicalAddress = hexAddress + 1000;

    setTranslationResults({
      tlbTable: `0x${hexAddress.toString(16).toUpperCase()} - ${tlbResult}`,
      pageTable: `0x${hexAddress.toString(16).toUpperCase()} - ${pageFault}`,
      memoryAccessFlow: `Physical Address: ${physicalAddress}`,
      tlbHitMiss: tlbResult,
      pageFaultResult: pageFault,
    });
  };

  return (
    <div className="mt-10 p-8 bg-gradient-to-br from-white to-indigo-50 rounded-xl shadow-2xl mx-auto max-w-4xl border border-indigo-100">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Simulation
        </h2>
       
      </div>

      {/* Virtual Address Input */}
      <div className="mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Virtual Address(Hexadecimal)</label>
        <div className="relative">
          <input
            className="p-3 w-full bg-white border-2 border-indigo-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-300 text-gray-700 pl-12"
            type="text"
            value={virtualAddress}
            onChange={(e) => setVirtualAddress(e.target.value)}
            placeholder="0x..."
          />
          <div className="absolute left-3 top-3 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Translate Button */}
      <div className="text-center mb-10">
        <button
          onClick={handleTranslate}
          className="py-3 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          Translate
        </button>
      </div>

      {/* Results */}
      {translationResults && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-blue-500">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">TLB Table</h3>
            <p className="text-gray-700">{translationResults.tlbTable}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-indigo-500">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">Page Table</h3>
            <p className="text-gray-700">{translationResults.pageTable}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-purple-500">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">Memory Access Flow</h3>
            <p className="text-gray-700">{translationResults.memoryAccessFlow}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-md border-l-4 border-pink-500">
            <h3 className="text-xl font-semibold text-pink-600 mb-3">Result</h3>
            <p className="text-gray-700">TLB Hit/Miss: <span className={`font-bold ${translationResults.tlbHitMiss === 'Hit' ? 'text-green-500' : 'text-red-500'}`}>{translationResults.tlbHitMiss}</span></p>
            <p className="text-gray-700">Page Fault: <span className={`font-bold ${translationResults.pageFaultResult === 'No Fault' ? 'text-green-500' : 'text-red-500'}`}>{translationResults.pageFaultResult}</span></p>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={() => setPage('settings')}
          className="py-2 px-6 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 transition-all duration-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Return to setting
        </button>

        <button
          onClick={() => setPage('home')}
          className="py-2 px-6 bg-gradient-to-r from-indigo-400 to-blue-400 text-white rounded-lg shadow-md hover:from-indigo-500 hover:to-blue-500 transition-all duration-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          Return to Home
        </button>
      </div>
    </div>
  );
}

export default Simulation;