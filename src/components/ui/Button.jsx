'use client';
import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  className = '',
  fullWidth = false,
  loading = false,
  ...props
}) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 active:bg-primary/80 focus:ring-primary/50',
    secondary: 'bg-white text-primary border border-primary hover:bg-primary/5 active:bg-primary/10 focus:ring-primary/30',
    outline: 'border border-primary text-primary bg-transparent hover:bg-primary/5 active:bg-primary/10 focus:ring-primary/30',
    ghost: 'text-primary bg-transparent hover:bg-primary/5 active:bg-primary/10 focus:ring-primary/30',
    accent: 'bg-accent text-white hover:bg-accent/90 active:bg-accent/80 focus:ring-accent/50',
  };

  const sizes = {
    xs: 'px-2 py-1 text-xs sm:px-2.5 sm:py-1.5 sm:text-xs',
    sm: 'px-2.5 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm',
    md: 'px-3 py-2 text-sm sm:px-4 sm:py-2.5 sm:text-base',
    lg: 'px-4 py-2.5 text-base sm:px-5 sm:py-3 sm:text-lg',
    xl: 'px-5 py-3 text-lg sm:px-6 sm:py-4 sm:text-xl',
  };

  const responsiveRadius = 'rounded-full';
  const responsiveFocus = 'focus:ring-2 sm:focus:ring-2 md:focus:ring-4';

  const LoadingSpinner = () => (
    <svg
      className="animate-spin h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      type={type}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center font-medium touch-manipulation font-manrope transition-all duration-200 ease-in-out focus:outline-none focus:ring-opacity-50 min-h-[44px] sm:min-h-[48px] ${responsiveRadius} ${responsiveFocus} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:scale-105 active:scale-95'} ${loading ? 'relative' : ''} ${className}`.trim().replace(/\s+/g, ' ')}
      aria-disabled={disabled || loading}
      aria-busy={loading}
      {...props}
    >
      {loading && <LoadingSpinner />}
      <span className={loading ? 'opacity-75' : ''}>{children}</span>
    </button>
  );
};

export default Button;
