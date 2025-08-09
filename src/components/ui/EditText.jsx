'use client';
import React, { useState, forwardRef } from 'react';

const EditText = forwardRef(({ 
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
  disabled = false,
  error = false,
  errorMessage = '',
  label = '',
  required = false,
  className = '',
  size = 'md',
  variant = 'default',
  fullWidth = true,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);

  const variants = {
    default: 'border-gray-300 focus:border-primary focus:ring-primary/20',
    filled: 'bg-gray-50 border-transparent focus:bg-white focus:border-primary focus:ring-primary/20',
    outline: 'border-2 border-primary/20 focus:border-primary focus:ring-primary/20'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm sm:px-3 sm:py-2 sm:text-sm',
    md: 'px-4 py-3 text-base sm:px-4 sm:py-3 sm:text-base md:text-base',
    lg: 'px-5 py-4 text-lg sm:px-5 sm:py-4 sm:text-lg md:text-lg'
  };

  const handleChange = (e) => {
    if (onChange) {
      onChange(e?.target?.value, e);
    }
  };

  return (
    <div className={`${fullWidth ? 'w-full' : ''} ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-primary mb-2 sm:mb-2 md:mb-3">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            w-full
            rounded-lg sm:rounded-xl md:rounded-2xl
            border
            transition-all
            duration-200
            ease-in-out
            focus:outline-none
            focus:ring-2
            font-manrope
            ${variants?.[variant]}
            ${sizes?.[size]}
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}
            ${disabled ? 'bg-gray-100 cursor-not-allowed opacity-60' : 'bg-white'}
            ${focused ? 'shadow-sm' : ''}
            placeholder:text-gray placeholder:font-medium
          `?.trim()?.replace(/\s+/g, ' ')}
          {...props}
        />
      </div>
      {error && errorMessage && (
        <p className="mt-1 sm:mt-2 text-sm text-red-600 font-medium">
          {errorMessage}
        </p>
      )}
    </div>
  );
});

EditText.displayName = 'EditText';

export default EditText;