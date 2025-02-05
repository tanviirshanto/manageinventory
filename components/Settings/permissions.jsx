
import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import PermissionTable from "./permissionTable";

const Permissions = ({ permissions, setPermissions }) => {
  return (
    <div className=" border-2 border-purple-800  rounded-xl p-2 lg:p-5 overflow-hidden">
      <div className="text-xl font-semibold flex items-center pt-3 pl-5 gap-3">
        <h1 className="">Permissions</h1>
        {/* <button
          disabled={!roles.includes("Admin")}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {" "}
          <MdOutlineEdit />
        </button> */}
      </div>
      <div className="w-full overflow-x-auto">
        <PermissionTable
          permissions={permissions}
          setPermissions={setPermissions}
        />
      </div>
    </div>
  );
};

export default Permissions;
