import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import about2 from "./assets/about2.jpg";
import { FaGithub, FaLinkedin, FaArrowDown,FaEnvelope, FaDownload } from "react-icons/fa";

function App() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      
<section
  id="home"
  className="min-h-screen bg-[#f6fafd] flex flex-col"
>
  {/* NAVBAR */}

  <Navbar />
  <div class="h-px bg-gray-300 my-1"></div>

  {/* HERO */}

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
  className="text-8xl font-black text-[#3b5b8a]"
/>

      <p className="mt-8 text-lg text-gray-700 ">
        Passionate about
        building web applications,
        testing applications and solving real-world problems.
      </p>

      <div className="mt-14">
  <a
    href="/Jarifa_Tasnim_CV.pdf"
    download
    className="
      inline-flex
      items-center
      gap-3
      bg-white
      px-7
      py-2
      rounded-full
      border-2
      border-gray-500
      
      font-medium
      font-[Manrope] 
      text-gray-700 leading-8
      text-md
      hover:shadow-md hover:-translate-y-1 transition-all duration-300 
      
    "
  >
    <span>Download CV</span>
  
  </a>
</div>
    </div>

  </div>

</section>
      {/* about*/}
      <motion.section id="about" initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.1 }}
    transition={{ duration: 0.6 }}
    className="bg-[#f6fafd] py-20">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="flex justify-center" />
              <img
                src={about2}
                alt="About Jarifa"
                className="flex relative w-[380px] object-cover rounded-2xl shadow-lg hover:shadow-md transition-shadow duration-300"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            
            <h2 className="text-5xl font-bold mb-10 text-[#4a7fa7]">
              About Me
            </h2>
            <p className="leading-7 mb-3 text-md text-gray-800">
           
            I'm a Computer Science student who enjoys building things — from React applications 
             to data dashboards and finding bugs in applications.
            </p>
            <p className="leading-7 text-md mb-3 text-gray-800">
              In my free time, you'll probably find me crocheting something 
              that started as  <span className="font-semibold text-ink">"just a small project,"</span> spoiling my cat or
               learning a technology just because it looked interesting.
               
            </p>
            <p className="leading-7 text-md mb-3 text-gray-800">I like to build things that work well, look great, 
               and behave the way users expect them to.</p>

     
            
          </div>
        </div>
      </motion.section>

      <Skills />

      <Projects />

      <Certifications />

      <Contact />

      <Footer />
    </>
  );
}

export default App;
