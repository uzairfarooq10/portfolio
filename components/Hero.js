'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Linkedin, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative grid md:grid-cols-2 gap-10 items-center py-5'>
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className='text-sm text-indigo-500 font-medium'>
          🚀 Growth Partner for Brands
        </p>
        <h1 className='mt-2 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900'>
          Uzair Farooq
        </h1>
        <p className='mt-4 text-lg text-gray-700 max-w-xl leading-relaxed'>
          Amazon & Walmart Advertising Specialist — helping brands unlock growth
          with PPC, DSP, and CTV campaigns. Over{' '}
          <span className='font-semibold text-indigo-600'>5+ years </span>
          driving 7/8-figure revenues and optimizing ROAS with proven
          strategies.
        </p>
        {/* CTAs */}
        import Link from "next/link";
        {/* CTAs */}
        <div className='mt-6 flex flex-wrap gap-4'>
          <Link
            href='https://calendly.com/uzairfarooq/30min'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-xl shadow hover:bg-indigo-700 transition'
          >
            Book Free Strategy Call
          </Link>

          <Link
            href='#projects'
            className='inline-flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-50 transition'
          >
            Case Studies
          </Link>
        </div>
        {/* Stats */}
        {/* Stats */}
        <div className='mt-10 grid grid-cols-3 gap-5 max-w-lg'>
          <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100'>
            <p className='text-sm text-gray-500'>Experience</p>
            <p className='mt-1 text-2xl font-semibold text-gray-900'>5+ yrs</p>
          </div>
          <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100'>
            <p className='text-sm text-gray-500'>Revenue Scaled</p>
            <p className='mt-1 text-xl font-semibold text-gray-900'>$10M+</p>
          </div>
          <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100'>
            <p className='text-sm text-gray-500'>Ad Spend Managed</p>
            <p className='mt-1 text-xl font-semibold text-gray-900'>$5M+</p>
          </div>
        </div>
        {/* <div className='mt-10 grid grid-cols-3 gap-5 max-w-lg'>
          <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100'>
            <p className='text-sm text-gray-500'>Experience</p>
            <p className='mt-1 text-2xl font-semibold text-gray-900'>5+ yrs</p>
          </div>
          <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100'>
            <p className='text-sm text-gray-500'>Revenue Scaled</p>
            <p className='mt-1 text-xl font-semibold text-gray-900'>$10M+</p>
          </div>
          <div className='bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-gray-100'>
            <p className='text-sm text-gray-500'>Client Rating</p>
            <div className='flex items-center gap-1 mt-1'>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className='fill-yellow-400 text-yellow-400'
                />
              ))}
            </div>
            <p className='text-xs text-gray-500 mt-1'>5/5 Satisfaction</p>
          </div>
        </div> */}
        {/* Client Logos */}
        <div className='mt-10'>
          <p className='text-sm text-gray-500 mb-3'>
            Trusted by 100+ Brands Worldwide
          </p>
          <div className='flex items-center gap-6 opacity-80'>
            <Image src='/brand1.png' alt='Brand 1' width={80} height={30} />
            <Image src='/brand2.png' alt='Brand 2' width={80} height={30} />
            <Image src='/brand3.png' alt='Brand 3' width={80} height={30} />
          </div>
        </div>
      </motion.div>

      {/* Right Section (Image + Floating Badge) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className='relative flex justify-center md:justify-end'
      >
        {/* Profile Image */}
        <div className='relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-100'>
          <Image
            src='/profile-placeholder.jpg'
            alt='Uzair Farooq'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Floating Trust Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className='absolute bottom-6 left-0 bg-white rounded-2xl shadow-lg p-4 w-44'
        >
          <p className='text-sm font-semibold text-gray-900'>
            Client Satisfaction
          </p>
          <div className='flex items-center gap-1 mt-1'>
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className='fill-yellow-400 text-yellow-400'
              />
            ))}
          </div>
          <p className='text-xs text-gray-500 mt-1'>Rated 5/5 on Projects</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
