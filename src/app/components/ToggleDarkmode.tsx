'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ToggleDarkmode = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isLight = theme === 'light';

  const handleClick = () => {
    console.log('Before setTheme:', theme);  
    setTheme(isLight ? 'dark' : 'light');
    console.log('After setTheme:', theme); 
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full text-white transition-colors"
      aria-label="Toggle dark mode"
    >
      {isLight ? (
        <MoonIcon className="h-6 w-6 rounded-full text-black" />
      ) : (
        <SunIcon className="h-7 w-7 text-yellow-600" />
      )}
    </button>
  );
};

export default ToggleDarkmode;
