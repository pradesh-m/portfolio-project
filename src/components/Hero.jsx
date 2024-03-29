import { motion } from "framer-motion";
import { imageOfSelf, githubLogo, linkedinLogo } from "../assets";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section id = "about" className={`relative w-full h-screen mx-auto inset-0`}>
      {/* Text Row */}
      <div className={`absolute inset-0 top-[100px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#abdbe3]'>A Little About Me:</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            As an 18-year-old computer science researcher and programming practitioner,
            I've been pursuing my passion at MIT while majoring in CS & AI. I am always looking for
            new opportunities to work hands on with a team of engineers. Feel free to reach out.
          </p>
          <p className={`${styles.heroSubText} mt-10 text-white-100`}>
            Outside of programming, I enjoy outdoor activities and recreational sports. I've
             been wrestling for five years and like to play pick-up sports with friends. 
          </p>      
        </div>
      </div>

      {/* Image and Logos Row */}

      <div className={`relative top-[530px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        {/* Image */}
        <div>
        <img src={imageOfSelf} alt="PersonalPicture" className="shadow-glow w-80 h-[25vh]" />
        </div>

        {/* Social Icons Column */}
        <div className='flex flex-col items-center justify-between'>
          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/pradesh-mainali-02ab0b264/" target="_blank" rel="noopener noreferrer" className="mb-4">
            <img src={linkedinLogo} alt="LinkedIn" className="w-20 mt-0 h-[6vh]" />
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/pradesh-m" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="GitHub" className="w-20 mt-0 h-[6vh]" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
