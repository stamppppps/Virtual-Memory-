
function About({ setPage }) {
  return (
    <div className="mt-10 p-10 bg-gray-900 bg-opacity-70 rounded-xl shadow-2xl backdrop-blur-sm border border-gray-700 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
          About Virtual Memory
        </h2>
        <p className="text-xl text-blue-100 mt-4">Understanding modern memory management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <FeatureCard 
          title="Virtual Memory"
          description="Allows systems to use more memory than physically available by utilizing disk space"
          icon="🧠"
        />
        <FeatureCard 
          title="TLB Cache"
          description="Translation Lookaside Buffer speeds up virtual-to-physical address translation"
          icon="⚡"
        />
      </div>

      <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-xl font-semibold text-blue-200 mb-4">How This Simulator Works</h3>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Enter a virtual address in hexadecimal format</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>The system checks the TLB (fast cache) first</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>If TLB miss, the page table is consulted</span>
          </li>
          <li className="flex items-start">
            <svg className="w-5 h-5 text-blue-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Page faults occur if the page isn't in physical memory</span>
          </li>
        </ul>
      </div>

      <button 
        onClick={() => setPage('home')} 
        className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold rounded-lg transition duration-300 flex items-center justify-center"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
        Return to Home
      </button>
    </div>
  );
}

const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition duration-300">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-blue-200 mb-2">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);
  
  export default About;
  