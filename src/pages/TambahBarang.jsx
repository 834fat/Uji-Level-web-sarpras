import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaSignOutAlt, FaPlane } from 'react-icons/fa'; // Import icons
import Swal from 'sweetalert2'; // Import SweetAlert
import axios from 'axios';

const AddBarangForm = () => {
    const [formData, setFormData] = useState({
        nama_barang: '',
        jumlah: '',
        foto: null // Menambah state untuk menyimpan file gambar
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle perubahan pada input gambar
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            foto: file
        }));
    };

    // Fungsi untuk submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('nama_barang', formData.nama_barang);
            formDataToSend.append('jumlah', formData.jumlah);
            formDataToSend.append('foto', formData.foto); // Menambahkan file gambar ke FormData

            await axios.post("http://127.0.0.1:8000/DataBarang", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data' // Set header content type menjadi multipart/form-data
                }
            });
            console.log("Data barang berhasil ditambahkan");
            // Mengosongkan form setelah berhasil submit
            setFormData({
                nama_barang: '',
                jumlah: '',
                foto: null
            });
            // Menampilkan notifikasi success
            Swal.fire({
                title: 'Success',
                text: 'Data barang berhasil ditambahkan',
                icon: 'success',
                confirmButtonColor: '#3085d6',
            });
        } catch (error) {
            console.error("Error adding barang:", error);
            // Menampilkan notifikasi error
            Swal.fire({
                title: 'Error',
                text: 'Terjadi kesalahan saat menambahkan data barang',
                icon: 'error',
                confirmButtonColor: '#3085d6',
            });
        }
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
                // Kode untuk logout
                console.log("Logout berhasil!");
            }
        });
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4 relative">
                    <h1 className="text-xl font-semibold mb-4">Tambah Data Barang</h1>
                    <div className="absolute top-0 right-0 mt-[25px] mr-[60px]"> {/* Mengubah posisi tombol logout */}
                        <button onClick={handleLogout} className="bg-gray-500 hover:bg-red-600 text-white py-2 px-4 rounded-md flex items-center">
                            <span>Logout</span>
                            <FaSignOutAlt className="ml-2" />
                        </button>
                    </div>
                </div>
                <div className="flex justify-center items-center h-screen pb-[150px]">
                    <div className="bg-[#F5F5F5] rounded-lg shadow-md p-6">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="nama_barang" className="block text-sm font-medium text-gray-700">Nama Barang</label>
                                <input type="text" id="nama_barang" name="nama_barang" value={formData.nama_barang} onChange={handleChange} className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="jumlah" className="block text-sm font-medium text-gray-700">Jumlah Barang</label>
                                <input type="number" id="jumlah" name="jumlah" value={formData.jumlah} onChange={handleChange} className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="foto" className="block text-sm font-medium text-gray-700">Foto Barang</label>
                                <input type="file" id="foto" name="foto" onChange={handleFileChange} accept="image/*" className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <button type="submit" className="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center">
                                <span>Submit</span>
                                <FaPlane className="ml-2" /> {/* Icon pesawat */}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBarangForm;
