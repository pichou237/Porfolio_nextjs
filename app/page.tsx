'use client';

import { useState } from 'react';
import LoadingScreen from './pages/loadingScreen';
import MainContent from './pages/mainContent';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      ) : (
        <MainContent />
      )}
    </>
  );
}