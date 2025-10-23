import React from 'react';

export default function Dashboard() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <button className="border border-black rounded px-6 py-2 font-semibold bg-white dark:bg-gray-700 dark:text-gray-100">Dashboard</button>
      </div>
      <h2 className="text-lg font-semibold text-purple-600 flex items-center mb-4">
        <span className="mr-2">&#9670;</span> Total Users
      </h2>
      <div className="flex gap-6">
        <div className="bg-white border rounded-lg p-6 min-w-[200px] dark:bg-gray-800 dark:border dark:border-gray-700">
          <div className="text-gray-500 text-xs mb-2 dark:text-gray-300">Total Tags</div>
          <div className="text-2xl font-bold mb-1">11450</div>
        </div>
        <div className="bg-white border rounded-lg p-6 min-w-[200px] dark:bg-gray-800 dark:border dark:border-gray-700">
          <div className="text-gray-500 text-xs mb-2 dark:text-gray-300">Reports This Week</div>
          <div className="text-2xl font-bold mb-1">8029</div>
          <div className="text-green-600 text-xs">1.3% Up from past week</div>
        </div>
        <div className="bg-white border rounded-lg p-6 min-w-[200px] dark:bg-gray-800 dark:border dark:border-gray-700">
          <div className="text-gray-500 text-xs mb-2 dark:text-gray-300">Pending Reports</div>
          <div className="text-2xl font-bold mb-1">1245</div>
          <div className="text-red-600 text-xs">4.3% Down from past week</div>
        </div>
      </div>
    </div>
  );
}
