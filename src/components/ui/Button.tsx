import React from 'react';
import { motion } from 'framer-motion';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}
export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-full';
  const variants = {
    primary: 'bg-coral-500 text-white hover:bg-coral-600 focus:ring-coral-500 shadow-lg shadow-coral-500/30',
    secondary: 'bg-sage-500 text-white hover:bg-sage-700 focus:ring-sage-500 shadow-md shadow-sage-500/20',
    outline: 'border-2 border-coral-500 text-coral-500 hover:bg-coral-50 focus:ring-coral-500',
    ghost: 'text-gray-600 hover:bg-cream-200 hover:text-coral-500'
  };
  const sizes = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg'
  };
  return <motion.button whileHover={{
    scale: 1.02
  }} whileTap={{
    scale: 0.98
  }} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </motion.button>;
}