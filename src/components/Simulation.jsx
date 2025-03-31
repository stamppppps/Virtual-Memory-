import { useState } from 'react';

function Simulation({ setPage, settings }) {
  const [virtualAddress, setVirtualAddress] = useState('');
  const [translationResults, setTranslationResults] = useState(null);
  const [history, setHistory] = useState([]);

  const handleTranslate = () => {
    const hexAddress = parseInt(virtualAddress, 16);
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
      </div>
    </div>
  );
}

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
