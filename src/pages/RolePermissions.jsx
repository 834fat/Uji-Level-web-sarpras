import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaPlus, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import Sidebar from '../components/Sidebar'; // Import Sidebar component
import Swal from 'sweetalert2'; // Import SweetAlert
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const DataRolePermissions = () => {
    // Data role permissions
    const [rolePermissions, setRolePermissions] = useState([
        { id: 1, permissions: 'Manage Users', role: 'Admin', description: 'Can manage users' },
        { id: 2, permissions: 'View Reports', role: 'User', description: 'Can view reports' },
        // Data role permissions lainnya...
    ]);

    const [searchKeyword, setSearchKeyword] = useState(''); // State untuk menyimpan kata kunci pencarian
    const navigate = useNavigate(); // Menggunakan useNavigate

    // Fungsi untuk menavigasi ke halaman EditRolePermission.jsx
    const handleEdit = (id) => {
        navigate(`/EditRolePermission/${id}`); // Melakukan navigasi ke halaman EditRolePermission.jsx dengan menyertakan ID role permission
    };

    // Fungsi untuk menghapus role permission dengan konfirmasi
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: 'Data role permission akan dihapus secara permanen!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                // Hapus role permission jika pengguna mengonfirmasi
                setRolePermissions(prevRolePermissions => prevRolePermissions.filter(item => item.id !== id));
                Swal.fire(
                    'Dihapus!',
                    'Data role permission telah dihapus.',
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

    // Membuat array baru dengan item role permissions yang sesuai dengan kata kunci pencarian
    const filteredRolePermissions = rolePermissions.filter(rolePermission =>
        rolePermission.permissions.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        rolePermission.role.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        rolePermission.description.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4 relative">
                    <h1 className="text-xl font-semibold mb-4">Data Role Permissions</h1>
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
                    <button onClick={() => navigate('/TambahRolePermissions')} className="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4 flex items-center">
                        <FaPlus className="mr-2" />
                        Tambah Role Permission
                    </button>
                    <table className="w-full border-collapse border rounded-lg shadow-lg">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 text-center">No</th>
                                <th className="border px-4 py-2 text-center">Permissions</th>
                                <th className="border px-4 py-2 text-center">Role</th>
                                <th className="border px-4 py-2 text-center">Description</th>
                                <th className="border px-4 py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredRolePermissions.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border px-4 py-2 text-center">{item.permissions}</td>
                                    <td className="border px-4 py-2 text-center">{item.role}</td>
                                    <td className="border px-4 py-2 text-center">{item.description}</td>
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

export default DataRolePermissions;
