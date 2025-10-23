import React from 'react'

export default function User() {
  return (
    <div className="p-6">
      <div className="mb-6 flex items-start">
        <button className="border border-black rounded px-6 py-2 font-semibold bg-white dark:bg-gray-700 dark:text-gray-100">Users</button>
      </div>

      <div className="flex items-start gap-8">
  <div className="bg-gray-100 rounded-lg p-6 min-w-[300px] flex items-start gap-6 dark:bg-gray-800 dark:border dark:border-gray-700">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <svg className="w-16 h-16 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 8-4 8-4s8 0 8 4" />
            </svg>
          </div>

          <div className="flex-1">
            <div className="font-bold mb-2">@Username</div>
            <div className="mb-2">
              <label className="font-semibold mr-2">Name</label>
              <input className="border rounded px-2 py-1" placeholder="" />
            </div>
            <div className="mb-2">
              <label className="font-semibold mr-2">Ph No</label>
              <input className="border rounded px-2 py-1" placeholder="" />
            </div>
            <div className="mb-2">
              <label className="font-semibold mr-2">E mail</label>
              <input className="border rounded px-2 py-1" placeholder="" />
            </div>
            <div className="mb-4">
              <label className="font-semibold mr-2">Role</label>
              <input className="border rounded px-2 py-1" placeholder="" />
            </div>
            <button className="bg-blue-200 text-black px-6 py-2 rounded w-full font-semibold">Switch Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
