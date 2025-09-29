'use client';
import { motion } from 'framer-motion';
import { FaGoogle, FaDatabase, FaChartLine, FaUsers } from 'react-icons/fa'; // Example icons

const skills = {
  'Platforms & Tools': [
    { name: 'Google Ads', icon: <FaGoogle /> },
    { name: 'DV360', icon: <FaGoogle /> },
    { name: 'The Trade Desk', icon: <FaChartLine /> },
    { name: 'Xandr', icon: <FaChartLine /> },
    { name: 'Google Analytics', icon: <FaGoogle /> },
    { name: 'Adobe Audience Manager', icon: <FaDatabase /> },
  ],
  'Core Competencies': [
    'Data Analysis',
    'A/B Testing',
    'Pixel Implementation',
    'Audience Segmentation',
    'Campaign Optimization',
    'Reporting & Visualization',
  ],
  'Soft Skills': [
    'Strategic Planning',
    'Client Communication',
    'Project Management',
    'Problem-Solving',
  ],
};

const Skills = () => {
  return (
    <motion.section
      id='skills'
      className='container mx-auto px-6 py-20'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className='text-3xl font-bold text-slate-200 mb-12 flex items-center'>
        <span className='text-xl text-[#64ffda] mr-3'>03.</span> My Skillset
        <span className='flex-grow h-px bg-slate-600 ml-4'></span>
      </h2>
      <div className='space-y-10'>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className='text-xl font-semibold text-slate-300 mb-4'>
              {category}
            </h3>
            <div className='flex flex-wrap gap-3'>
              {items.map((skill, index) => (
                <div
                  key={index}
                  className='bg-[#112240] text-slate-300 text-sm font-medium px-4 py-2 rounded-full flex items-center gap-2 shadow-sm'
                >
                  {typeof skill === 'object' ? (
                    <>
                      {skill.icon}
                      {skill.name}
                    </>
                  ) : (
                    skill
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
