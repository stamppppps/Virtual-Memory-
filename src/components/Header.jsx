function Header() {
  return (
<<<<<<< HEAD
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Virtual Memory Simulation</h1>
        <div className="flex space-x-2">
          <span className="animate-pulse bg-white bg-opacity-20 rounded-full w-3 h-3"></span>
          <span className="animate-pulse bg-white bg-opacity-20 rounded-full w-3 h-3"></span>
          <span className="animate-pulse bg-white bg-opacity-20 rounded-full w-3 h-3"></span>
=======
    <header className="bg-gradient-to-r from-indigo-800 to-blue-600 text-white p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h1 className="text-2xl font-bold tracking-tight">Virtual Memory Simulator</h1>
        </div>
        <div className="hidden md:flex space-x-1">
          <span className="px-3 py-1 bg-blue-700 rounded-full text-xs font-semibold">Computer Science</span>
          <span className="px-3 py-1 bg-indigo-700 rounded-full text-xs font-semibold">OS Concepts</span>
>>>>>>> fab4caccac20c57efa242fe9eb00c54265deb449
        </div>
      </div>
    </header>
  );
}

export default Header;