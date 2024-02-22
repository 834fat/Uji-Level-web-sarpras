import React from 'react';
import { FaBoxOpen } from "react-icons/fa";

const BoxBarang = () => {
  return (
    <div className="p-4 bg-[#B7E5B4] shadow-md rounded-lg" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px" }}>
      <div className="flex items-center mb-2">
        <FaBoxOpen className="text-xl mr-2" />
        <h2 className="text-lg font-semibold">30</h2>
      </div>
      <p className="text-sm text-gray-500">Barang</p>
    </div>
  );
};

export default BoxBarang;
