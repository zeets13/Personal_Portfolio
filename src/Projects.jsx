import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const projectData = [
  {
    title: "Cloud-Vote",
    subtitle: "Online Voting Platform",
    description:
      "A modern, responsive web-based voting system with full DevOps integration — Docker containerization, automated CI/CD pipelines and dynamic autoscaling.",
    tech: ["React", "ASP.NET", "Docker", "CI/CD"],
    github: "https://github.com/Imran16731/VotingSystem",
    
  
  },
  {
    title: "Hate Speech Detection Chatbot",
    subtitle: "AI-powered Chat Application",
    description:
      "A chatbot using baseline and advanced BERT-based models for hate speech detection, with a React frontend and Flask backend.",
    tech: [ "React", "Tailwind CSS","Flask", "SQLite" ],
    github: "https://github.com/zeets13/NLP_Project",
    
  },
  
  {
    title: "Heart Disease Risk Prediction System",
    subtitle: "Machine Learning Model with Interactive Interface",
    description:
      "A machine learning system that predicts a patient's risk of heart disease based on clinical indicators. Trained and evaluated the model on a curated dataset, then deployed it through an interactive Gradio interface for real-time predictions.",
    tech: ["Python", "Scikit-learn","Pandas","Gradio"],
    github: "https://github.com/zeets13/Python_project",
    
   
  },
  
];

function Projects() {
  return (
    <section id="projects"
     className="bg-[#F2EFE7] py-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          
          <h2 className="text-5xl font-bold mt-4 mb-5 text-[#432f2e]">
            Projects I have Worked on</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projectData.map((project) => (
            <div
              key={project.title}
              className="bg-[#f4efe7] rounded-2xl border border-[#432f2e] p-7 flex flex-col 
              hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-[#432f2e]
                  duration-200">
                    {project.title}
                  </h3>
                  <p className="text-xs text-dust font-medium mt-0.5">
                    {project.subtitle}
                  </p>
                </div>
               
              </div>

              <p className="text-ink/80 text-sm leading-7 flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-4 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[#432f2e] text-white px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(project.github) && (
                <div className="flex border-t  border-[#432f2e] pt-4 justify-center ">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-center 
                      text-ink/80 hover:text-ink transition-colors font-medium"
                    >
                      <FaGithub size={20} /> View Project on GitHub
                    </a>
                  )}
                  
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
