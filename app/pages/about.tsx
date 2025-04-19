'use client';

import Image from 'next/image';
import { CardContent } from '@/src/components/ui/card';
import { motion } from 'framer-motion';
import { Progress } from '@/src/components/ui/progress';
// import imageprofile
import profileImage from '@/public/images/profile.jpg';

const about = () => {
  const frameworks = [
    { name: 'Angular', level: 85 },
    { name: 'Laravel', level: 90 },
    { name: 'Spring Boot', level: 75 },
    { name: 'Next.js', level: 88 },
    { name: 'Vue.js', level: 82 }
  ];

  const languages = [
    { name: 'Python', level: 92 },
    { name: 'Java', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'TypeScript', level: 88 },
    { name: 'Tailwind CSS', level: 90 }
  ];

  const skills = [
    { name: 'UX Design', level: 80 },
    { name: 'Website Design', level: 70 },
    { name: 'App Design', level: 90 },
    { name: 'Graphic Design', level: 85 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mx-auto flex flex-col md:flex-row items-center gap-8 p-6 max-w-6xl mt-12"
    >
      {/* Image Section */}
      <motion.div 
        variants={itemVariants}
        className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-red-500 overflow-hidden shadow-xl"
      >
        <Image
          src = {profileImage}
          alt="About Me"
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* About Me Section */}
      <CardContent className="flex-1 space-y-8">
        <motion.div variants={itemVariants}>
          <h2 id="about" className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 text-justify">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
            lectus netus in. Aliquet donec morbi convallis pretium.
          </p>
        </motion.div>

        {/* Skills Sections */}
        <motion.div variants={containerVariants} className="space-y-10">
          {/* Design Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Design Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span className="text-orange-500">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-gray-200 [&>div]:bg-orange-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Frameworks</h3>
            <div className="grid grid-cols-2 gap-4">
              {frameworks.map((framework, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{framework.name}</span>
                    <span className="text-orange-500">{framework.level}%</span>
                  </div>
                  <Progress 
                    value={framework.level} 
                    className="h-2 bg-gray-200 [&>div]:bg-red-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Programming Languages */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Languages</h3>
            <div className="grid grid-cols-2 gap-4">
              {languages.map((language, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span>{language.name}</span>
                    <span className="text-orange-500">{language.level}%</span>
                  </div>
                  <Progress 
                    value={language.level} 
                    className="h-2 bg-gray-200 [&>div]:bg-blue-500"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </CardContent>
    </motion.div>
  );
};

export default about;