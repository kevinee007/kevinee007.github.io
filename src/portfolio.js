/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Kevin Lee",
  title: "Hello, I'm Kevin",
  subTitle: emoji(
    "An expert when it comes to working with WordPress and WooCommerce. Have designed and developed everything from simple web pages to intricate e-commerce websites. Will strive to get your rave reviews by completing projects on time and on budget, communicating in a professional way and treating each client with the utmost respect."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1mTUkwtyEKZuZytQTerm3dBl4eY3tqoxn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kevinee007/",
  linkedin: "https://www.linkedin.com/in/kevinee007/",
  gmail: "kevinee0070@gmail.com",
  gitlab: "https://gitlab.com/kevinee007",
  facebook: "https://www.facebook.com/kevinee007",
  medium: "https://medium.com/@kevinee007",
  stackoverflow: "https://stackoverflow.com/users/7853914/kevin-lee",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "WordPress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Magento",
      fontAwesomeClassname: "fab fa-magento"
    },
    {
      skillName: "Shopify",
      fontAwesomeClassname: "fab fa-shopify"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Toronto - Victoria University",
      logo: require("./assets/images/victoriacollegeLogo.png"),
      subHeader: "Bachelor of Commerce (B.Com.), Computer Programming",
      duration: "2004 - 2007",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Blockchain Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "WordPress & Shopify & JavaScript Developer testtest",
      company: "Meaningful Marketing",
      companylogo: require("./assets/images/meaningfulmarketingLogo.png"),
      date: "2019 to Present",
      desc: "Working as a member of web developer.",
      descBullets: [
        "Website Setup & Development - Get your store up and running, with options ranging from basic theme setup to completely custom solutions for your existing business or business idea.",
        "Theme Development - Do you want to have unique your website theme? We can build a custom theme to fit the unique needs of your business.",
        "Theme Customization - Customizing theme functionalities for the best customer experience.",
        "Plugin/App Development & Management - Installing an existing WorPress Plugin & Shopify app or developing a new custom app.",
        "Site Performance & Speed - Analyzing and Improving website site performance and speed.",
        "Store Migration - Migrating your existing store to WooCommerce & Shopify.",
        "Troubleshooting & Bug Fixing - We can troubleshoot and fix any bugs on your website."
      ]
    },
    {
      role: "WordPress & WooCommerce Developer",
      company: "Upwork",
      companylogo: require("./assets/images/upworkLogo.png"),
      date: "2016 to Present",
      desc: "Working as a member of web developer ",
      descBullets: [
        "As a WordPress expert who specializes in WordPress & WooCommerce, building responsive websites and custom theme/plugin development.",
        "Feel free to reach out if I can answer any questions for you or if you'd like to provide more details on your current project.",
        "Most of my clients I've never met in person, so I'm very familiar with the nuances of remote work.",
        "I'm professional, friendly, communicate well, and meet deadlines.",
        "I usually work on my own but very much enjoy working with teams.",
        "I use Git on a regular basis, including my solo jobs.."
      ]
    },
    {
      role: "WordPress & WooCommerce Developer",
      company: "Trienekens Online",
      companylogo: require("./assets/images/trienekensonlineLogo.png"),
      date: "2021 to Present",
      desc: "Working as a WordPress & WooCommerce Developer",
      descBullets: [
        "Develop WordPress Custom Themes",
        "Develop WordPress Custom Plugins",
        "Customize WordPress Themes",
        "Customize WordPress Plugins",
      ]
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
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Juwelief-van-hooff-logo.png"),
      projectName: "Juwelier van Hooff",
      projectDesc: "Home, Shop, Plugin(WooCommerce) Customization",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.juwelier-vanhooff.nl/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/logo-pepper.png"),
      projectName: "PepperStore",
      projectDesc: "I built this website from scratch.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pepperstore.es/"
        }
      ]
    }
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
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 720 316 1849",
  email_address: "kevinee007@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
