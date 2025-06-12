import React from 'react';
import InfiniteScroll from '../../react-bits/infiniteScroll/infiniteScroll';
import {
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiHtml5,
  SiPython,
  SiYaml,
  SiGnubash,
  SiJira,
  SiBitbucket,
  SiConfluence,
  SiGit,
  SiUnity,
  SiGradle,
  SiDocker,
  SiKubernetes,
  SiHelm,
  SiVuedotjs,
  SiReact,
  SiNodedotjs,
  SiAngular,
  SiMarkdown
} from "react-icons/si";

import {
  PiMicrosoftWordLogoFill,
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
  PiFileCSharpThin
} from "react-icons/pi";

import { 
  RiJavaFill
} from "react-icons/ri";

//matlab java, csharp

const items = [
  { content: <SiC size={50} className="text-blue-600" /> },
  { content: <SiCplusplus size={50} className="text-blue-500" /> },
  { content: <PiFileCSharpThin size={50} className="text-purple-600" /> },
  { content: <RiJavaFill size={50} className="text-orange-600" /> },
  { content: <SiPython size={50} className="text-yellow-500" /> },
  { content: <SiJavascript size={50} className="text-yellow-400" /> },
  { content: <SiTypescript size={50} className="text-blue-400" /> },
  { content: <SiHtml5 size={50} className="text-orange-500" /> },
  { content: <SiCss3 size={50} className="text-blue-500" /> },
  { content: <SiYaml size={50} className="text-gray-500" /> },
  { content: <SiGnubash size={50} className="text-green-700" /> },
  { content: <SiMarkdown size={50} className="text-gray-600" /> },
  { content: <PiMicrosoftWordLogoFill size={50} className="text-blue-600" /> },
  { content: <PiMicrosoftExcelLogoFill size={50} className="text-orange-400" /> },
  { content: <PiMicrosoftPowerpointLogoFill size={50} className="text-green-600" /> },
  { content: <SiJira size={50} className="text-blue-500" /> },
  { content: <SiBitbucket size={50} className="text-blue-600" /> },
  { content: <SiConfluence size={50} className="text-blue-300" /> },
  { content: <SiGit size={50} className="text-red-500" /> },
  { content: <SiUnity size={50} className="text-gray-800" /> },
  { content: <SiGradle size={50} className="text-green-600" /> },
  { content: <SiDocker size={50} className="text-blue-400" /> },
  { content: <SiKubernetes size={50} className="text-blue-600" /> },
  { content: <SiHelm size={50} className="text-indigo-600" /> },
  { content: <SiReact size={50} className="text-cyan-400" /> },
  { content: <SiVuedotjs size={50} className="text-green-500" /> },
  { content: <SiNodedotjs size={50} className="text-green-600" /> },
  { content: <SiAngular size={50} className="text-red-600" /> },
];

// Use react bits infinite scroll for skills section
const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto"></div>
          </div>
        <div style={{ height: '100px', position: 'relative' }}>
          <InfiniteScroll
            items={items}
            isTilted={true}
            tiltDirection='up'
            autoplay={true}
            autoplaySpeed={0.8}
            autoplayDirection="down"
            pauseOnHover={false}
          />
        </div>
        <div className='text-center'>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Full-Stack Developer with a strong foundation in modern programming languages and development tools. Proficient in C, C++, C#, JavaScript, TypeScript, Python, and Java, with experience building scalable applications using frameworks like React, Angular, Node.js, and Vue.js. Skilled in web technologies including HTML, CSS, and Markdown, as well as DevOps tools like Docker, Kubernetes, Helm, and Gradle. Familiar with scripting (Bash, Yaml), simulation tools (MATLAB, STK), and collaborative platforms such as Git and the Atlassian Suite (Jira, Bitbucket, Confluence). Adept at integrating software with tools like Unity and Microsoft Office, with a strong focus on performance, clarity, and maintainability.
              </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;