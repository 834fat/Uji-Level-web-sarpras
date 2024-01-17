import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Api from "../../Api";
import Cookies from "js-cookie";

export default function AdminDashboard() {
  document.title = "AdminDashboard";

  const [countUsers, setCountUsers] = useState(0);
  const [countSiswa, setCountSiswa] = useState(0);
  const [countPembimbing, setCountPembimbing] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = Cookies.get("token");

  const fetchData = async () => {
    try {
      Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await Api.get("/api/admin/dashboard");
      setCountUsers(response.data.data.users);
      setCountSiswa(response.data.data.roles.siswa);
      setCountPembimbing(response.data.data.roles.pembimbing);
    } catch (error) {
      setError("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="flex-1 p-8">
        <p className="text-2xl font-bold mb-4">Selamat datang di Dashboard</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="card border-0 shadow w-full h-full p-4">
              <div className="card-body">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <div className="flex items-center">
                    <div className="icon-shape icon-shape-danger rounded me-4 me-sm-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-sm">Users</h6>
                      <h5 className="font-extrabold mb-1">{countUsers}</h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="card border-0 shadow w-full h-full p-4">
              <div className="card-body">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <div className="flex items-center">
                    <div className="icon-shape icon-shape-danger rounded me-4 me-sm-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-sm">Siswa</h6>
                      <h5 className="font-extrabold mb-1">{countSiswa}</h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <div className="card border-0 shadow w-full h-full p-4">
              <div className="card-body">
                {loading ? (
                  <p>Loading...</p>
                ) : error ? (
                  <p>{error}</p>
                ) : (
                  <div className="flex items-center">
                    <div className="icon-shape icon-shape-danger rounded me-4 me-sm-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h6 className="text-sm">Pembimbing</h6>
                      <h5 className="font-extrabold mb-1">{countPembimbing}</h5>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
