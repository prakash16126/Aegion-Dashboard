import React from 'react';

export default function Settings() {
  return (
    <div className="p-6">
      <div className="mb-6">
        <button className="border border-black rounded px-6 py-2 font-semibold bg-white dark:bg-gray-700 dark:text-gray-100">Settings</button>
      </div>
      <div className="bg-gray-100 rounded-lg p-6 dark:bg-gray-800 dark:border dark:border-gray-700">
        {['Account','Notification','Language','Theme','Font Style'].map(item => (
          <div key={item} className="rounded-full bg-gray-200 px-6 py-3 mb-3 text-gray-700 font-medium text-lg cursor-pointer hover:bg-gray-300 transition dark:bg-gray-700 dark:text-gray-100">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
