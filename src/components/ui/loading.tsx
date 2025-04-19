// components/ui/loading.tsx
'use client';

import { useEffect, useState } from 'react';

export const Loading = ({ fullscreen = true }: { fullscreen?: boolean }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`${fullscreen ? 'min-h-screen' : 'min-h-[40dvh]'} flex items-center justify-center bg-gray-900`}>
      <div className="flex flex-col items-center space-y-8">
        <LogoAnimation />
        <TextAnimation show={showText} />
      </div>
    </div>
  );
};

const LogoAnimation = () => (
  <div className="relative w-32 h-32 animate-logo-bounce">
    <div className="absolute inset-0 border-4 border-blue-500 rounded-full animate-spin-slow" />
    <div className="absolute inset-2 border-4 border-transparent rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
  </div>
);

const TextAnimation = ({ show }: { show: boolean }) => (
  show && (
    <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-text-glow">
      stephdev
    </h1>
  )
);