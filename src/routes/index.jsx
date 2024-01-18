//import react
import React, { lazy, Suspense } from 'react';

//import react router dom
import { Routes, Route } from "react-router-dom";

//import loader component
const Loader = lazy(() => import('../components/Loader.jsx'));

//import view Login
const Login = lazy(() => import('../views/Auth/Login.jsx'));

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
    </Routes>
  );
}