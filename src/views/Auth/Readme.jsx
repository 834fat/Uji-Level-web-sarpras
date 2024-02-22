import React from 'react';
import { MdPhoneIphone } from "react-icons/md";

const Readme = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-black p-8 rounded-lg shadow-md">
        <p className="text-lg text-white font-semibold my-4">Wajib Baca!!!</p>
        <hr></hr>
        <p className="mb-4 text-white">Web ini hanya bisa di akses seizin admin dan</p>
        <p className="mb-4 text-white">admin hanya memberi izin perwakilan kelas maksimal 3 orang/akun</p>
        <div className="flex items-center mb-4 text-white">
          <MdPhoneIphone className="mr-2" size={24} /> {/* Menampilkan icon dengan margin kanan */}
          <p>Kontak Admin: +62 815-8490-3592 (Pak Kurnadi)</p>
        </div>
        <button className="bg-white hover:bg-blue-700 text-black py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => window.history.back()}>Kembali ke Halaman Login</button>
      </div>
    </div>
  );
};

export default Readme;
