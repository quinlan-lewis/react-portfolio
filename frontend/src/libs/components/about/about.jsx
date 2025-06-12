import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a passionate full-stack developer with a love for creating innovative web solutions. 
                My journey in tech started 3 years ago, and I've been fortunate to work on diverse projects 
                allowing me to hone my skills in both front-end and back-end development along with some devOps focus.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full text-cyan-300 border border-cyan-500/30">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-purple-300 border border-purple-500/30">
                  Team Player
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full text-pink-300 border border-pink-500/30">
                  Lifelong Learner
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">3+</h3>
                <p className="text-gray-300">Years of Experience with Full-Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default About;