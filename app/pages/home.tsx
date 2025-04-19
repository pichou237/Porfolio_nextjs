'use client';

import Image from 'next/image';
import { Button } from '@/src/components/ui/button';
import { CardContent } from '@/src/components/ui/card';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

// import imageprofile
import profileImage from '@/public/images/profile.jpg';


const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = '/cv/CV_stephane.pdf'; // accès direct depuis le dossier public
  link.download = 'CV_Stephane_Banemb.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const pagehome = () => {
  return (
    <div id="home"className="mt-7 mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-8 p-6 max-w-6xl">
      {/* Content Section */}
      <CardContent className="text-center md:text-left space-y-6 md:space-y-8 flex-1">
        <h5 className="md:text-xl text-gray-600  tracking-widest">Hi, I am</h5>
        <h4 className="text-3xl md:text-xl font-bold text-red-500">Banemb Stephane</h4>
        <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
          <span className="block">UI/UX Designer</span>
          <span className="block">AND</span>
          <span className="block text-orange-400 mt-2">Fullstack Developer</span>
        </h3>
        <p className="text-gray-600 text-justify md:text-left max-w-md text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg shadow-lg transition-all transform hover:scale-105"
          onClick={handleDownloadCV} >
            Hire Me
          </Button>
          <Button variant="outline" className="px-8 py-3 rounded-lg border-gray-300 hover:bg-gray-50"
          onClick={handleDownloadCV}>
            Download CV
          </Button>
        </div>
      </CardContent>

      {/* Image Section */}
      <div className="relative flex flex-col items-center flex-1">
        <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-red-500 overflow-hidden shadow-xl group">
          <Image 
            src={profileImage} 
            alt="Banemb Stephane" 
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 224px, 256px"
            priority
          />
          {/* Effet de lumière */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-orange-100 opacity-20 mix-blend-overlay"></div>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5 mt-8">
          <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-2xl">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-2xl">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-2xl">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors duration-300 text-2xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  )
}

export default pagehome;