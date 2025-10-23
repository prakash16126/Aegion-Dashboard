import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode
}

export function Input({ icon, className = '', ...props }: InputProps) {
  return (
    <div className={`relative ${className}`}>
      {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">{icon}</span>}
      <input
        {...props}
        className={`w-full border rounded py-2 ${icon ? 'pl-10' : 'pl-3'} pr-3 text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-300 border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-400 transition-colors`}
      />
    </div>
  )
}

export default Input