'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // set initial
    window.addEventListener('resize', handleResize);

    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header className='sticky top-0 z-50 flex justify-center'>
      <motion.div
        animate={{
          width: scrolled
            ? isMobile
              ? '90%' // mobile on scroll
              : '80%' // desktop on scroll
            : isMobile
            ? '95%' // mobile default
            : '90%', // desktop default
          marginTop: '0.5rem', // fixed so it won’t move upward
        }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className={`relative flex items-center justify-between px-6 py-4 max-w-7xl w-full 
                   rounded-2xl bg-white/10 backdrop-blur-sm 
                   ${
                     scrolled ? 'border border-gray-200' : 'border-transparent'
                   }`}
      >
        {/* Logo + Name */}
        <div className='flex items-center gap-3'>
          <motion.div
            animate={{ scale: scrolled ? 0.9 : 1 }}
            transition={{ duration: 0.3 }}
            className='w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold'
          >
            UF
          </motion.div>
          <div>
            <div className='text-sm font-medium'>Uzair Farooq</div>
            <div className='text-xs text-gray-500'>Advertising Guru</div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className='hidden md:flex flex-1 items-center justify-center'>
          <nav className='flex gap-6 text-sm font-light text-gray-500'>
            <a href='#about' className='hover:text-indigo-600'>
              About
            </a>
            <a href='#services' className='hover:text-indigo-600'>
              Services
            </a>
            <a href='#experience' className='hover:text-indigo-600'>
              Experience
            </a>
            <a href='#testimonials' className='hover:text-indigo-600'>
              Testimonials
            </a>
          </nav>
        </div>

        {/* Resume Button */}
        <a
          href='/resume.pdf'
          className='hidden md:inline-flex items-center gap-2 bg-indigo-600 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-indigo-700 transition'
        >
          <FileText size={14} /> Resume
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='md:hidden p-2 rounded-lg hover:bg-white/20'
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className='absolute top-[5.5rem] left-0 right-0 bg-white/70 backdrop-blur-md border-t border-white/20 md:hidden'
        >
          <div className='flex flex-col items-center gap-4 py-4 text-sm font-medium text-gray-800'>
            <a href='#about' onClick={() => setMenuOpen(false)}>
              About
            </a>
            <a href='#services' onClick={() => setMenuOpen(false)}>
              Services
            </a>
            <a href='#experience' onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a href='#testimonials' onClick={() => setMenuOpen(false)}>
              Testimonials
            </a>
            <a
              href='/resume.pdf'
              className='inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition'
            >
              <FileText size={14} /> Resume
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
