'use client';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'E-commerce Brand ROAS Enhancement',
    description:
      'Developed a full-funnel programmatic strategy for a leading e-commerce client, focusing on dynamic creative optimization and audience segmentation. Achieved a record-breaking return on ad spend.',
    tags: ['DV360', 'DCO', 'Audience Segmentation'],
    link: '#', // Add link to a case study if you have one
  },
  {
    title: 'Lead Generation Campaign for SaaS',
    description:
      'Built and managed a targeted lead generation campaign using contextual and intent-based targeting. Successfully decreased the cost-per-acquisition while increasing lead quality.',
    tags: ['The Trade Desk', 'Lead Gen', 'CPA Optimization'],
    link: '#',
  },
  {
    title: 'Brand Awareness for a New Product Launch',
    description:
      'Executed a large-scale brand awareness campaign using a mix of video and display ads. Utilized brand lift studies to measure impact and optimize delivery for maximum reach.',
    tags: ['Brand Awareness', 'Video Ads', 'Analytics'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <motion.section
      id='projects'
      className='container mx-auto px-6 py-20'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className='text-3xl font-bold text-slate-200 mb-12 flex items-center'>
        <span className='text-xl text-[#64ffda] mr-3'>04.</span> Success Stories
        <span className='flex-grow h-px bg-slate-600 ml-4'></span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className='bg-[#112240] p-6 rounded-md shadow-lg flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div>
              <div className='flex justify-between items-center mb-4'>
                <h3 className='text-lg font-bold text-slate-200'>
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-slate-400 hover:text-[#64ffda]'
                >
                  <FiExternalLink size={22} />
                </a>
              </div>
              <p className='text-slate-400 text-sm mb-4'>
                {project.description}
              </p>
            </div>
            <div className='flex flex-wrap gap-2 mt-auto'>
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className='text-xs text-[#64ffda] bg-[#64ffda]/10 px-2 py-1 rounded-full'
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
