'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    type: 'text',
    name: 'John Smith',
    role: 'E-commerce Brand Owner',
    quote:
      'Working with Uzair completely transformed our Amazon Ads. Our ACOS dropped significantly, and our sales doubled within 3 months!',
    image: '/testimonials/john.jpg',
  },
  {
    type: 'video',
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    image: '/testimonials/sarah.jpg',
  },
  {
    type: 'text',
    name: 'Michael Lee',
    role: 'Startup Founder',
    quote:
      'Uzair’s DSP and CTV expertise gave us the edge in a competitive market. He’s not just an advertiser, but a true growth partner.',
    image: '/testimonials/michael.jpg',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <section id='testimonials' className='relative'>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-3xl md:text-4xl font-bold text-center mb-10'
      >
        What Clients Say
      </motion.h2>

      <div className='relative max-w-3xl mx-auto'>
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className='bg-white rounded-2xl shadow-lg p-6 md:p-8 text-center'
        >
          {testimonials[current].type === 'text' ? (
            <>
              <Image
                width={64}
                height={64}
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className='w-16 h-16 rounded-full mx-auto mb-4 object-cover'
              />
              <p className='text-gray-700 italic mb-4'>
                &ldquo;{testimonials[current].quote}&rdquo;
              </p>
              <div className='font-semibold'>{testimonials[current].name}</div>
              <div className='text-sm text-gray-500'>
                {testimonials[current].role}
              </div>
            </>
          ) : (
            <>
              <div className='aspect-video rounded-lg overflow-hidden mb-4'>
                <iframe
                  src={testimonials[current].videoUrl}
                  title={testimonials[current].name}
                  className='w-full h-full'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
              <div className='font-semibold'>{testimonials[current].name}</div>
              <div className='text-sm text-gray-500'>
                {testimonials[current].role}
              </div>
            </>
          )}
        </motion.div>

        {/* Navigation */}
        <button
          onClick={prev}
          className='absolute top-1/2 -left-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-50'
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className='absolute top-1/2 -right-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-50'
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Indicators */}
      <div className='flex justify-center mt-6 space-x-2'>
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? 'bg-indigo-600' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
