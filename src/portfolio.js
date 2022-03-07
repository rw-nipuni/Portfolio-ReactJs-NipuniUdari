/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated:false // Set to false to use static SVG
};

const greeting = {
  
  username: "Nipuni Udari",
  title: "Hi there, I'm Nipuni Udari",
  subTitle: emoji(
    " I'm all about combining visual design with product thinking to bring meaningful experiences alive who's passionate about creating digital experiences through problem-solving. I fell in love with coding, exploring, travelling, Photography,Painting"
  ),
  resumeLink:
  "https://www.canva.com/design/DAEsTrPEOSU/KNNCHLSF8p00Z-CGUXgwTA/view?utm_content=DAEsTrPEOSU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/nipuni-udari",
  linkedin: "https://www.linkedin.com/in/nipuni-udari-922062218/",
  gmail: "96770@fhss.sjp.ac.lk",
  instagram:"https://www.instagram.com/nipuni.udari/",
  telegram:"@Udari_rajapaksha",
  behance:"https://www.behance.net/nipuniudari1",
  twitter:"https://twitter.com/NipuniUdari",
  blogger:"https://www.blogger.com/profile/15777733763543233156",
  
  facebook: "https://www.facebook.com/nipuni.udari.92",
  
  stackoverflow: "https://stackoverflow.com/users/18332438/nipuni-udari",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills",
  subTitle: "Hello! I have a passion for exploring technical world.",
  skills: [
    emoji(
      "📌 Mobile App Ui Design"
    ),
    (" I’m passionate about pushing products to the next level through a design process visually stunning user-focused UI."),
    emoji(
      "📌 Website Development"
    ),
    (" I have a passion for front end web development and have experience in coding HTML,CSS,JAVA SCRIPT"),
    emoji(
      "📌 Graphic design"
    ),
    (" I love graphic design and have experience in designing brands,logos,flyers,Book covers,Powerpoint presentations."),
    emoji(
      "📌 Mobile App Development"
    ),
    ("  I design & develop highly engaging digital experiences for the mobile using react native . Be it in, Android"),
    emoji(
      "📌 Mobile App Ui Design"
    ),
    (" I’m passionate about pushing products to the next level through a design process visually stunning user-focused UI."),
    emoji(
      "📌 Video Editing"
    ),
    ("  I have experience working on video projects for variety of purposes,and really enjoy working on video production!"),
    emoji(
      "📌 Software Development"
    ),
    ("   sometime I’m a software engineer specializing in building (and occasionally designing)exceptional digital experiences."),
    
    
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University Of Sri Jayewardenepura",
      logo: require("./assets/images/logo.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "March 2020 - Present",
      desc: "",
      descBullets: [
        "First year -: Statistics ,Media,Anthropology",
        
      ]
    },
    {
      schoolName: "National Youth Services Council",
      logo: require("./assets/images/nysc.png"),
      subHeader: "NVQ Level 4 in Information Technology",
      duration: "January 2016- March 2017",
      
      descBullets: ["Operating System,Graphic design ,networking, etc:"]
    },
    {
      schoolName: "Tangalle Girls School",
      logo: require("./assets/images/tbv.png"),
      subHeader: "Advanced level",
      duration: "January 2017- March 2020",
      
      descBullets: ["Logic,Media,Political"]
    },
    {
      schoolName: "H/ Vijayaba National School",
      logo: require("./assets/images/vns2.png"),
      subHeader: "Primary to O/L",
      duration: "January 2004-January 2017",
      
      
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Graphic Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Vedio editing",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend developing",
      progressPercentage: "60%"
    },
    {
      Stack: "Backend developing",
      progressPercentage: "50%"
    },
    {
      Stack: "UI/UX",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Graphic Designer",
      company: "Solid Graphic| Accountant.",
      companylogo: require("./assets/images/solid.png"),
      date: "April 2019 – March 2020",
      
      desc: [
        "As a right accountant I ensured that company books are balanced, company  tax obligations are covered, and that I was be able to make confident business decisions based on sound financial data.And as a graphic designer I created posters, websites, logos, brochures, magazines and many other materials to communicate ideas and information visually. "
      ]
    },
    {
      role: "Bank Assistant",
      company: "Regional Development Bank",
      companylogo: require("./assets/images/rdb.jpg"),
      date: "January 2019 – March 2019",
      desc: "As a bank assistant I have Gathered and analyzed financial and related data of customers.Assist customers in handling their deposits and check payments.Assist banking personnel in preparing and also I checked bank documents and statements and Ensure compliance of security and banking policies and guidelines in banking assistant functions."
    },
    {
      role: "Graphic Designer",
      company: "IEEE Student Branch USJP",
      companylogo: require("./assets/images/ii.png"),
      date: "July 2021 – Present",
      desc: "Institute of Electrical and Electronic Engineers is the world’s largest association of technical professionals with more than 400,000 members representing over 150 countries around the world.I could gather wide range of disciplines, including information technology, information assurance, telecommunication, nanotechnology and many more.  "
    },
    {
      role: "Task Master",
      company: "Japura Voice",
      companylogo: require("./assets/images/jv.png"),
      date: " March 2021 – Present",
      desc: "J’pura Voice,is the Official Media and Broadcasting Unit of USJ.As a taskmaster of programming division I could be a part of a lots of projects like creators aid and japura voice rebranding project and gather knowledge of vedio editing,filming,news making,dubbing and graphics.  "
    },
    {
      role: "Media Crew Member",
      company: "Leo Club of District 306 C2 USJP",
      companylogo: require("./assets/images/leo1.jpg"),
      date: " February 2021 – Present",
      desc: "Leo Club of District 306 C2 University of Sri Jayewardenepura sponsored by Lions Club of Colombo Chariot is established in the year 2019 so I could develop my leadership qualities by participating in social activities.And also I am giving my visual design support for charity."
    },
    {
      role: "Graphic designer",
      company: "SEDS J'Pura",
      companylogo: require("./assets/images/ab.png"),
      date: " February 2021 – Present",
      desc: "Students for the Exploration and Development of Space (SEDS) is a 501(c)3 non-profit that empowers young people to participate and make an impact in space exploration.As a web developer and graphic designer I could be able to participate in national projects as well as to attend conferences, publish their work, and develop their professional network, in order to help students, become more effective in their present and future careers in industry, academia, government, and education. "
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "There are many kind of projects I have done so far.",
  projects: [
    {
      image: require("./assets/images/j1.png"),
      projectName: "Coffee table book",
      projectDesc: "This coffee table book is a must-have for anyone who loves horror .I have included so many interesting characters.logos are designed using illustrator except them totaly book is designed using photoshop.",
      
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.behance.net/gallery/138281981/Cooffe-table-book"
        },
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/j2.png"),
      projectName: "Hotel Website",
      projectDesc: "I have designed Website for cinnman lodge hotel.It contains Facilities,Gallery,contacts,services etc:And Html,css,Js are used for it",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://gdlmmuf5mkdbjxbzimtqhq-on.drv.tw/www.cinnomanhotel.com/Cinnoman%20Hotel%20Website/Main.html"
        },
        {
          name: "view Source code",
          url: "https://github.com/rw-nipuni"
        }
      ]
    },
    {
      image: require("./assets/images/j4.png"),
      projectName: "Mobile Application development",
      projectDesc: "I have delevopled full stack E commerce App using react native and backend developed using Google firebase",
      footerLink: [
        
        {
          name: "view Source code",
          url: "https://github.com/rw-nipuni"
        }
      ]
    },{
      image: require("./assets/images/j3.png"),
      projectName: "School Management System",
      projectDesc: "The system would record student information, student enrollment, fees- collected. It cannot be altered or modified by other users (students, registrar, cashier & teachers) except for the administrator.It develops using Java",
      footerLink: [
        
        {
          name: "view Source code",
          url: "https://github.com/rw-nipuni"
        }
      ]
    },
    {
      image: require("./assets/images/j5.png"),
      projectName: "Employee and Payroll management system",
      projectDesc: "This Software is designed to make the existing manual system automatic with the help of computerized equipment and full-edged computer software, fulfilling their requirements, so that their valuable data and information can be stored for a longer period with easy access and manipulation of the same using.",
      footerLink: [
        
        {
          name: "view Source code",
          url: "https://github.com/rw-nipuni"
        }
      ]
    },
    {
      image: require("./assets/images/j6.png"),
      projectName: "App UI Design",
      projectDesc: "The first impressions are 94% design related.I designed a Mobile App using figma online tool.It contains Splash screens,Onboarding Screens,Login and profile screens,cart, Checkout screens and other E commerce screens.Accourding to the given feedbacks it is a user friendly UI",
      footerLink: [
        
        {
          name: "view Prototype",
          url: "https://www.figma.com/proto/SeQDpKXI3DzPL6HvQUeYS3/FINAL-PROJECT-Xpress-E-TECH-APP-(AF%2F18%2F14804)?node-id=3%3A5&scaling=scale-down&page-id=0%3A1&starting-point-node-id=3%3A2&show-proto-sidebar=1"
        },
        {
          name: "view Template",
          url: "https://www.figma.com/file/SeQDpKXI3DzPL6HvQUeYS3/FINAL-PROJECT-Xpress-E-TECH-APP-(AF%2F18%2F14804)?node-id=29%3A196"
        },

      ]
    },
    {
      image: require("./assets/images/jv flyer -2.jpg"),
      projectName: "Graphic designs",
      projectDesc: "Flyers,Posters,Coffee table book,logos,digital Arts,Presentations using photoshop & Illustrator.",
      
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.behance.net/nipuniudari1"
        },
        //  you can add extra buttons here.
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    },
   

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://nipuni-udari.blogspot.com/2022/02/role-of-mass-media-in-managing-covid-19.html",
      title: "Role of mass media in managing Covid-19 Pandemic",
      description:
        "COVID-19 is a global crisis that has spread throughout the world at a dangerously fast pace. Mass media plays a huge role in circulating information, influences the public behavior and can curtail the spread of disease. "
    },
    {
      url: "https://nipuni-udari.blogspot.com/2022/02/how-new-media-changed-fundamental.html",
      title: "How New Media Changed the Fundamental Nature of the Communication",
      description:
        "The emergence of globalization  in the first decade of the twenty-first century was itself a revolution in the short history of the New media, fostering the rise of social media and other interactive, crowd-based communication tools."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Talks",
  subtitle: emoji(
    "I'd love to hear from you, just to discuss anything.I love to talk about myself & technology"
  ),

  talks: [
    {
      title: "Email me",
      subtitle: "Feel free to ask anything",
      slides_url: "mailto:96770@fhss.sjp.ac.lk",
      
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Feel free to snoop around on my SOCIAL MEDIA.",
  number: "+94-711064083",
  email_address: "96770@fhss.sjp.ac.lk"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
