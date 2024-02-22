import React from "react";
import SidebarSiswa from "../../components/SidebarSiswa";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';

export default function UserDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Logout',
      text: 'Apakah Anda yakin ingin logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Ya, logout',
      cancelButtonText: 'Batal'
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
        Swal.fire(
          'Logout Berhasil!',
          'Anda telah berhasil logout.',
          'success'
        );
      }
    });
  };

  return (
    <div className="flex bg-white">
      <SidebarSiswa />
      <div className="flex-1 p-8">
        <div className="text-2xl font-bold mb-5 bg-gray-300 border-b-2 pb-[50px] mr-[-17px] ml-[-17px] text-black p-2 rounded" style={{ position: 'relative', top: '-20px' }}>
          <center>SELAMAT DATANG DI SARPRAS SKANIC</center>
          <div className="text-left">
            <h1 className="text-sm" style={{ textAlign: 'center', position: 'absolute', top: '69%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              Aplikasi sarana & prasarana sekolah dibuat untuk mempermudah peminjaman barang/alat disekolah
            </h1>
          </div>
        </div>
        <div className="text-center mb-4 bg-gray-300 pb-2 mx-auto  rounded-md" style={{ maxWidth: '200px' }}>
          <h2 className="text-lg font-semibold text-center">Galeri Sarpras</h2>
        </div>
        <button onClick={handleLogout} className="bg-gray-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center absolute top-[50px] right-4 mr-[20px]">
          <FaSignOutAlt className="mr-2" />
          <span>Logout</span>
        </button>
        <div className="flex flex-col items-center justify-center">
          <img
            src="./src/assets/images/sarpras2.png"
            alt="Sarpras"
          />
        </div>
      </div>
    </div>
  );
}
