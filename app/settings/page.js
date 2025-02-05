"use client";
import axios from "axios";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "../../components/Common/Loading";
import Details from "../../components/Settings/details";
import Permissions from "../../components/Settings/permissions";
import Roles from "../../components/Settings/roles";

function Settings() {
  const { data: session } = useSession();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // New error state
  const [permissions, setPermissions] = useState({
    Customer: { view: false, edit: false, create: false, approval: false },
    Sales: { view: false, edit: false, create: false, approval: false },
    Products: { view: false, edit: false, create: false, approval: false },
    Category: { view: false, edit: false, create: false, approval: false },
    User: { view: false, edit: false, create: false, approval: false },
  });
  const [roles, setRoles] = useState([]);

  const getUserData = async () => {
    if (!session) return; // Avoid unnecessary API call
    setError(null); // Reset error before making the request

    try {
      const response = await axios.get(`/api/users/${session.user._id}`);
      setUserData(response.data);

      if (response.data.permissions) {
        setPermissions(response.data.permissions);
      }
      if (response.data.roles) {
        setRoles(response.data.roles);
      }
    } catch (error) {
      console.error("Error getting user info:", error);
      setError("Failed to fetch user data."); // Set error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, [session]);

  if (loading) return <Loading />;
  if (error) return <div className="text-red-600">{error}</div>;

  return (
    <div className="w-[90%] lg:w-full">
      <div className="flex justify-between items-center bg-[#f3f3f3] px-10 py-5 overflow-hidden ">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Personal Settings</h1>
        </div>
        <div className="flex gap-5 items-center">
          <Link
            href="/create_user"
            className="text-white bg-purple-800 px-3 py-2 rounded-2xl text-nowrap"
          >
            + Create User
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-5 p-5 lg:w-full">
        <Details userData={userData} />
        <div className="flex flex-col lg:flex-row gap-8">
          <Roles roles={roles} setRoles={setRoles} />
          <div className=" lg:w-full overflow-hidden">
            {" "}
            {/* Changed w-screen to w-full */}
            <Permissions
              permissions={permissions}
              setPermissions={setPermissions}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
