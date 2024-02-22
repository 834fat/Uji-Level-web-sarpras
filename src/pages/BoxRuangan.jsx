import React from 'react';
import { FaDoorClosed } from "react-icons/fa";

const BoxRuangan = () => {
  return (
    <div className="p-4 bg-[#8EACCD] shadow-md rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>
      <div className="flex items-center mb-2">
        <FaDoorClosed className="text-xl mr-2" />
        <h2 className="text-lg font-semibold">11</h2>
      </div>
      <p className="text-sm text-gray-500">Ruangan</p>
    </div>
  );
};

export default BoxRuangan;
