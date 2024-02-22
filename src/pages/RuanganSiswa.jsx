import React, { useState } from 'react';
import { FaSearch, FaSignOutAlt, FaPlus } from 'react-icons/fa'; // Import icons
import SidebarSiswa from '../components/SidebarSiswa'; // Import Sidebar component
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2'; // Import SweetAlert

const RuanganSiswa = () => {
    // Data ruangan
    const [ruangan, setRuangan] = useState([
        { id: 1, no: 1, nama: 'Ruang Guru', foto: 'url_foto_ruangan_1' },
        { id: 2, no: 2, nama: 'Lab Komputer', foto: 'url_foto_ruangan_2' },
        // Data ruangan lainnya...
    ]);
    const [searchKeyword, setSearchKeyword] = useState(''); // State untuk menyimpan kata kunci pencarian
    const navigate = useNavigate(); // Menggunakan useNavigate

    // Fungsi untuk logout dengan notifikasi SweetAlert
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
                // Lakukan logout, misalnya membersihkan sesi
                // Contoh: localStorage.removeItem('token'); // Hapus token dari local storage
                navigate('/'); // Redirect ke halaman login setelah logout
            }
        });
    };

    // Fungsi untuk menangani perubahan pada input pencarian
    const handleChangeSearch = (e) => {
        setSearchKeyword(e.target.value);
    };

    // Membuat array baru dengan item ruangan yang sesuai dengan kata kunci pencarian
    const filteredRuangan = ruangan.filter(item =>
        item.nama.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    // Fungsi untuk menavigasi ke halaman PinjamRuangan.jsx
    const navigateToPinjamRuangan = () => {
        navigate('/PinjamRuangan'); // Melakukan navigasi ke halaman PinjamRuangan.jsx
    };

    return (
        <div className="flex">
            <SidebarSiswa />
            <div className="flex-1 p-4">
                <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4 relative">
                    <h1 className="text-xl font-semibold mb-4">Ruangan yang tersedia</h1>
                    <div className="flex items-center">
                        <div className="relative flex items-center">
                            <div className="bg-white flex items-center rounded-md shadow-md px-3 ml-[550px] mt-[-30px] border border-black">
                                <FaSearch className="text-black-400" />
                                <input type="text" name="katakunci" placeholder="Search..." className="outline-none px-2 py-1 w-64" onChange={handleChangeSearch} />
                            </div>
                        </div>
                        <div className="ml-auto mt-[-30px]"> {/* Menambahkan margin top */}
                            {/* Tombol logout */}
                            <button onClick={handleLogout} className="bg-gray-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center">
                                <span>Logout</span>
                                <FaSignOutAlt className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8"> {/* Menambahkan margin-top 8 */}
                    {/* Tombol "Pinjam Ruangan" */}
                    <button onClick={navigateToPinjamRuangan} className="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4 flex items-center">
                        <FaPlus className="mr-2" />
                        Pinjam Ruangan
                    </button>
                    <table className="w-full border-collapse border rounded-lg shadow-lg mr-[200px]">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 text-black text-center">No</th>
                                <th className="border px-4 py-2 text-black text-center">Ruangan</th>
                                <th className="border px-4 py-2 text-black text-center">Foto Ruangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRuangan.map(item => (
                                <tr key={item.id}>
                                    <td className="border px-4 py-2 text-center">{item.no}</td>
                                    <td className="border px-4 py-2 text-center">{item.nama}</td>
                                    <td className="border px-4 py-2 text-center">{item.foto}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RuanganSiswa;
