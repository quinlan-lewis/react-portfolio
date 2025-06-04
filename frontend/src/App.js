import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md z-50 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
              <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
              <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="Professional headshot"
                className="w-48 h-48 rounded-full object-cover border-4 border-white/20 shadow-2xl mx-auto"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-purple-400/20"></div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                John Doe
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer & Creative Problem Solver
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Passionate about creating beautiful, functional web applications that make a difference. 
              5+ years of experience in modern web technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                View My Work
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
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
                My journey in tech started 5 years ago, and I've been fortunate to work on diverse projects 
                ranging from e-commerce platforms to SaaS applications.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community through blogs and workshops.
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
                <h3 className="text-2xl font-bold text-white mb-2">5+</h3>
                <p className="text-gray-300">Years of Experience</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-2">10+</h3>
                <p className="text-gray-300">Technologies Mastered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">JavaScript / React</span>
                  <span className="text-cyan-400">95%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-3 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Node.js / Express</span>
                  <span className="text-purple-400">90%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Python / Django</span>
                  <span className="text-pink-400">85%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-pink-400 to-cyan-400 h-3 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Database Design</span>
                  <span className="text-cyan-400">88%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-cyan-400 to-purple-400 h-3 rounded-full" style={{width: '88%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">UI/UX Design</span>
                  <span className="text-purple-400">82%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-3 rounded-full" style={{width: '82%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">Cloud Services</span>
                  <span className="text-pink-400">78%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-pink-400 to-cyan-400 h-3 rounded-full" style={{width: '78%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-400 md:block hidden"></div>
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">Senior Full Stack Developer</h3>
                    <h4 className="text-cyan-400 font-semibold mb-2">TechCorp Solutions</h4>
                    <p className="text-purple-300 mb-4">2022 - Present</p>
                    <p className="text-gray-300">
                      Leading development of enterprise web applications using React, Node.js, and cloud technologies. 
                      Mentoring junior developers and architecting scalable solutions.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2"></div>
                <div className="hidden md:block w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 z-10"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">Full Stack Developer</h3>
                    <h4 className="text-purple-400 font-semibold mb-2">StartupXYZ</h4>
                    <p className="text-pink-300 mb-4">2020 - 2022</p>
                    <p className="text-gray-300">
                      Developed and maintained multiple web applications from concept to deployment. 
                      Collaborated with cross-functional teams to deliver high-quality products.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                  <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">Frontend Developer</h3>
                    <h4 className="text-pink-400 font-semibold mb-2">WebAgency Pro</h4>
                    <p className="text-cyan-300 mb-4">2019 - 2020</p>
                    <p className="text-gray-300">
                      Specialized in creating responsive, user-friendly interfaces using modern JavaScript frameworks. 
                      Worked closely with designers to bring creative visions to life.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-pink-400 rounded-full border-4 border-slate-900 z-10"></div>
                <div className="md:w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-gradient">Education</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
                  BS
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Science</h3>
                <h4 className="text-cyan-400 font-semibold mb-2">Computer Science</h4>
                <p className="text-purple-300 mb-4">University of Technology | 2015 - 2019</p>
                <p className="text-gray-300">
                  Graduated Magna Cum Laude with focus on software engineering, algorithms, and data structures.
                </p>
              </div>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto">
                  MS
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Master of Science</h3>
                <h4 className="text-purple-400 font-semibold mb-2">Software Engineering</h4>
                <p className="text-pink-300 mb-4">Tech Institute | 2019 - 2021</p>
                <p className="text-gray-300">
                  Specialized in web technologies, cloud computing, and agile development methodologies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="E-commerce Platform"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">E-commerce Platform</h3>
                <p className="text-gray-300 mb-4">
                  Full-stack e-commerce solution with React, Node.js, and Stripe integration.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">MongoDB</span>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>
            
            <div className="group bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542831371-29b0f74f9713"
                  alt="Task Management App"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Task Management App</h3>
                <p className="text-gray-300 mb-4">
                  Collaborative project management tool with real-time updates and team features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Vue.js</span>
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">Express</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">Socket.io</span>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>
            
            <div className="group bg-white/10 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998"
                  alt="Analytics Dashboard"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4">
                  Data visualization platform with interactive charts and real-time analytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">D3.js</span>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Python</span>
                </div>
                <button className="w-full bg-gradient-to-r from-pink-500 to-cyan-500 text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can work together!
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-300">john.doe@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Phone</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-300">San Francisco, CA</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Social Links</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </div>
                    <span className="text-white">@johndoe_dev</span>
                  </a>
                  
                  <a href="#" className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="text-white">linkedin.com/in/johndoe</span>
                  </a>
                  
                  <a href="#" className="flex items-center space-x-4 p-4 bg-white/10 rounded-xl hover:bg-white/20 transition-all duration-300">
                    <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </div>
                    <span className="text-white">github.com/johndoe</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black/20 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 John Doe. Made with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;