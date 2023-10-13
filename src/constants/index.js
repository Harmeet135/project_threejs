import {
    javascript,
    typescript,
    html1,
    css1,
    express1,
    firebase1,
    git1,
    mongodb1,
    python1,
    nextjs1,
    react1,
    nodejs1,
    cplus1,
    solidity1,
    tailwind1,
    php,
    vue,
    mysql,
    amb,
    ts,
    companyCto,
    colordetection,
    hyperslice,
    django,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Home",
    },
    // {
    //   id: "work",
    //   title: "Work",
    // },
    {
      id: "We are hiring",
      title: "We are hiring",
    },
    {
      id: "Email",
      title: "Contact",
    },
  ];
  
  
  const tech = [
    {
      name: "HTML 5",
      icon: html1,
    },
    {
      name: "css 3",
      icon: css1,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "react1",
      icon: react1,
    },
    {
      name: "tailwind1",
      icon: tailwind1,
    },
    {
      name: "nodejs1",
      icon: nodejs1,
    },
    {
      name: "mongodb1",
      icon: mongodb1,
    },
    {
      name: "python1",
      icon: python1,
    },
    {
      name: "git1",
      icon: git1,
    },
    {
      name: "firebase1",
      icon: firebase1,
    },
    {
      name: "express1",
      icon: express1,
    },
  
    {
      name: "nextjs1",
      icon: nextjs1,
    },
    {
      name: "solidity1",
      icon: solidity1,
    },
    {
      name: "cplus1",
      icon: cplus1,
    },
    {
      name: "VueJs",
      icon: vue,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "django",
      icon: django,
    },
      
  ]

  
  const experiences = [
    {
      title: "Connecting people with matching puzzle pieces",
      // company_name: "The Tech Musketeers",
      icon: amb,
      iconBg: "#383E56",
      date: "2021",
      points: [
        "There are millions of scientists trying to cure the likes of AIDS and Alzheimer’s. Maybe the cure is currently separated in different people’s heads. How can we design the web so that these half-formed solutions can come together?",
        "- Sir Tim Berners-Lee, Creator of the Web",
      ],
    },
    {
      title: "The auto-suggest layer for human thinking",
      icon: ts,
     
      iconBg: "linear-gradient(28deg, rgba(72,176,228,1) 16%, rgba(253,29,243,1) 34%, rgba(223,67,162,1) 72%, rgba(179,98,43,1) 92%)" ,    
    
      points: [
        "Connect fragments of information from siloed sources faster than ever before.",

       "Your organization's collective memory at your fingertips."
      ],
    },
  
  ];

  
  const projects = [
    {
      name: "Marty Weiner",
      designation : "Former CTO",
      position : "Reddit Ideaflow Advisor",
      description:
       "“A key step to realizing the potential of the Web as a medium for collective intelligence.”",
       
      image: companyCto,
      source_code_link: "https://github.com/Harmeet135/Socials",
    },
    {
      name: "John Devadoss",
      designation : "Founding Director",
      position : "Microsoft Digital Consulting",
      description:
      "“Ideaflow is the force multiplier for business productivity in this new normal.”",
       
      image: colordetection,
      source_code_link: "https://github.com/Harmeet135/Strip-Color-Detection",
    },
    {
      name: "Tim Draper",
      designation : "Founder",
      position : "DFJ Ideaflow Investor",
      description:
      "“The amount of value that can be unlocked by connecting the right people and ideas together is incredible.”",
      image: hyperslice,
      source_code_link: "https://github.com/Harmeet135/link_shortener",
    },
  
  ];
  
  export { experiences,  projects , tech };