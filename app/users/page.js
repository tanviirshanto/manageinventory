import React from 'react';
import { connect } from '../../dbConfig/dbConfig';
import User from '../../models/UserModel';

connect();

async function GetAllUsers() {
    const users = await User.find();
    return users
}

export default async function Users() {
  const users = await GetAllUsers();
  return (
    <div>
      <div className="flex justify-between items-center bg-[#f3f3f3] px-10 py-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Users</h1>
        </div>
        {/* <div className="flex gap-5 items-center">
          <Link
            href="/create_user"
            className="text-white bg-purple-800 px-3 py-2 rounded-2xl"
          >
            + Create User
          </Link>
        </div> */}
      </div>

      <div className="px-7 lg:px-14">
        <div className="rounded-md border mt-12">
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="[&_*]:border-b">
                <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Name
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Email
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    Roles
                  </th>
                  <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="[&_*:last-child]:border-0">
                {users &&
                  users.map((user) =>(
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle font-medium">
                        {user.name}
                      </td>
                      <td className="p-4 align-middle">{user.email}</td>
                      <td className="p-4 align-middle">
                        {" "}
                        {Array.isArray(user.roles) && user.roles[0]
                          ? user.roles[0]
                          : "Unknown"}
                      </td>
                      <td className="p-4 align-middle">
                        <a href="/dashboard/user/665161e01ff8bc432d5778fe">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m7 17.013 4.413-.015 9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583v4.43zM18.045 4.458l1.589 1.583-1.597 1.582-1.586-1.585 1.594-1.58zM9 13.417l6.03-5.973 1.586 1.586-6.029 5.971L9 15.006v-1.589z"></path>
                            <path d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2z"></path>
                          </svg>
                        </a>
                      </td>
                    </tr>
                  )
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
