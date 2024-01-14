import {
    wip,
    portfolio,
    faceprog,
    musicgen,
    nasa,
    traveldeeply,
    mitcsail
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const experiences = [
    {
      title: "SEES Intern",
      company_name: "NASA",
      icon: nasa,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Researched the urban heat island effect",
        "Used Python code to interpret and model satellite data"
      ],
    },
    {
      title: "Co-Founder & Lead Front-End Developer",
      company_name: "TravelDeeply",
      icon: traveldeeply,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developed a website using React.js, Tailwind, and MongoDB",
        "Managed 15 volunteering organizations as clients"
      ],
    },
    {
      title: "Undergraduate Researcher",
      company_name: "MIT's CSAIL",
      icon: mitcsail,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Current",
      points: [
        "In Progress"
      ],
    },

  ];
  
  const projects = [
    {
      name: "Personal Portfolio",
      description:
        "A website containing the different experiences and projects that display my capabilities as an engineer. Made with React.js, Tailwind, and Framer Motion.",
      image: portfolio,
    },
    {
      name: "Music Generation",
      description:
        "Optimized an RNN algorithm by vectorizing a text-based data set and managing loss while training it to generate music. Used Tensorflow, Google Colab, and MIT's public licensed libraries.",
      image: musicgen,
    },
    {
      name: "Face Recognition",
      description:
        "Worked with a CNN algorithm and a SS-VAE loss function to improve a facial recognition model while mitigating bias and minimizing model uncertainty. Used Tensorflow, Google Colab, and MIT's public licensed libraries.",
      image: faceprog,
    },
    {
      name: "Phat Chat",
      description:
        "Helped make a website for MIT's Web Lab competition, meant to be a combination of popular apps Life360 and Yelp. Used React.js, Tailwind, MongoDB, and several API's for functionality.",
      image: wip,
    },
  ];
  
  export { experiences, projects };