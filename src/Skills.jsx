{/*import SkillCard from "./components/SkillCard";
import { FaReact, FaPython, FaGitAlt, FaDatabase, FaCloud } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";

const skillData = [
  {
    icon: <FaReact className="text-2xl text-dust" />,
    title: "Frontend Development",
    description:
      "Building responsive, interactive web interfaces using modern frameworks and design systems.",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML/CSS"],
  },
  {
    icon: <SiFlutter className="text-2xl text-dust" />,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications with modern tools and native performance.",
    skills: ["Flutter", "Dart"],
  },
  {
    icon: <FaDatabase className="text-2xl text-dust" />,
    title: "Database Management",
    description:
      "Designing and optimizing relational and NoSQL databases for performance and scalability.",
    skills: ["MySQL", "PostgreSQL", "Firebase", "SQLite"],
  },
  {
    icon: <FaCloud className="text-2xl text-dust" />,
    title: "Cloud & DevOps",
    description:
      "Deploying and managing applications using cloud infrastructure and automation pipelines.",
    skills: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    icon: <FaPython className="text-2xl text-dust" />,
    title: "Data & Analytics",
    description:
      "Analyzing and visualizing datasets to surface actionable insights and business value.",
    skills: ["Python", "SQL", "Power BI", "Machine Learning"],
  },
  {
    icon: <FaGitAlt className="text-2xl text-dust" />,
    title: "Tools & Technologies",
    description:
      "Leveraging industry-standard tools that streamline development, collaboration, and design.",
    skills: ["Git", "GitHub", "Figma", "VS Code"],
  },
];

function Skills() {
  return (
    <section id="skills" className="bg-[#f6fafd] py-24">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}{/*}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-dust mb-4">
            What I Know
          </span>
          <h2 className="text-5xl font-bold text-ink">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillData.map((item) => (
            <SkillCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
              skills={item.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;*/}


import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaChartBar,
  
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiFlutter,
  SiDart,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiFigma,
  SiPostman
 
} from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiPostman />, name: "Postman" },
 
  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  { icon: <FaChartBar />, name: "Power BI" },
  { icon: <SiFigma />, name: "Figma" },
];

function Skills(){
  return (

    <section id="skills" className="py-20 bg-[#f6fafd]">

    <div className="max-w-6xl mx-auto px-8">

        <div className="text-center mb-20">

            

            <h2 className="text-5xl font-bold mt-4 mb-5 text-[#4a7fa7]">
                My Skills
            </h2>

            <p className="mt-5 text-[#0a1931]/70 mb-20" >
                The tools and technologies I use to build applications.
            </p>

        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-18 place-items-center">

            {skills.map((skill) => (

                <div
                    key={skill.name} className="flex flex-col items-center transition duration-300 hover:-translate-y-2"
                    >

                    <div className="text-5xl text-[#3d5a80] mb-5">
                        {skill.icon}
                    </div>

                    <p className="text-md font-semibold text-gray-800">
                        {skill.name}
                    </p>

                </div>

            ))}

        </div>

    </div>

</section>
  );
}
export default Skills;