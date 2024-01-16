//import react
import React, { lazy, Suspense } from 'react';

//import react router dom
import { Routes, Route } from "react-router-dom";

//import loader component
const Loader = lazy(() => import('../components/Loader.jsx'));

//import view Login
const Login = lazy(() => import('../views/Auth/Login.jsx'));

// //import view dashboard
// const SiswaDashboard = lazy(() => import('../views/Dashboard/SiswaDashboard.jsx'));
// const AdminDashboard = lazy(() => import('../views/Dashboard/AdminDashboard.jsx'));
// const Pembimbing = lazy(() => import('../views/Dashboard/Pembimbing.jsx'));
// const Wakahubin = lazy(() => import('../views/Dashboard/Wakahubin.jsx'));

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
      {/* <Route path="/SiswaDashboard" element={<SiswaDashboard />} />
       <Route path="/AdminDashboard" element={<AdminDashboard />} />
       <Route path="/PembimbingDashboard" element={<Pembimbing />} />
       <Route path="/WakahubinDashboard" element={<Wakahubin />} /> */}
    </Routes>
  );
}