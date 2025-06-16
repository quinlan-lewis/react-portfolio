import React from 'react';

import Aurora from '../../react-bits/aurora/aurora';

const Hero = () => {
    return (
        <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
                    <Aurora
                        colorStops={["#38c9f0", "#b987fb", "#e975c3"]}
                        blend={0.25}
                        amplitude={1.0}
                        speed={0.5}
                    />
                </div>
                <div className="text-center" style={{ position: 'relative', zIndex: 10 }}>
                    <div className="relative inline-block mb-8">
                        <img
                            src="/profile.png"
                            alt="Professional headshot"
                            className="w-48 h-48 rounded-full object-contain border-4 border-white/20 shadow-2xl mx-auto"
                        />
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Quinlan Lewis
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                        Software Engineer II | Full Stack Developer
                    </p>
                    <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                        3+ years of experience in building scalable web applications and APIs. With a background in aerospace engineering and computer science.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
                            <a href="#experience">View My Work</a>
                        </button>
                        <a
                            href="/Quinlan_Lewis_Resume.pdf"
                            download="Quinlan_Lewis_Resume.pdf"
                            className="block"
                        >
                            <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                                Download Resume
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;