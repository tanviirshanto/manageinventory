"use client";
import React, { useEffect, useState } from "react";
import ToggleButton from "./toggleButton";

const PermissionTable = ({permissions, setPermissions}) => {

  // Handle toggle button change
  // const handleToggleChange = (rowName, action) => {
  //   setPermissions((prev) => ({
  //     ...prev,
  //     [rowName]: {
  //       ...prev[rowName],
  //       [action]: !prev[rowName][action],
  //     },
  //   }));
  // };

  return (
    <div className="w-full overflow-x-auto">
      <table
        className="lg:table-auto w-full overflow-x-auto border-separate"
        style={{ borderSpacing: "0 10px" }}
      >
        <thead>
          <tr className="text-center">
            <th className="px-4 py-5"></th>
            <th className="px-4 py-2">VIEW</th>
            <th className="px-4 py-2">EDIT</th>
            <th className="px-4 py-2">CREATE</th>
            <th className="px-4 py-2">APPROVAL</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(permissions).map((rowName) => (
            <tr key={rowName} className="text-center bg-white rounded-md">
              <td className="px-4 py-3">{rowName}</td>
              {Object.keys(permissions[rowName]).map((action) => (
                <td key={action} className="px-4 py-3 text-center">
                  <div className="flex justify-center items-center">
                    <ToggleButton
                      checked={permissions[rowName][action]}
                      // onChange={() => handleToggleChange(rowName, action)}
                    />
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Debugging: Display Current State */}
      {/* <pre className="mt-5 bg-gray-100 p-4 rounded">
        {JSON.stringify(permissions, null, 2)}
      </pre> */}
    </div>
  );
};

export default PermissionTable;
