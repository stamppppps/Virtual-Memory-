function About({ setPage }) {
    return (
      <div className="mt-10 p-8 bg-gray-100 rounded-lg shadow-md max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">About</h2>
        <p className="text-lg text-gray-700 mb-6">
          This simulator demonstrates how Virtual Memory and TLB (Translation Lookaside Buffer) work in computer systems.
        </p>
        <button 
          onClick={() => setPage('home')} 
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    );
  }
  
  export default About;
  