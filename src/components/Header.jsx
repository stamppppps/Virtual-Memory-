function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Virtual Memory Simulation</h1>
        <div className="flex space-x-2">
          <span className="animate-pulse bg-white bg-opacity-20 rounded-full w-3 h-3"></span>
          <span className="animate-pulse bg-white bg-opacity-20 rounded-full w-3 h-3"></span>
          <span className="animate-pulse bg-white bg-opacity-20 rounded-full w-3 h-3"></span>
        </div>
      </div>
    </header>
  );
}

export default Header;