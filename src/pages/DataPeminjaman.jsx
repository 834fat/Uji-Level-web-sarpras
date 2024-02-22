import React, { useState } from 'react';
import { FaSearch, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import Sidebar from '../components/Sidebar'; // Import Sidebar component
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2'; // Import SweetAlert

const DataPeminjaman = () => {
    // Data peminjaman
    const [peminjaman] = useState([
        { id: 1, tglPeminjaman: '2024-02-01', tglPengembalian: '2024-02-10', namaPeminjam: 'John Doe', namaBarang: 'Laptop', keterangan: 'Peminjaman untuk keperluan rapat' },
        { id: 2, tglPeminjaman: '2024-01-15', tglPengembalian: '2024-01-20', namaPeminjam: 'Jane Doe', namaBarang: 'Proyektor', keterangan: 'Peminjaman untuk presentasi' },
        // Data peminjaman lainnya...
    ]);
    const [searchKeyword, setSearchKeyword] = useState(''); // State untuk kata kunci pencarian
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

    // Membuat array baru dengan item peminjaman yang sesuai dengan kata kunci pencarian
    const filteredPeminjaman = peminjaman.filter(item =>
        item.namaPeminjam.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.namaBarang.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.keterangan.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4 relative">
                    <h1 className="text-xl font-semibold mb-4">Data Peminjaman</h1>
                    <div className="flex items-center">
                        <div className="relative flex items-center">
                            <div className="bg-white flex items-center rounded-md shadow-md px-3 ml-[550px] mt-[-30px] border border-black">
                                <FaSearch className="text-black-400" />
                                <input type="text" placeholder="Search..." className="outline-none px-2 py-1 w-64" onChange={handleChangeSearch} />
                            </div>
                        </div>
                        <div className="ml-auto mt-[-30px]">
                            <button onClick={handleLogout} className="bg-gray-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center">
                                <span>Logout</span>
                                <FaSignOutAlt className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8">
                    <table className="w-full border-collapse border rounded-lg shadow-lg mr-[200px]">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 text-black text-center">No</th>
                                <th className="border px-4 py-2 text-black text-center">Tgl Peminjaman</th>
                                <th className="border px-4 py-2 text-black text-center">Tgl Pengembalian</th>
                                <th className="border px-4 py-2 text-black text-center">Nama Peminjam</th>
                                <th className="border px-4 py-2 text-black text-center">Nama Barang</th>
                                <th className="border px-4 py-2 text-black text-center">Keterangan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPeminjaman.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border px-4 py-2 text-center">{item.tglPeminjaman}</td>
                                    <td className="border px-4 py-2 text-center">{item.tglPengembalian}</td>
                                    <td className="border px-4 py-2 text-center">{item.namaPeminjam}</td>
                                    <td className="border px-4 py-2 text-center">{item.namaBarang}</td>
                                    <td className="border px-4 py-2 text-center">{item.keterangan}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DataPeminjaman;
