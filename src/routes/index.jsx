//import react
import React, { lazy, Suspense } from 'react';

//import react router dom
import { Routes, Route } from "react-router-dom";

//import loader component
const Loader = lazy(() => import('../components/Loader.jsx'));

//import view Login
const Login = lazy(() => import('../views/Auth/Login.jsx'));

//import view Barang
import DataBarang from "../pages/DataBarang.jsx"
//import view Ruangan
import DataRuangan from "../pages/DataRuangan.jsx"
//import view Peminjaman
import DataPeminjaman from "../pages/DataPeminjaman.jsx"
//import view User
import DataUser from "../pages/DataUser.jsx"
//import view RolePermissions
import RolePermissions from "../pages/RolePermissions.jsx"
//import view Roles
import Roles from "../pages/Roles.jsx"

//import view WajibBaca!
import Readme from "../views/Auth/Readme.jsx"
//import view Help?
import Help from "../views/Auth/Help.jsx"

//import view admin
import TambahBarang from "../pages/TambahBarang.jsx"
import TambahRuangan from "../pages/TambahRuangan.jsx"
import TambahUser from "../pages/TambahUser.jsx"
import TambahRolePermissions from "../pages/TambahRolePermissions.jsx"
import TambahRoles from "../pages/TambahRoles.jsx"
import EditBarang from "../pages/EditBarang.jsx"
//import view EditRuangan
// import EditRuangan from "../pages/EditRuangan.jsx"
//import view EditPeminjaman
// import EditPeminjaman from "../pages/EditPeminjaman.jsx"
//import view EditUser
// import EditUser from "../pages/EditUser.jsx"
// //import view EditRolesPermissions
// import EditRolePermissions from "../pages/EditRolePermissions.jsx"
// //import view EditRoles
// import EditRoles from "../pages/EditRoles.jsx"

//import View User
import BarangSiswa from '../pages/BarangSiswa';
import RuanganSiswa from '../pages/RuanganSiswa.jsx';
import LaporanSiswa from  '../pages/LaporanSiswa.jsx';
import PinjamBarang from '../pages/PinjamBarang.jsx';
import PinjamRuangan  from '../pages/PinjamRuangan.jsx';


/// Import your components
import AdminDashboard from "../views/Dashboard/AdminDashboard.jsx";
import UserDashboard from "../views/Dashboard/UserDashboard.jsx";

// Define your routes
export default function RoutesIndex() {
  return (
    <Routes>
      {/* route "/" */}
      <Route
        path="/"
        element={
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        }
      />
      <Route path="/UserDashboard" element={<UserDashboard />} />
       <Route path="/AdminDashboard" element={<AdminDashboard />} />
       <Route path="/DataBarang" element={<DataBarang />} />
       <Route path="/DataRuangan" element={<DataRuangan />} />
       <Route path="/DataPeminjaman" element={<DataPeminjaman />} />
       <Route path="/DataUser" element={<DataUser />} />
       <Route path="/RolePermissions" element={<RolePermissions />} />
       <Route path="/Roles" element={<Roles />} />
       <Route path="/Readme" element={<Readme />} />
       <Route path="/Help" element={<Help />} />
       <Route path='/TambahBarang' element={<TambahBarang/>} />
       <Route path='/TambahRuangan' element={<TambahRuangan/>} />
       <Route path='/TambahUser' element={<TambahUser/>} />
       <Route path='/TambahRolePermissions' element={<TambahRolePermissions/>} />
       <Route path='/TambahRoles' element={<TambahRoles/>} />
       <Route path='/EditBarang' element={<EditBarang/>} />
       {/* <Route path='/EditRuangan' element={<EditRuangan/>} /> */}
       {/* <Route path='/EditPeminjaman' element={<EditPeminjaman/>} /> */}
       {/* <Route path='/EditUser' element={<EditUser/>} /> */}
       {/* <Route path='/EditRolePermissions' element={<EditRolePermissions/>} /> */}
       {/* <Route path='/EditRoles' element={<EditRoles/>} /> */}
       <Route path='/BarangSiswa' element={<BarangSiswa/>} />
       <Route path='/RuanganSiswa' element={<RuanganSiswa/>} />
       <Route path='/LaporanSiswa' element={<LaporanSiswa/>} />
       <Route path='/PinjamBarang' element={<PinjamBarang/>} />
       <Route path='/PinjamRuangan' element={<PinjamRuangan/>} />
    </Routes>
  );
}