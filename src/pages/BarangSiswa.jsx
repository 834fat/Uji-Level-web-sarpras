import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaPlus, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import SidebarSiswa from '../components/SidebarSiswa'; // Import Sidebar component
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Swal from 'sweetalert2'; // Import SweetAlert
import Cookies from 'js-cookie'; // Import Cookies from js-cookie
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for react-toastify

const BarangSiswa = () => {
    // Data barang
    const [barang, setBarang] = useState([
        { id: 1, nama: 'AC', merk: 'panasonic', jumlah: '10', sumber: 'Ruang Guru' },
        { id: 2, nama: 'Komputer', merk: 'LG', jumlah: '5', sumber: 'Lab' },
        // Data barang lainnya...
    ]);
    const [searchKeyword, setSearchKeyword] = useState(''); // State untuk menyimpan kata kunci pencarian
    const navigate = useNavigate(); // Menggunakan useNavigate

    // Fungsi untuk menavigasi ke halaman EditBarang.jsx
    const handleEdit = (id) => {
        navigate(`/EditBarang/${id}`); // Melakukan navigasi ke halaman EditBarang.jsx dengan menyertakan ID barang
    };

    // Fungsi untuk menghapus barang dengan notifikasi konfirmasi
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: 'Data barang akan dihapus secara permanen!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                // Hapus barang jika pengguna mengonfirmasi
                setBarang(prevState => prevState.filter(item => item.id !== id));
                Swal.fire(
                    'Dihapus!',
                    'Data barang telah dihapus.',
                    'success'
                );
            }
        });
    };

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

    // Fungsi untuk menangani perubahan pada input pencarian
    const handleChangeSearch = (e) => {
        setSearchKeyword(e.target.value);
    };

    // Membuat array baru dengan item barang yang sesuai dengan kata kunci pencarian
    const filteredBarang = barang.filter(item =>
        item.nama.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.merk.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.jumlah.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        item.sumber.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    // Fungsi untuk menavigasi ke halaman PinjamBarang.jsx
    const navigateToPinjamBarang = () => {
        navigate('/PinjamBarang'); // Melakukan navigasi ke halaman PinjamBarang.jsx
    };

    // Fungsi untuk menambahkan pinjaman
    const handlePinjam = (id) => {
        // Tambahkan logika untuk menangani pinjaman barang di sini
        console.log(`Barang dengan ID ${id} telah dipinjam.`);
        // Tampilkan pesan toast berhasil meminjam
        toast.success('Barang telah berhasil dipinjam!', {
            position: 'top-right',
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="flex">
            <SidebarSiswa />
            <div className="flex-1 p-4">
                <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4 relative">
                    <h1 className="text-xl font-semibold mb-4">Barang dan alat yang tersedia</h1>
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
                    <button onClick={navigateToPinjamBarang} className="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4 flex items-center">
                        <FaPlus className="mr-2" />
                        Pinjam Barang
                    </button>
                    <table className="w-full border-collapse border rounded-lg shadow-lg mr-[200px]">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 text-black text-center">No</th>
                                <th className="border px-4 py-2 text-black text-center">Nama Barang</th>
                                <th className="border px-4 py-2 text-black text-center">Merk</th>
                                <th className="border px-4 py-2 text-black text-center">Jumlah</th>
                                <th className="border px-4 py-2 text-black text-center">Sumber</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredBarang.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border px-4 py-2 text-center">{item.nama}</td>
                                    <td className="border px-4 py-2 text-center">{item.merk}</td>
                                    <td className="border px-4 py-2 text-center">{item.jumlah}</td>
                                    <td className="border px-4 py-2 text-center">{item.sumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BarangSiswa;
