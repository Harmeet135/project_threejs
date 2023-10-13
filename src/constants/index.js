import {
    
    amb,
    ts,
    companyCto,
    colordetection,
    hyperslice,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Home",
    },
    {
      id: "We are hiring",
      title: "We are hiring+",
    },
    {
      id: "Email",
      title: "Contact",
    },
  ];
  
  
  const experiences = [
    {
      title: "Connecting people with matching puzzle pieces",
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
  
  export { experiences,  projects  };