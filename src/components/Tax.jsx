import React from "react";

const users = [
  {
    id: 1,
    name: "Sandipan Mukherjee",
    email: "sandipan.m@gmail.com",
    mobile: "+91 98765 43210",
    color: "bg-pink-500",
    initial: "S",
  },
  {
    id: 2,
    name: "Puja Sharma",
    email: "puja.sharma@yahoo.co.in",
    mobile: "+91 87654 32109",
    color: "bg-green-500",
    initial: "P",
  },
  {
    id: 3,
    name: "Keya Chatterjee",
    email: "keya.c@hotmail.com",
    mobile: "+91 76543 21098",
    color: "bg-blue-500",
    initial: "K",
  },
  {
    id: 4,
    name: "Arnab Das",
    email: "arnab.das@gmail.com",
    mobile: "+91 65432 10987",
    color: "bg-orange-500",
    initial: "A",
  },
  {
    id: 5,
    name: "Rituparna Roy",
    email: "ritu.roy@outlook.com",
    mobile: "+91 54321 09876",
    color: "bg-purple-500",
    initial: "R",
  },
];

export default function Tax() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-6 py-3">
          <div>User Name</div>
          <div>Email</div>
          <div>Mobile</div>
          <div className="text-center">Actions</div>
        </div>

        {/* Rows */}
        {users.map((user) => (
          <div
            key={user.id}
            className="grid grid-cols-4 items-center px-6 py-4 border-b last:border-b-0"
          >
            {/* Name with Avatar */}
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 flex items-center justify-center text-white rounded-full ${user.color}`}
              >
                {user.initial}
              </div>
              <span className="font-medium text-gray-700">{user.name}</span>
            </div>

            <div className="text-gray-600">{user.email}</div>
            <div className="text-gray-600">{user.mobile}</div>

            {/* Actions */}
            <div className="flex justify-center gap-2">
              <button className="flex items-center gap-1 px-3 py-1 text-sm rounded-md bg-green-100 text-green-600 hover:bg-green-200">
                ✏️ Edit
              </button>
              <button className="flex items-center gap-1 px-3 py-1 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200">
                🗑 Delete
              </button>
            </div>
          </div>
        ))}

        {/* Footer */}
        <div className="flex justify-between items-center px-6 py-3 text-sm text-gray-500">
          <span>Showing 1 to 5 of 25 entries</span>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 border rounded-md bg-gray-100">
              Previous
            </button>

            <button className="px-3 py-1 rounded-md bg-purple-500 text-white">
              1
            </button>

            <button className="px-3 py-1 border rounded-md bg-gray-100">
              2
            </button>

            <button className="px-3 py-1 border rounded-md bg-gray-100">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}