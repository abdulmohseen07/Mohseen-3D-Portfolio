import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    //typescript,
    html,
    css,
    reactjs,
    //redux,
    //tailwind,
    //nodejs,
    //mongodb,
    git,
    python,
    sql,
    power_bi,
    neuronexus,
    //tesla,
    bharatintern,
   //carrent,
    //jobit,
    Sharebite,
    threejs,
    flask,
    // django,
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
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Data Analyst",
      icon: mobile,
    },
    {
      title: "Game Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "Flask",
      icon: flask,
    },
    // {
    //   name: "Django",
    //   icon: django,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Power_bi",
      icon: power_bi,
    },
  ];
  
  const experiences = [
    {
      title: "Web-Developer Intern",
      company_name: "NeuroNexus Innovations",
      icon: neuronexus,
      iconBg: "#383E56",
      date: "November 2022 - December 2022",
      points: [
        "Landing Page Development: Designed and built a responsive landing page using HTML, CSS, and JavaScript during my web developer internship at Neuronexus Innovation.",
        "Optimization and Enhancements: Addressed device compatibility issues and improved interactive elements through extensive testing and fine-tuning JavaScript animations.",

      ],
    },
    {
      title: "Web-Developer Intern",
      company_name: "Bharat Intern",
      icon: bharatintern,
      iconBg: "#E6DEDD",
      date: "March 2024 - April 2024",
      points: [
        "Netflix-Themed Page Development: During my web developer internship at Neuronexus Innovation, I designed and coded a Netflix-themed page using HTML, CSS, and JavaScript.",
        "Optimization and Enhancement: I resolved cross-device compatibility issues through testing and optimization, and enhanced interactive features by refining JavaScript animations.",
        
      ],
    },
    {
      title: "VLSI Intern",
      company_name: "NeuroNexus Innovations",
      icon: neuronexus,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Digital Circuit Design: Designed and simulated digital circuits using VLSI tools, focusing on RTL coding and verification, and optimizing timing and power during synthesis and layout.",
        "VLSI Design Proficiency: Gained skills in Verilog HDL, FPGA prototyping, and implementing complex digital systems, mastering the VLSI design flow.",
       
      ],
    },
    /*{
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Mohseen proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Mohseen does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Mohseen optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ShareBite",
      description:
        "🍽️ ShareBite - Connecting Food Donors with the Needy ShareBite is a platform designed to reduce food wastage and hunger in Mumbai by seamlessly connecting donors with food delivery partners. Residents can easily donate excess food, and delivery personnel ensure the food reaches designated distribution points to help the underprivileged.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: Sharebite,
      source_code_link: "https://github.com/abdulmohseen07/ShareBite",
    },
   /*{
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },*/
   /* {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },*/
  ];
  
  export { services, technologies, experiences,testimonials, projects };