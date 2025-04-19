'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onLoadingComplete();
          return 100;
        }
        return prev + 3.33; // 100% en 30 secondes
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="w-64 h-64 mb-8 relative">
        <div className="absolute inset-0 rounded-full bg-orange-500 opacity-20 animate-ping"></div>
        <div className="absolute inset-4 rounded-full bg-white shadow-lg flex items-center justify-center">
          <span className="text-4xl font-bold text-orange-500">StephDev</span>
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Chargement</h1>
      <p className="text-gray-600 mb-6">Préparation de votre expérience ({progress}%)</p>
      
      <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-orange-500 transition-all duration-300" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <p className="text-gray-500 text-sm mt-8 italic">
        {progress < 30 && "Chargement des ressources..."}
        {progress >= 30 && progress < 70 && "Optimisation des performances..."}
        {progress >= 70 && "Finalisation en cours..."}
      </p>
    </div>
  );
}