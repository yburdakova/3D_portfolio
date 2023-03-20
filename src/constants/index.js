import {
    git,
    figma,
    swift,
    phyton,
    XCode,
    django,

    signtist_logo,
    singtist_scr01,
    singtist_scr02,
    singtist_scr03,
    singtist_scr04,
} from "../assets";

const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Projects",
    },

    {
      id: "contact",
      title: "Contact",
    },
  ];

  
  const technologies = [
    
    {
      name: "Swift",
      icon: swift,
    },
    {
      name: "Phyton",
      icon: phyton,
    },
    {
      name: "XCode",
      icon: XCode,
    },
    {
      name: "Django",
      icon: django,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "Signtist",
      shortdescription:
        "The iOS App helps users learn about road signs through a user-friendly interface, including a comprehensive list of signs, illustrations, and quizzes. Users can improve their road safety and driving skills using this App.",
      fulldescription:
        "An iOS app for learning road signs developed using Swift is a mobile application that helps users learn about various road signs and their meanings. This app can be used by individuals who are learning to drive or those who simply want to refresh their knowledge of road signs. The app is designed with a user-friendly interface and includes a comprehensive list of road signs along with their descriptions and illustrations. The app allows users to take quizzes to test their knowledge of the different road signs and provides feedback on their progress. With this app, users can improve their road safety and driving skills.",
      
        tags: [
          {
              name: "iOS",
              color: "blue-text-gradient",
          },
          {
              name: "swift",
              color: "green-text-gradient",
          },
      ],
      logo: signtist_logo,
      source_code_link: "https://github.com/boomag77/USDriver",
      images: [singtist_scr01, singtist_scr02, singtist_scr03],
    },
  ];
  
  export { navLinks, technologies, projects };