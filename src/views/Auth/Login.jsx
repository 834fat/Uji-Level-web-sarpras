import React, { useState, useEffect } from "react";
import Api from "../../Api";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import toast from "react-hot-toast";
import sarprasImage from "../../assets/images/sarpras.png";

export default function Login() {
  document.title = "Login - SI Sarpras";

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState("");
  

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const token = Cookies.get("token");

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      navigate("/");
    }
  }, [navigate]);

  if (token) {
    return null; // Supaya render tidak dilanjutkan
  }

  const login = async (e) => {
    e.preventDefault();
    // setLoading(true);

    try {
      const response = await Api.post("/api/login", {
        email: email,
        password: password,
      });

      Cookies.set("token", response.data.token);
      Cookies.set("user", JSON.stringify(response.data.user));
      Cookies.set("permissions", JSON.stringify(response.data.permissions));
      Cookies.set("role", response.data.roles[0]);

      toast.success("Login Successfully!", {
        position: "top-center",
        duration: 4000,
        style: {
          background: "#4CAF50",
          color: "#fff",
          padding: "16px",
        },
        icon: "✔️",
        iconTheme: {
          primary: "white",
          secondary: "#4CAF50",
        },
      });

      const userRole = response.data.roles[0];

      switch (userRole) {
        case "admin":
          navigate("/AdminDashboard");
          break;
        case "user":
          navigate("/UserDashboard");
          break;
        default:
          console.error("Role not recognized:", userRole);
          navigate("/default-dashboard");
      }
    } catch (error) {
      if (error.response) {
        setErrors(error.response.data.message);
      } else if (error.request) {
        setErrors("Network error. Please try again later.");
      } else {
        setErrors("An unexpected error occurred");
      }
    } finally {
      // setLoading(false);
    }
  };

  return (
    // Applying background image and styling using Tailwind CSS
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(assets\images\background.jpg)' }}>
     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-auto w-100px"
            src={sarprasImage}
            alt="sarpras"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sarpras SMKN 1 Ciomas
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            SMK Negeri 1 Ciomas | SMK Pusat Keunggulan
          </p>
        </div>
        <form onSubmit={login} className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>   
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Masuk
            </button>
          </div>
          <div className="flex items-center mr-100">
            <div className="text-sm">
              <a href="Readme.jsx" className="font-medium text-indigo-600 hover:text-indigo-500">
                Wajib Baca!
              </a>
              <a href="Help.jsx" className="mx-1000 font-medium text-indigo-600 hover:text-indigo-500">
                Help
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
   </div>
  );
}
