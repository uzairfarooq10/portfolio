'use client';
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = ['About', 'Experience', 'Skills', 'Projects', 'Contact'];

  return (
    <header className='bg-[#0a192f] bg-opacity-80 backdrop-blur-md sticky top-0 z-50'>
      <nav className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <a href='#hero' className='text-2xl font-bold text-[#64ffda]'>
          UF.
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6 items-center'>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              className='hover:text-[#64ffda] transition-colors duration-300'
            >
              <span className='text-[#64ffda] mr-1'>0{index + 1}.</span>
              {link}
            </a>
          ))}
          <a
            href='/uzair_farooq_resume.pdf'
            target='_blank'
            className='border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300'
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='text-white focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden bg-[#112240] flex flex-col items-center space-y-4 py-4'>
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className='hover:text-[#64ffda] transition-colors duration-300'
            >
              {link}
            </a>
          ))}
          <a
            href='/uzair_farooq_resume.pdf'
            target='_blank'
            className='border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300'
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
