import { useState } from 'react';
import Header from './components/Header';
import Settings from './components/Settings';
import Simulation from './components/Simulation';
import About from './components/About';

function App() {
  const [page, setPage] = useState('home');
  const [settings, setSettings] = useState({
    algorithm: 'FIFO',
    tlbSize: 4,
    pageTableSize: 16,
  });

  return (
    <div className="App min-h-screen bg-gradient-to-r from-indigo-600 to-blue-400 text-white font-sans">
      <Header />
      <div className="container mx-auto p-6">
        {page === 'home' && (
          <div className="text-center mt-5 p-10 rounded-lg shadow-lg bg-white bg-opacity-30 backdrop-blur-lg">
            <h1 className="text-4xl font-bold mb-4">Welcome to Virtual Memory Simulation</h1>
            <p className="text-lg mb-6">This simulator demonstrates the working of virtual memory and TLB.</p>
            <div className="mt-5 space-x-4">
              <button
                onClick={() => setPage('simulation')}
                className="btn bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-300"
              >
                Start Simulation
              </button>
              <button
                onClick={() => setPage('settings')}
                className="btn bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-300"
              >
                Settings
              </button>
              <button
                onClick={() => setPage('about')}
                className="btn bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-lg shadow-md transition duration-300"
              >
                About
              </button>
            </div>
          </div>
        )}
        {page === 'settings' && <Settings setPage={setPage} setSettings={setSettings} />}
        {page === 'simulation' && <Simulation setPage={setPage} settings={settings} />}
        {page === 'about' && <About setPage={setPage} />}
      </div>
    </div>
  );
}

export default App;
