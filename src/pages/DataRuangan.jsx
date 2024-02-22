import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaPlus, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import Sidebar from '../components/Sidebar'; // Import Sidebar component
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2'; // Import SweetAlert
import Cookies from 'js-cookie'; // Import Cookies from js-cookie
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

const DataRuangan = () => {
    // Data ruangan
    const [ruangan, setRuangan] = useState([
        { id: 1, nama: 'Ruangan A', jumlah: 5, lokasi: 'Lantai 1' },
        { id: 2, nama: 'Ruangan B', jumlah: 10, lokasi: 'Lantai 2' },
        // Data ruangan lainnya...
    ]);
    const [searchKeyword, setSearchKeyword] = useState(''); // State untuk kata kunci pencarian
    const navigate = useNavigate(); // Menggunakan useNavigate

    // Fungsi untuk menavigasi ke halaman EditRuangan.jsx
    const handleEdit = (id) => {
        navigate(`/EditRuangan`); // Melakukan navigasi ke halaman EditRuangan.jsx dengan menyertakan ID ruangan
    };

    // Fungsi untuk menghapus ruangan dengan notifikasi konfirmasi
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: 'Data ruangan akan dihapus secara permanen!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                // Hapus ruangan jika pengguna mengonfirmasi
                setRuangan(prevState => prevState.filter(item => item.id !== id));
                Swal.fire(
                    'Dihapus!',
                    'Data ruangan telah dihapus.',
                    'success'
                );
            }
        });
    };

    // Fungsi untuk menavigasi ke halaman TambahRuangan.jsx
    const navigateToAddRuangan = () => {
        navigate('/TambahRuangan'); // Melakukan navigasi ke halaman TambahRuangan.jsx
    };

    // Fungsi untuk menangani perubahan pada input pencarian
    const handleChangeSearch = (e) => {
        setSearchKeyword(e.target.value);
    };

    // Fungsi untuk menangani logout
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
                // Logout jika pengguna mengonfirmasi
                Cookies.remove('token'); // Hapus token
                navigate('/'); // Arahkan ke halaman login
                // Tampilkan pesan toast berhasil logout
                toast.success('Logout Berhasil!', {
                    position: 'top-right',
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        });
    };

    // Membuat array baru dengan item ruangan yang sesuai dengan kata kunci pencarian
    const filteredRuangan = ruangan.filter(item =>
        item.nama.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.lokasi.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4 relative">
                    <h1 className="text-xl font-semibold mb-4">Data Ruangan</h1>
                    <div className="flex items-center">
                        <div className="relative flex items-center">
                            <div className="bg-white flex items-center rounded-md shadow-md px-3 ml-[550px] mt-[-30px] border border-black">
                                <FaSearch className="text-black-400" />
                                <input type="text" placeholder="Search..." className="outline-none px-2 py-1 w-64" value={searchKeyword} onChange={handleChangeSearch} />
                            </div>
                        </div>
                        <div className="ml-auto mt-[-30px]"> {/* Menambahkan margin top */}
                            <button onClick={handleLogout} className="bg-gray-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center">
                                <span>Logout</span>
                                <FaSignOutAlt className="ml-2" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mt-8"> {/* Menambahkan margin-top 8 */}
                    {/* Memindahkan tombol "Tambah Ruangan" ke atas tabel */}
                    <button onClick={navigateToAddRuangan} className="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4 flex items-center">
                        <FaPlus className="mr-2" />
                        Tambah Ruangan
                    </button>
                    <table className="w-full border-collapse border rounded-lg shadow-lg mr-[200px]">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 text-black text-center">No</th>
                                <th className="border px-4 py-2 text-black text-center">Nama Ruangan</th>
                                <th className="border px-4 py-2 text-black text-center">Jumlah</th>
                                <th className="border px-4 py-2 text-black text-center">Lokasi</th>
                                <th className="border px-4 py-2 text-black text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRuangan.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border px-4 py-2 text-center">{item.nama}</td>
                                    <td className="border px-4 py-2 text-center">{item.jumlah}</td>
                                    <td className="border px-4 py-2 text-center">{item.lokasi}</td>
                                    <td className="border px-4 py-2 flex justify-center">
                                        <button
                                            onClick={() => handleEdit(item.id)}
                                            className="mr-2 bg-transparent hover:bg-blue-800 text-blue-500 hover:text-white py-1 px-2 rounded-md btn-action w-[100px] border border-blue-500"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.id)}
                                            className="ml-2 bg-transparent hover:bg-red-800 text-red-500 hover:text-white py-1 px-2 rounded-md btn-action w-[100px] border border-red-500"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DataRuangan;
