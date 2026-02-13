// Portfolio Data - Update this file to modify your portfolio content

export const personalInfo = {
  name: "Basavaraj M G",
  title: "Full Stack Developer",
  tagline: "Building modern web experiences with the MERN stack",
  bio: "A passionate Full Stack Developer specializing in the MERN stack with hands-on experience in building scalable web applications. Currently pursuing Bachelor of Engineering in Computer Science and Engineering at Canara Engineering College, Bantwal, Mangalore. Experienced in developing full-stack applications with modern frameworks and tools.",
  email: "basavarajgudasalamani@gmail.com",
  github: "https://github.com/basavarajmg450-oss",
  linkedin: "https://www.linkedin.com/in/basavaraj-gudasalamani/",
  location: "Mangalore, Karnataka, India",
  education: {
    degree: "Bachelor of Engineering in Computer Science and Engineering",
    institution: "Canara Engineering College, Bantwal, Mangalore",
    year: "2023 - 2027"
  },
  internships: [
    {
      company: "Skolar",
      role: "Full Stack Developer Intern",
      period: "June 2024 - Present",
      description: "Working on full-stack development projects using MERN stack"
    }
  ]
};

export const skills = {
  languages: [
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Java", icon: "FaJava" },
    { name: "HTML5", icon: "SiHtml5" },
    { name: "CSS3", icon: "SiCss3" }
  ],
  frontend: [
    { name: "React", icon: "SiReact" },
    { name: "Redux", icon: "SiRedux" },
    { name: "Tailwind CSS", icon: "SiTailwindcss" },
    { name: "Bootstrap", icon: "SiBootstrap" },
    { name: "Material-UI", icon: "SiMui" },
    { name: "Vite", icon: "SiVite" }
  ],
  backend: [
    { name: "Node.js", icon: "SiNodedotjs" },
    { name: "Express.js", icon: "SiExpress" },
    { name: "REST API", icon: "SiPostman" },
    { name: "JWT", icon: "SiJsonwebtokens" }
  ],
  databases: [
    { name: "MongoDB", icon: "SiMongodb" },
    { name: "MySQL", icon: "SiMysql" },
    { name: "PostgreSQL", icon: "SiPostgresql" }
  ],
  tools: [
    { name: "Git", icon: "SiGit" },
    { name: "GitHub", icon: "SiGithub" },
    { name: "VS Code", icon: "FaCode" },
    { name: "Postman", icon: "SiPostman" },
    { name: "npm", icon: "SiNpm" },
    { name: "Vercel", icon: "SiVercel" },
    { name: "Linux", icon: "SiLinux" }
  ]
};

export const projects = [
  {
    id: 1,
    title: "EduHub – College Management & Student Portal",
    description: "A web-based college management platform that provides students and staff with features like attendance tracking, event management, and an AI chatbot for campus-related queries, all in one system.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/basavarajmg450-oss/eduhub.git",
    featured: true
  },
  {
    id: 2,
    title: "Temple Tourism – Travel & Temple Guide Website",
    description: "A web application that provides information about famous temples and nearby tourist places, helping users plan visits with details like location, timings, and highlights.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/basavarajmg450-oss/temple-tourism.git",
    featured: false
  },
  {
    id: 3,
    title: "Hostel Hub – Hostel Management System",
    description: "A comprehensive hostel management system with separate dashboards for students, wardens, and admins. Features include complaint management, room allocation, and visitor tracking.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/basavarajmg450-oss/hostel-hub.git",
    featured: false
  },
  {
    id: 4,
    title: "MiniProject – AI Posture Detection System",
    description: "An AI-based posture detection system that uses machine learning to analyze body posture and provide feedback, integrated into a MERN stack web application for visualization and user interaction.",
    tech: ["Machine Learning (Python)", "React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/01Bhavith/Mini-project.git",
    featured: false
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/basavarajmg450-oss",
    icon: "FaGithub"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/basavaraj-gudasalamani/",
    icon: "FaLinkedin"
  },
  {
    name: "Email",
    url: "mailto:basavarajgudasalamani@gmail.com",
    icon: "FaEnvelope"
  }
];
