import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Certifications from "./Certifications";
import QaLab from "./components/QaLab";
import Contact from "./Contact";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import about2 from "./assets/about2.jpg";
import { FaGithub, FaLinkedin, FaArrowDown,FaEnvelope, FaDownload, FaSearch } from "react-icons/fa";

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      
<section
  id="home"
  className="min-h-screen flex flex-col"
>
  {/* NAVBAR */}

  <Navbar />
  <Hero />


  {/* HERO */}
  {/*
  
  <div className="flex-1 flex items-center justify-center">

    <div className="text-center max-w-4xl px-8 mt-15">

    

<TypeAnimation
  sequence={[
    "Hi, I'm Jarifa!",
    2000,
  ]}
  speed={20}
  cursor={true}
  repeat={0}
  className="text-8xl font-black text-[#432f2e]"
/>

      <p className="mt-8 text-lg text-gray-700 ">
        Passionate about
        building web applications,
        testing applications and solving real-world problems.
      </p>

     <div className="mt-15 flex  justify-center flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
  
 
  <a
    href="https://www.linkedin.com/in/jarifa-tasnim"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex
      items-center
      gap-3
      rounded-full
      border-2
      border-[#432f2e]
      bg-[#feefb8]
      px-7
      py-2
      font-[Manrope]
      text-md
      font-medium
      leading-8
      text-gray-700
      
    "
  >
    <span>
      <FaSearch />
    </span>

    <span>linkedin.com/in/jarifa-tasnim</span>
  </a>

  <a
    href="/Jarifa_Tasnim_CV.pdf"
    download
    className="
      font-[Manrope]
      text-md
      font-medium
      leading-8
      text-gray-700
      transition
      hover:text-blue-600
    "
  >
    <u>Get my Resume</u>
  </a>

</div>

    </div>

  </div>
  */}

  </section>

      <About about2={about2} />
      <Skills />

      <Projects />
      <QaLab />
      

      <Certifications />

      <Contact />

      <Footer />
    </>
  );
}


export default App;
