import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash, FaPlus, FaSignOutAlt } from 'react-icons/fa';
import Sidebar from '../components/Sidebar';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const DataUser = () => {
    const [users, setUsers] = useState([
        { id: 1, username: 'john_doe', userRole: 'Admin' },
        { id: 2, username: 'jane_doe', userRole: 'User' },
        // Data pengguna lainnya...
    ]);
    const [searchKeyword, setSearchKeyword] = useState('');
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/EditUser/${id}`);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Apakah Anda yakin?',
            text: 'Data user akan dihapus secara permanen!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, hapus!',
            cancelButtonText: 'Batal'
        }).then((result) => {
            if (result.isConfirmed) {
                setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
                Swal.fire(
                    'Dihapus!',
                    'Data user telah dihapus.',
                    'success'
                );
            }
        });
    };

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
                navigate('/');
            }
        });
    };

    const handleChangeSearch = (e) => {
        setSearchKeyword(e.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.username.toLowerCase().includes(searchKeyword.toLowerCase()) ||
        user.userRole.toLowerCase().includes(searchKeyword.toLowerCase())
    );

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <div className="bg-[#F5F5F5] rounded-lg shadow-md p-4 relative">
                    <h1 className="text-xl font-semibold mb-4">Data User</h1>
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
                    <button onClick={() => navigate('/TambahUser')} className="bg-green-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md mb-4 flex items-center">
                        <FaPlus className="mr-2" />
                        Tambah User
                    </button>
                    <table className="w-full border-collapse border rounded-lg shadow-lg mr-[200px]">
                        <thead>
                            <tr>
                                <th className="border px-4 py-2 text-black text-center">No</th>
                                <th className="border px-4 py-2 text-black text-center">Username</th>
                                <th className="border px-4 py-2 text-black text-center">User Role</th>
                                <th className="border px-4 py-2 text-black text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user, index) => (
                                <tr key={user.id}>
                                    <td className="border px-4 py-2 text-center">{index + 1}</td>
                                    <td className="border px-4 py-2 text-center">{user.username}</td>
                                    <td className="border px-4 py-2 text-center">{user.userRole}</td>
                                    <td className="border px-4 py-2 flex justify-center">
                                        <button
                                            onClick={() => handleEdit(user.id)}
                                            className="mr-2 bg-transparent hover:bg-blue-800 text-blue-500 hover:text-white py-1 px-2 rounded-md btn-action w-[100px] border border-blue-500"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(user.id)}
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

export default DataUser;
