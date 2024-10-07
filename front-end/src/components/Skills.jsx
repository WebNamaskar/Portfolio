import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiMui ,SiRedux, SiExpress, SiBootstrap, SiNextdotjs, SiGit, SiMysql} from "react-icons/si";


const Skills = () => {
  const skills = [
    { icon: <FaReact className="text-blue-500" />, name: "React" },
    { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
    { icon: <FaJsSquare className="text-yellow-500" />, name: "JavaScript" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiTailwindcss className="text-teal-500" />, name: "Tailwind CSS" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
  { icon: <SiRedux className="text-purple-600" />, name: "Redux Toolkit" },
  { icon: <SiExpress className="text-gray-500" />, name: "Express.js" },
  { icon: <SiBootstrap className="text-indigo-600" />, name: "Bootstrap" },
  { icon: <SiNextdotjs className="text-black" />, name: "Next.js" },
  { icon: <SiGit className="text-orange-600" />, name: "Git" },
  { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
  { icon: <SiMui className="text-blue-500" />, name: "Material UI" }

  ];
  return (
    <div className="container mx-auto py-10 px-4 md:w-3/4 w-full  bg-white/20 shadow-lg ring-1 ring-black/5  rounded-md " id='skills'>
      <h2 className="text-4xl font-bold text-center mb-8 text-white underline">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-lg p-6 rounded-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <div className="text-6xl mb-4">{skill.icon}</div>
            <p className="text-lg font-medium text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
