import React from 'react';
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'coral' | 'sage' | 'cream' | 'gray';
  className?: string;
}
export function Badge({
  children,
  variant = 'gray',
  className = ''
}: BadgeProps) {
  const variants = {
    coral: 'bg-coral-100 text-coral-600 border border-coral-200',
    sage: 'bg-sage-100 text-sage-700 border border-sage-300',
    cream: 'bg-cream-200 text-gray-700 border border-cream-300',
    gray: 'bg-gray-100 text-gray-700 border border-gray-200'
  };
  return <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>;
}