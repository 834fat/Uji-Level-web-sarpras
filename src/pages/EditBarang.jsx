import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const EditBarang = ({ onSubmit, initialData }) => {
    const [formData, setFormData] = useState(initialData);

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
    };

    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <div className="bg-[#BFCFE7] rounded-lg shadow-md p-4 relative ml-[300px]">
                    <h1 className="text-xl font-semibold mb-4">Edit Data Barang</h1>
                    <h1 className="text-m mb-4">SMK NEGERI 1 CIOMAS - KAB.BOGOR JAWA BARAT</h1>
                </div>
                <div className="flex justify-center items-center h-screen pb-[150px]">
                    <div className="bg-blue-100 rounded-lg shadow-md p-6 ml-[300px]">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="namaBarang" className="block text-sm font-medium text-gray-700">Nama Barang</label>
                                <input type="text" id="namaBarang" name="namaBarang" value={formData.namaBarang} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="jumlahBarang" className="block text-sm font-medium text-gray-700">Jumlah Barang</label>
                                <input type="number" id="jumlahBarang" name="jumlahBarang" value={formData.jumlahBarang} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="ruang" className="block text-sm font-medium text-gray-700">Ruang</label>
                                <input type="text" id="ruang" name="ruang" value={formData.ruang} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="foto" className="block text-sm font-medium text-gray-700">Foto</label>
                                <input type="file" id="foto" name="foto" accept="image/*" onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                            </div>
                            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditBarang;
