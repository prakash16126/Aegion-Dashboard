import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost'
  size?: 'sm' | 'md'
}

export function Button({ variant = 'default', size = 'md', className = '', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const sizes: Record<string, string> = {
    sm: 'px-2.5 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
  }
  const variants: Record<string, string> = {
    default: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-200',
  }

  return <button className={`${base} ${sizes[size]} ${variants[variant]} ${className}`} {...props} />
}

export default Button
