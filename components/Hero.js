'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className='grid md:grid-cols-2 gap-10 items-center'>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className='text-sm text-indigo-600 font-semibold'>Hi, I&apos;m</p>
        <h1 className='mt-2 text-4xl md:text-5xl font-extrabold tracking-tight'>
          Uzair Farooq
        </h1>
        <p className='mt-4 text-lg text-gray-700 max-w-xl'>
          Advertising specialist focused on Amazon & Walmart performance ads and
          programmatic advertising (Amazon DSP & CTV). Over 5 years of hands-on
          experience driving revenue, optimizing ACOS/ROAS, and building
          scalable media strategies.
        </p>

        <div className='mt-6 flex flex-wrap gap-3'>
          <a
            href='#contact'
            className='inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg shadow'
          >
            Contact Me
          </a>
          <a
            href='#projects'
            className='inline-flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg'
          >
            See Projects
          </a>
        </div>

        <div className='mt-8 grid grid-cols-2 gap-4 max-w-sm'>
          <div className='bg-white shadow-sm rounded-lg p-4'>
            <p className='text-sm text-gray-500'>Years Experience</p>
            <p className='mt-1 text-xl font-semibold'>5+</p>
          </div>
          <div className='bg-white shadow-sm rounded-lg p-4'>
            <p className='text-sm text-gray-500'>Specialties</p>
            <p className='mt-1 text-xl font-semibold'>PPC · DSP · CTV</p>
          </div>
        </div>

        <div className='mt-8 flex items-center gap-4 text-gray-600'>
          <a
            href='mailto:uzair@example.com'
            className='inline-flex items-center gap-2 hover:text-indigo-600'
          >
            <Mail size={16} /> uzair@example.com
          </a>
          <a
            href='https://www.linkedin.com/'
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 hover:text-indigo-600'
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className='flex justify-center md:justify-end'
      >
        <div className='relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-100'>
          <Image
            src='/profile-placeholder.jpg'
            alt='Uzair Farooq'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
