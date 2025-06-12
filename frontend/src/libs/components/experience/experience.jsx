import React from 'react';

import SpotlightCard from '../../react-bits/spotlightCard/spotlightCard';

const Experience = () => {
  return (
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

            {/* Left */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                  <div className="bg-white/10 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-2">Software Engineer II</h3>
                    <h4 className="text-cyan-400 font-semibold mb-2">Raytheon Technologies</h4>
                    <p className="text-purple-300 mb-4">2023 - Present</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>
                        Led the migration of an internal Angular-based UI component to React for cross-application usage; implemented comprehensive unit
                        tests and built a Storybook app for documentation and visual testing.
                      </li>
                      <li>
                        Developed and integrated multiple RESTful APIs and added WebSocket support for select backend services to enable real-time data
                        flow.
                      </li>
                      <li>
                        Improved code coverage across multiple projects in a Java Spring backend service integrated with PostgreSQL, contributing to system
                        reliability and test quality.
                      </li>
                      <li>
                        Deployed and maintained a complex multi-component system on a Kubernetes cluster using Helm charts and Docker images;
                        configured ingress controllers and rules to support scalable access.
                      </li>
                      <li>
                        Ensured CI/CD pipeline integrity by writing unit tests and managing Jenkins jobs, keeping builds stable and test suites up-to-date.
                      </li>
                    </ul>
                  </div>
                </SpotlightCard>
              </div>
              <div className="hidden md:block w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>
              <div className="md:w-1/2"></div>
            </div>
            {/* Right */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="hidden md:block w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 z-10"></div>
              <div className="md:w-1/2 md:pl-8">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                  <div className="bg-white/10 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-2">Software Engineer I</h3>
                    <h4 className="text-cyan-400 font-semibold mb-2">Raytheon Technologies</h4>
                    <p className="text-purple-300 mb-4">2022 - 2023</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>
                        Integrated a COTS mapping API into a thin-client web application supporting satellite system management as a subsystem of a larger
                        governing program; developed with JavaScript, TypeScript, and CSS in an Angular and React environment.
                      </li>
                      <li>
                        Enhanced and customized reusable software to better align with program requirements, including the development of new features
                        that improved user flexibility and customization within the web application.
                      </li>
                      <li>
                        Deployed services and Docker images to Kubernetes clusters using Helm charts, streamlining the application's infrastructure delivery.
                      </li>
                      <li>
                        Participated in the Agile software development lifecycle using Jira and other Atlassian tools, contributing to an iterative, cross-functional
                        team environment focused on flexibility and collaboration.
                      </li>
                      <li>
                        Conducted trade studies to identify the most suitable front-end framework and supporting technologies for program needs;
                        compared Vue.js, Angular, and React along with other open-source and COTS solutions.
                      </li>
                    </ul>
                  </div>
                </SpotlightCard>
              </div>
            </div>
            {/* Left */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                  <div className="bg-white/10 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-2">Undergraduate Research Assistant</h3>
                    <h4 className="text-cyan-400 font-semibold mb-2">BioServe Space Technologies</h4>
                    <p className="text-purple-300 mb-4">2021 - 2022</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>
                        Developed and designed a Virtual Reality simulation of The Lunar Rover using Unity programming in C# to test stochastic resonance as
                        a use in spaceflight countermeasures.
                      </li>
                      <li>
                        Expanded project scope to include development of procedurally generated terrain maps to help further research by adding an aspect
                        of random noise into testing; maps were created in Unity with C# for implementing white noise.
                      </li>
                      <li>
                        Ending publication – <a href="https://www.frontiersin.org/articles/10.3389/fnins.2023.1180314/full" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Frontiers in Neuroscience</a>.
                      </li>
                    </ul>
                  </div>
                </SpotlightCard>
              </div>
              <div className="hidden md:block w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10"></div>
              <div className="md:w-1/2"></div>
            </div>
            {/* Right */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2"></div>
              <div className="hidden md:block w-4 h-4 bg-purple-400 rounded-full border-4 border-slate-900 z-10"></div>
              <div className="md:w-1/2 md:pl-8">
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
                  <div className="bg-white/10 p-6 rounded-2xl">
                    <h3 className="text-2xl font-bold text-white mb-2">Field Engineering Intern</h3>
                    <h4 className="text-cyan-400 font-semibold mb-2">Hensel Phelps Construction Co.</h4>
                    <p className="text-purple-300 mb-4">2020 - 2021</p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                      <li>
                        Explored working as a field engineering intern for Hensel Phelps Construction Co., Utilizing advanced diagnostic tools and such as
                        surveying robots to help identify and resolve technical issues
                      </li>
                      <li>
                        Learned how to read and write on lift drawings and specifications through Revit
                      </li>
                      <li>
                        Co-led concrete pouring operations for pier caps, playing a crucial role in ensuring structural integrity and longevity of project building
                      </li>
                    </ul>
                  </div>
                </SpotlightCard>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;