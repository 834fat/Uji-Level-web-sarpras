import React from 'react';

function Readme() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <p className="text-lg font-medium text-gray-800">
          Wajib dibaca!!!
        </p>
        <p className="text-xl font-bold text-gray-900">
          Web ini hanya bisa di akses seizin admin
        </p>
        <p className="text-lg font-medium text-gray-800">
          Admin hanya memberi izin perwakilan kelas maksimal 3 orang / akun.
        </p>
        <p className="text-lg font-medium text-gray-800">
          Kontak admin: <span className="text-blue-600">+62 1234-5678</span>
        </p>
      </div>
      <div className="mt-6">
        <button className="px-6 py-2 text-lg font-medium text-white bg-blue-600 rounded shadow hover:bg-blue-700">
          Kembali kehalaman login
        </button>
      </div>
    </div>
  );
}

export default Readme;