'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
// import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
// import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-900'>
      <Header />
      <main className='max-w-6xl mx-auto px-6 py-16'>
        <Hero />
        <About />
        {/* <Services /> */}
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
