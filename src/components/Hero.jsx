import { motion } from "framer-motion";
import { imageOfSelf, githubLogo, linkedinLogo } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Text Row */}
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#abdbe3]'>A Little About Me:</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            As an 18-year-old computer science researcher and programming practitioner,
            I've been pursuing my passion at MIT while majoring in CS & AI. 
          </p>
          <p className={`${styles.heroSubText} mt-10 text-white-100`}>
            Outside of programming, I enjoy outdoor activities and recreational sports. I spent 
            many hours in high school on my wrestling team and playing pick-up sports with friends.
          </p>
          <p className={`${styles.heroSubText} mt-10 text-white-100`}>
            Take a look at some of my projects and feel free to reach out!           
          </p>
        </div>
      </div>

      {/* Image and Logos Row */}

      <div className={`absolute inset-0 top-[600px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        {/* Image */}
        <div>
          <img src={imageOfSelf} alt="Description" className="shadow-glow w-80 h-85" />
        </div>

        {/* Social Icons Column */}
        <div className='flex flex-col items-center justify-between'>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/pradesh-mainali-02ab0b264/" target="_blank" rel="noopener noreferrer" className="mb-4">
            <img src={linkedinLogo} alt="LinkedIn" className="w-20 h-20 mt-3" />
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/pradesh-m" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="w-20 h-20 mt-20" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
