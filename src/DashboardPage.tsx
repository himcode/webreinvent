// DashboardPage.tsx

import React from "react";
import { useDispatch } from "react-redux";
import { logoutSuccess } from "./store";
import { useNavigate } from "react-router-dom";
import { getUser } from "./auth";

const DashboardPage: React.FC = () => {
  const user = getUser();
  const dispatch = useDispatch();
  const history = useNavigate();
  const handleLogout = () => {
    dispatch(logoutSuccess());
    history("/login");
  };

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            Welcome to the dashboard!{" "}
          </p>
          <h1 className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            {user?.email}
          </h1>

          <button   className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                 onClick={handleLogout}>Logout</button>
        </div>
      </section>
    </div>
  );
};

export default DashboardPage;
