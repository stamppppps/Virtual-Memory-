import { useState } from 'react';

function Simulation({ setPage, settings }) {
  const [virtualAddress, setVirtualAddress] = useState('');
  const [translationResults, setTranslationResults] = useState(null);

  // ตัวอย่างข้อมูลสำหรับ TLB และ Page Table
  let tlbCache = [];
  let pageTable = [];

  // ฟังก์ชันในการแปลงที่อยู่เสมือน (Virtual Address)
  const handleTranslate = () => {
    // แปลงที่อยู่เสมือน (Hex) เป็นตัวเลข
    const hexAddress = parseInt(virtualAddress, 16);

    // การตรวจสอบ TLB Hit/Miss
    const tlbHit = tlbCache.includes(hexAddress);
    const tlbResult = tlbHit ? 'Hit' : 'Miss';
    
    // การตรวจสอบ Page Fault
    const pageFault = pageTable.includes(hexAddress) ? 'No Fault' : 'Fault';
    
    // ถ้า TLB Miss จะเพิ่มค่าใน TLB (แค่ตัวอย่าง)
    if (!tlbHit && tlbCache.length < settings.tlbSize) {
      tlbCache.push(hexAddress); // จำลองการเพิ่มเข้า TLB
    }

    // ถ้า Page Fault จะเพิ่มค่าใน Page Table (แค่ตัวอย่าง)
    if (pageFault === 'Fault' && pageTable.length < settings.pageTableSize) {
      pageTable.push(hexAddress); // จำลองการเพิ่มหน้าใน Page Table
    }

    // คำนวณที่อยู่ทางกายภาพ (Physical Address) จากที่อยู่เสมือน
    const physicalAddress = hexAddress + 1000; // การจำลองการแปลงที่อยู่

    // เก็บผลลัพธ์ทั้งหมด
    setTranslationResults({
      tlbTable: `0x${hexAddress.toString(16).toUpperCase()} - ${tlbResult}`,
      pageTable: `0x${hexAddress.toString(16).toUpperCase()} - ${pageFault}`,
      memoryAccessFlow: `Physical Address: ${physicalAddress}`,
      tlbHitMiss: tlbResult,
      pageFaultResult: pageFault,
    });
  };

  return (
    <div className="mt-10 p-6 bg-white bg-opacity-90 rounded-lg shadow-xl mx-auto max-w-3xl">
      <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">Simulation Mode</h2>

      {/* ฟอร์มการป้อนที่อยู่เสมือน */}
      <div className="mt-5">
        <label className="block text-lg font-medium text-gray-700">Enter Virtual Address (Hex)</label>
        <input
          className="p-3 mt-2 w-full bg-indigo-50 border border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 text-black" // เพิ่ม text-black ที่นี่
          type="text"
          value={virtualAddress}
          onChange={(e) => setVirtualAddress(e.target.value)}
        />
      </div>

      {/* ปุ่ม Translate */}
      <div className="mt-5 text-center">
        <button
          onClick={handleTranslate}
          className="py-3 px-6 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
        >
          Translate
        </button>
      </div>

      {/* แสดงผลการแปลที่อยู่ */}
      {translationResults && (
        <div className="mt-8 space-y-6 text-black">
          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600">TLB Table</h3>
            <p>{translationResults.tlbTable}</p>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600">Page Table</h3>
            <p>{translationResults.pageTable}</p>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600">Memory Access Flow</h3>
            <p>{translationResults.memoryAccessFlow}</p>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-indigo-600">Results</h3>
            <p>TLB Hit/Miss: {translationResults.tlbHitMiss}</p>
            <p>Page Fault: {translationResults.pageFaultResult}</p>
          </div>
        </div>
      )}

      {/* ปุ่มย้อนกลับ และไปหน้าหลัก */}
      <div className="mt-8 flex justify-between">
        <button
          onClick={() => setPage('settings')}
          className="py-2 px-4 bg-gray-400 text-white rounded-lg shadow-md hover:bg-gray-500 transition duration-300"
        >
          Go to Settings
        </button>

        <button
          onClick={() => setPage('home')}
          className="py-2 px-4 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
}

export default Simulation;
