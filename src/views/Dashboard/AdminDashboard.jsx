import React, { useState, useEffect } from "react";
import Api from "../../Api";
import Cookies from "js-cookie";
import Sidebar from "../../components/Sidebar";
import BoxRuangan from "../../pages/BoxRuangan";
import BoxBarang from "../../pages/BoxBarang";
import BoxPeminjaman from "../../pages/BoxPeminjaman";
import Swal from 'sweetalert2'; // Import SweetAlert
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt } from 'react-icons/fa';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [countUsers, setCountUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = Cookies.get("token");

  const fetchData = async () => {
    try {
      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await Api.get("/api/admin/dashboard");
      setCountUsers(response.data.data.users);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
        Cookies.remove("token");
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
    <div className="flex bg-[#F5F5F5]">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <nav className="bg-gray-300 p-4">
          <div className="flex justify-between items-center">
            <h1 className="text-black font-bold text-xl">Home</h1>
            <button onClick={handleLogout} className="bg-gray-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center">
              <FaSignOutAlt className="mr-2" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
        <br></br>
        <div className="p-8 ml-8 mr-8">
        <div className="text-2xl mb-5 bg-gray-300 border-b-2 pb-3 text-black rounded" style={{ position: 'relative', top: '-20px' }}>
          <center><h2 className="text-xll font-bold">SELAMAT DATANG DI SARPRAS SKANIC</h2></center>
          <h5 className="text-xs text-center">
            Aplikasi sarana & prasarana sekolah dibuat untuk mempermudah peminjaman barang/alat disekolah
          </h5>
        </div>  
          <div className="grid grid-cols-3 gap-4 mt-8">
            <BoxRuangan />
            <BoxBarang />
            <BoxPeminjaman />
          </div>
        </div>
      </div>
    </div>
  );
}
