import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaChartBar,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiPostman,

} from "react-icons/si";
import playwrightLogo from "./assets/playwright.svg";
const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiJavascript />, name: "JavaScript" },
  
  { icon: <SiPostman />, name: "Postman" },
  {
  icon: (
    <img
      src={playwrightLogo}
      alt="Playwright"
      className="h-10 w-10 text-[#feefb8]"
    />
  ),
  name: "Playwright",
},
{ icon: <FaPython />, name: "Python" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },

  { icon: <FaGitAlt />, name: "Git" },
  { icon: <FaGithub />, name: "GitHub" },
  
];

function Skills() {
  return (
    <section id="skills" className="bg-[#F2EFE7] py-20">
   
      <div className="mx-auto max-w-6xl px-8">
        <div className="mb-20 text-center">
          <h2 className="mb-5 mt-4 text-5xl font-bold text-[#432f2e]">
            My Skills
          </h2>

          <p className="mt-5 text-[#0a1931]/70">
            The tools and technologies I use to build applications.
          </p>
        </div>
      </div>

      <div className="relative w-full bg-[#432f2e]">
        <div className="mx-auto max-w-7xl px-8 py-10 lg:overflow-visible">
          {/* Skills */}
          <div
            className="
              grid
              grid-cols-3
              sm:grid-cols-5
              gap-y-10
              gap-x-6
              place-items-center

              lg:flex
              lg:w-full
              lg:items-center
              lg:justify-between
              lg:gap-10
            "
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="
                  flex
                  min-w-[75px]
                  flex-shrink-0
                  flex-col
                  items-center
                  justify-center
                "
              >
              
                <div className="mb-5 text-4xl text-[#feefb8]">
                  {skill.icon}
                </div>
                <p className="whitespace-nowrap text-sm font-semibold text-white sm:text-base">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
