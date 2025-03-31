import { useState } from 'react';

function Settings({ setPage, setSettings }) {
  const [algorithm, setAlgorithm] = useState('FIFO');
  const [tlbSize, setTlbSize] = useState(4); // ค่าเริ่มต้นของ TLB Cache Size
  const [pageTableSize, setPageTableSize] = useState(16); // ค่าเริ่มต้นของ Page Table Size

  const handleApply = () => {
    // ส่งค่าการตั้งค่ากลับไปยัง Simulation
    setSettings({ algorithm, tlbSize, pageTableSize });
    setPage('simulation'); // ไปยังหน้า Simulation
  };

  return (
    <div className="mt-10 p-6 bg-white bg-opacity-90 rounded-lg shadow-xl mx-auto max-w-lg text-black">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Settings</h2>

      {/* ฟอร์มการเลือก Page Replacement Algorithm */}
      <div className="mt-5">
        <label className="block text-lg font-medium text-gray-700">Page Replacement Algorithm</label>
        <select
          className="p-3 mt-2 w-full bg-indigo-50 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={algorithm}
          onChange={(e) => setAlgorithm(e.target.value)}
        >
          <option value="FIFO">FIFO</option>
          <option value="LRU">LRU</option>
          <option value="Optimal">Optimal</option>
        </select>
      </div>

      {/* ฟอร์มการกรอกขนาดของ TLB Cache */}
      <div className="mt-5">
        <label className="block text-lg font-medium text-gray-700">TLB Cache Size</label>
        <input
          className="p-3 mt-2 w-full bg-indigo-50 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="number"
          value={tlbSize}
          onChange={(e) => setTlbSize(Number(e.target.value))}
          min="1"  // ตั้งค่าขั้นต่ำสำหรับ TLB cache size
        />
      </div>

      {/* ฟอร์มการกรอกขนาดของ Page Table */}
      <div className="mt-5">
        <label className="block text-lg font-medium text-gray-700">Page Table Size</label>
        <input
          className="p-3 mt-2 w-full bg-indigo-50 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          type="number"
          value={pageTableSize}
          onChange={(e) => setPageTableSize(Number(e.target.value))}
          min="1"  // ตั้งค่าขั้นต่ำสำหรับ Page Table size
        />
      </div>

      {/* ปุ่ม Apply Settings */}
      <div className="mt-6 text-center">
        <button
          onClick={handleApply}
          className="py-3 px-6 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
        >
          Apply Settings
        </button>
      </div>
    </div>
  );
}

export default Settings;
