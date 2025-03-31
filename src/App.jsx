import { useState } from 'react';
import About from './components/About';
import Header from './components/Header';
import Settings from './components/Settings';
import Simulation from './components/Simulation';


function App() {
  const [page, setPage] = useState('home');
  const [settings, setSettings] = useState({
    algorithm: 'FIFO',
    tlbSize: 4,
    pageTableSize: 16,
  });

  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-800 text-white font-sans">
      <Header />
      <div className="container mx-auto p-6">
        {page === 'home' && (
          <div className="text-center mt-10 p-12 rounded-xl shadow-2xl bg-white bg-opacity-10 backdrop-blur-lg border border-white border-opacity-20 max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-indigo-200">
                Virtual Memory Simulation
              </h1>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                Experience the elegance of memory management with our interactive virtual memory and TLB simulator.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <Card 
                title="Start Simulation"
                description="Begin exploring virtual memory translation"
                icon="🚀"
                color="from-blue-500 to-blue-600"
                onClick={() => setPage('simulation')}
              />
              <Card 
                title="Configuration"
                description="Customize simulation parameters"
                icon="⚙️"
                color="from-purple-500 to-purple-600"
                onClick={() => setPage('settings')}
              />
              <Card 
                title="About"
                description="Learn about virtual memory concepts"
                icon="ℹ️"
                color="from-indigo-500 to-indigo-600"
                onClick={() => setPage('about')}
              />
            </div>
          </div>
        )}
        {page === 'simulation' && <Simulation setPage={setPage} settings={settings} />}
        {page === 'settings' && <Settings setPage={setPage} settings={settings} setSettings={setSettings} />}
        {page === 'about' && <About setPage={setPage} />}
      </div>
    </div>
  );
}

const Card = ({ title, description, icon, color, onClick }) => (
  <div 
    onClick={onClick}
    className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-lg cursor-pointer transform transition-all hover:scale-105 hover:shadow-xl`}
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-blue-100">{description}</p>
  </div>
);

export default App;
