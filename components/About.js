'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <motion.section
      id='about'
      className='container mx-auto px-6 py-20'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className='text-3xl font-bold text-slate-200 mb-8 flex items-center'>
        <span className='text-xl text-[#64ffda] mr-3'>01.</span> About Me
        <span className='flex-grow h-px bg-slate-600 ml-4'></span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-5 gap-10'>
        <div className='md:col-span-3 text-slate-400 space-y-4'>
          <p>
            Hello! I'm Uzair Farooq, a passionate advertising professional based
            in Lahore. My journey into the digital advertising world began over
            five years ago, and I've been captivated by the power of data and
            technology to connect brands with their audiences ever since.
          </p>
          <p>
            My core expertise is in programmatic advertising, where I manage and
            optimize campaigns across various Demand-Side Platforms (DSPs). I
            thrive on analyzing performance data to uncover insights, refine
            targeting strategies, and ultimately drive significant growth for my
            clients.
          </p>
          <p>
            I believe in a collaborative approach, working closely with clients
            and creative teams to ensure that every campaign not only meets but
            exceeds its objectives. When I'm not deep in campaign analytics, I
            enjoy keeping up with the latest industry trends and exploring new
            ad-tech innovations.
          </p>
        </div>
        <div className='md:col-span-2 flex justify-center items-start'>
          <div className='relative w-64 h-64 group'>
            <div className='absolute inset-0 bg-[#64ffda] rounded-md transform rotate-3 group-hover:rotate-0 transition-transform duration-300'></div>
            {/* Add your professional photo in the public folder and update the src path */}
            <Image
              src='/uzair-photo.jpg' // Placeholder - REPLACE with your photo
              alt='Uzair Farooq'
              width={256}
              height={256}
              className='relative w-full h-full rounded-md object-cover z-10 grayscale group-hover:grayscale-0 transition-all duration-300'
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
