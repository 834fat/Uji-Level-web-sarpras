import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaSignOutAlt, FaPlane } from 'react-icons/fa'; // Import icons
import Swal from 'sweetalert2'; // Import SweetAlert

const AddRolesForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        roleId: '',
        roleName: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            roleId: '',
            roleName: ''
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
                    <h1 className="text-xl font-semibold mb-4">Tambah Role</h1>
                    <div className="flex items-center">
                        <div className="relative flex items-center">
                            <div className="bg-white flex items-center rounded-md shadow-md px-3">
                            </div>
                        </div>
                    </div>
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
                                <label htmlFor="roleId" className="block text-sm font-medium text-gray-700">Role ID</label>
                                <input type="text" id="roleId" name="roleId" value={formData.roleId} onChange={handleChange} className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="roleName" className="block text-sm font-medium text-gray-700">Role Name</label>
                                <input type="text" id="roleName" name="roleName" value={formData.roleName} onChange={handleChange} className="mt-1 block w-full rounded-md border border-black shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center">
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

export default AddRolesForm;
