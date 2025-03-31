import { useState } from 'react';

function Simulation({ setPage, settings }) {
  const [virtualAddress, setVirtualAddress] = useState('');
  const [translationResults, setTranslationResults] = useState(null);
  const [history, setHistory] = useState([]);

  const handleTranslate = () => {
    const hexAddress = parseInt(virtualAddress, 16);
<<<<<<< HEAD
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
=======
    const tlbHit = Math.random() > 0.5; // Simulated result
    const pageFault = Math.random() > 0.7; // Simulated result
    const physicalAddress = hexAddress + 1000;

    const result = {
      virtualAddress: `0x${hexAddress.toString(16).toUpperCase()}`,
      physicalAddress: `0x${physicalAddress.toString(16).toUpperCase()}`,
      tlbResult: tlbHit ? 'Hit' : 'Miss',
      pageFaultResult: pageFault ? 'Fault' : 'No Fault',
      timestamp: new Date().toLocaleTimeString(),
    };

    setTranslationResults(result);
    setHistory(prev => [result, ...prev].slice(0, 5));
  };

  return (
    <div className="mt-10 p-8 bg-gray-900 bg-opacity-70 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-700 mx-auto max-w-5xl">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
            Memory Translation
          </h2>
          <p className="text-gray-400">Current algorithm: {settings.algorithm}</p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => setPage('settings')}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300 flex items-center text-sm"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
          <button
            onClick={() => setPage('home')}
            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-300 flex items-center text-sm"
          >
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
            <label className="block text-lg font-medium text-blue-200 mb-3">Virtual Address (Hex)</label>
            <div className="flex">
              <input
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                type="text"
                value={virtualAddress}
                onChange={(e) => setVirtualAddress(e.target.value)}
                placeholder="e.g. 1A3F"
              />
              <button
                onClick={handleTranslate}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-r-lg transition duration-300"
              >
                Translate
              </button>
            </div>
          </div>

          {translationResults && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResultCard 
                title="TLB Result"
                value={translationResults.tlbResult}
                icon="⚡"
                color={translationResults.tlbResult === 'Hit' ? 'text-green-400' : 'text-red-400'}
              />
              <ResultCard 
                title="Page Fault"
                value={translationResults.pageFaultResult}
                icon="📄"
                color={translationResults.pageFaultResult === 'Fault' ? 'text-red-400' : 'text-green-400'}
              />
              <div className="md:col-span-2 bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-medium text-blue-200 mb-3">Address Translation</h3>
                <div className="flex items-center justify-between">
                  <div className="text-gray-300">{translationResults.virtualAddress}</div>
                  <svg className="w-6 h-6 mx-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  <div className="text-gray-300">{translationResults.physicalAddress}</div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 h-full">
            <h3 className="text-lg font-medium text-blue-200 mb-4">Recent Translations</h3>
            {history.length > 0 ? (
              <div className="space-y-4">
                {history.map((item, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">{item.timestamp}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${item.tlbResult === 'Hit' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'}`}>
                        TLB: {item.tlbResult}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center">
                      <span className="text-gray-300">{item.virtualAddress}</span>
                      <svg className="w-4 h-4 mx-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                      </svg>
                      <span className="text-gray-300">{item.physicalAddress}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No translation history yet</p>
            )}
          </div>
        </div>
>>>>>>> fab4caccac20c57efa242fe9eb00c54265deb449
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Simulation;
=======
const ResultCard = ({ title, value, icon, color }) => (
  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <h4 className="text-gray-400 text-sm">{title}</h4>
        <p className={`text-2xl font-bold mt-1 ${color}`}>{value}</p>
      </div>
      <span className="text-3xl">{icon}</span>
    </div>
  </div>
);

export default Simulation;
>>>>>>> fab4caccac20c57efa242fe9eb00c54265deb449
