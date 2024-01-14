import React, { useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { experiences } from "../constants";

const Tab = ({ title, active, onClick }) => (
  <div
    className={`cursor-pointer p-3 m-2 text-lg ${active ? "text-white" : "text-secondary"} bg-black bg-opacity-30 rounded-md`}
    onClick={onClick}
    style={{ minWidth: "120px", textAlign: "center" }}
  >
    {title}
  </div>
);

const ExperienceCard = ({ title, company_name, icon, iconBg, date, points }) => (
  <div className="flex flex-col md:flex-row items-center mt-5">
    <div className="flex-shrink-0 w-16 h-16 rounded-full" style={{ backgroundColor: iconBg }}>
      <img src={icon} alt={company_name} className="w-full h-full object-cover rounded-full" />
    </div>
    <div className="ml-4">
      <h3 className="text-white font-bold">{title} - {company_name}</h3>
      <p className="text-secondary">{date}</p>
      <ul className="mt-2 text-secondary">
        {points.map((point, index) => (
          <li key={index}>- {point}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Experience = () => {
  const [activeTab, setActiveTab] = useState(experiences[0].company_name);

  return (
    <div className="min-h-20">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>Experience:</h2>
      </motion.div>

      <div className="flex justify-center mt-5 flex-wrap"> {/* Spaced out tabs */}
        {experiences.map(({ company_name }) => (
          <Tab
            key={company_name}
            title={company_name}
            active={activeTab === company_name}
            onClick={() => setActiveTab(company_name)}
          />
        ))}
      </div>

      <motion.div variants={fadeIn("", "", 0.1, 1)} className="mt-10">
        {experiences
          .filter(({ company_name }) => company_name === activeTab)
          .map((experience) => (
            <ExperienceCard
              key={experience.company_name}
              {...experience}
            />
          ))}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Experience, "");
