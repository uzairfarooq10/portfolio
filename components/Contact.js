'use client';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id='contact'
      className='container mx-auto px-6 py-20 text-center'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className='text-lg text-[#64ffda] mb-2'>05. What's Next?</p>
      <h2 className='text-4xl md:text-5xl font-bold text-slate-200 mb-4'>
        Get In Touch
      </h2>
      <p className='max-w-xl mx-auto text-slate-400 mb-8'>
        I am currently open to new opportunities and collaborations. Whether you
        have a question or just want to say hi, my inbox is always open. I'll
        get back to you as soon as possible!
      </p>
      <a
        href='mailto:uzairfarooq123@gmail.com'
        className='inline-block border border-[#64ffda] text-[#64ffda] text-lg px-8 py-4 rounded-md hover:bg-[#64ffda] hover:text-[#0a192f] transition-all duration-300'
      >
        Say Hello
      </a>
      <footer className='mt-20 text-slate-500 text-sm'>
        <p>Built with Next.js & Tailwind CSS by Uzair Farooq.</p>
        <p>Location: Lahore, Pakistan</p>
      </footer>
    </motion.section>
  );
};

export default Contact;
