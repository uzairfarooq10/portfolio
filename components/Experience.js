'use client';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Programmatic Specialist',
    company: 'AdTech Innovators Inc.',
    date: 'Jan 2022 - Present',
    description: [
      'Led programmatic strategy for key accounts, resulting in a 30% average increase in ROAS.',
      'Managed campaign execution across platforms like DV360, The Trade Desk, and Xandr.',
      'Developed custom reporting dashboards to provide clients with transparent performance insights.',
    ],
  },
  {
    role: 'Programmatic Trader',
    company: 'Digital Growth Agency',
    date: 'Jun 2019 - Dec 2021',
    description: [
      'Executed and optimized programmatic campaigns for a diverse portfolio of clients.',
      'Conducted A/B testing on ad creatives and landing pages to improve conversion rates.',
      'Collaborated with the analytics team to segment audiences and personalize messaging.',
    ],
  },
  // Add another experience if you have one
];

const Experience = () => {
  return (
    <motion.section
      id='experience'
      className='container mx-auto px-6 py-20'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className='text-3xl font-bold text-slate-200 mb-12 flex items-center'>
        <span className='text-xl text-[#64ffda] mr-3'>02.</span> Where I’ve
        Worked
        <span className='flex-grow h-px bg-slate-600 ml-4'></span>
      </h2>
      <div className='relative border-l-2 border-slate-700'>
        {experiences.map((exp, index) => (
          <div key={index} className='mb-12 ml-6'>
            <span className='absolute flex items-center justify-center w-6 h-6 bg-[#64ffda] rounded-full -left-3 ring-8 ring-[#0a192f]'>
              <svg
                className='w-2.5 h-2.5 text-[#0a192f]'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path d='M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z' />
              </svg>
            </span>
            <h3 className='text-xl font-semibold text-slate-200'>
              {exp.role} @ <span className='text-[#64ffda]'>{exp.company}</span>
            </h3>
            <p className='block mb-2 text-sm font-normal leading-none text-slate-500'>
              {exp.date}
            </p>
            <ul className='list-disc list-inside space-y-2 text-slate-400'>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
