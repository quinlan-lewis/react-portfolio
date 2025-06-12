import React from 'react';
import PixelCard from '../../react-bits/pixelCard/pixelCard';

const Education = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">
          <PixelCard variant="pink" className='relative w-full md:w-1/2 h-96'>
            <div className="p-8 rounded-2xl absolute">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
                  BS
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Science</h3>
                <h4 className="text-cyan-400 font-semibold mb-2">Aerospace Engineering</h4>
                <p className="text-purple-300 mb-4">University of Colorado Boulder | 2022</p>
                <p className="text-gray-300">
                  Aerospace Engineering with a focus on software engineering, algorithms, and data structures with a minor in computer science and space.
                </p>
              </div>
            </div>
          </PixelCard>
        </div>
      </div>
    </section>
  );
};

export default Education;