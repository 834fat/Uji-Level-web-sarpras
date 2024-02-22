import React from 'react';
import { MdPhoneIphone } from "react-icons/md";

const Help = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-black p-8 rounded-lg shadow-xl">
        <p className="text-lg text-white font-semibold mb-4">Saya Tidak Bisa Login</p>
        <hr></hr>
        <p className="mb-4 text-white">Jika mengalami masalah saat login ke akun Sarpras,</p>
        <p className="mb-4 text-white">Anda bisa menghubungi kontak admin dengan nomer di bawah ini</p>
        <div className="flex items-center mb-4 text-white">
          <MdPhoneIphone className="mr-2" size={24} /> {/* Menampilkan icon dengan margin kanan */}
          <p>Kontak Admin: +62 815-8490-3592 (Pak Kurnadi)</p>
        </div>
        <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => window.history.back()}>Kembali ke Halaman Login</button>
      </div>
    </div>
  );
};

export default Help;
