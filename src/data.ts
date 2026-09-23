import profileImage from "./assets/img/ArrMann.png";
import resumePdf from "./assets/img/ArrMannResume.pdf";
import gymImage from "./assets/img/ygn-gym.png";
import modelScalingImage from "./assets/img/AI_Model_Scaling.png";
import photoUploaderImage from "./assets/img/Snap Zone.png";
import fireDetectionImage from "./assets/img/Fire_Alarm_Knn.png";
import patientClusteringImage from "./assets/img/DBSCAN.png";
import supportTicketImage from "./assets/img/Support-Ticket.png";
import aPlusCertificate from "./assets/img/certificates/A+-certificate.png";
import level3Diploma from "./assets/img/certificates/level3-diploma.png";
import level3Result from "./assets/img/certificates/level3-result.png";
import level5Diploma from "./assets/img/certificates/level5-diploma.png";
import level5ResultOne from "./assets/img/certificates/level5-result-1.png";
import level5ResultTwo from "./assets/img/certificates/level5-result-2.png";
import pythonCertificate from "./assets/img/certificates/python.jpg";

export type ProjectCategory = "Web" | "Machine Learning" | "Automation";

export type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  category: ProjectCategory;
  role: string;
  outcome?: string;
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
};

export type Education = {
  id: string;
  title: string;
  institution: string;
  period: string;
  status: "completed" | "planned";
  description: string;
};

export const portfolioData = {
  person: {
    name: "Arr Mann Win Myint",
    shortName: "Arr Mann",
    initials: "AM",
    role: "Full-Stack Developer",
    location: "Myanmar",
    availability: "Available for selected work",
    profileImage,
    resumePdf,
    introduction:
      "I’m a Full-Stack Developer turning real requirements into maintainable products, with equal attention to interface, logic, and everyday usability.",
    about:
      "I am a developer focused on turning real requirements into maintainable products. I care about the interface, the logic behind it, and how both perform in daily use.",
    githubUrl: "https://github.com/ArrMannDev",
    email: "arrmann632025@gmail.com",
    phone: "+95 9 777 217 538",
    phoneHref: "tel:+959777217538",
  },
  focusAreas: [
    "Web applications",
    "Backend APIs",
    "Workflow automation",
    "Applied machine learning",
  ],
  capabilities: [
    {
      title: "Product interfaces",
      description:
        "Responsive React experiences with clear interaction patterns.",
    },
    {
      title: "Backend systems",
      description:
        "APIs, relational data models, authentication, and deployment.",
    },
    {
      title: "Workflow automation",
      description: "Connected processes using n8n, messaging, and Google APIs.",
    },
    {
      title: "Applied data work",
      description: "Exploratory machine learning and practical visualizations.",
    },
  ],
  skills: {
    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    backend: ["Node.js", "NestJS", "Express.js", "REST APIs", "Prisma"],
    dataAndMachineLearning: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "DBSCAN",
      "KNN",
    ],
    databasesAndTools: ["PostgreSQL", "MySQL", "Supabase", "n8n", "Git"],
  },
  projects: [
    {
      id: "ygn-gym",
      title: "YGN GYM",
      description:
        "A responsive gym management platform with member-facing flows and an administration dashboard.",
      image: gymImage,
      techStack: ["React", "Nest.js", "PostgreSQL", "Prisma", "TypeScript"],
      category: "Web",
      role: "Full-stack development",
      outcome:
        "One system for managing day-to-day gym operations across desktop and mobile.",
      githubUrl: "https://github.com/ArrMannDev/ygn_frontend.git",
      demoUrl: "https://ygngym.vercel.app/",
      featured: true,
    },
    {
      id: "model-scaling-calculator",
      title: "AI Model Scaling Calculator",
      description:
        "An interactive calculator that makes AI model scaling relationships easier to explore through charts and responsive inputs.",
      image: modelScalingImage,
      techStack: ["React", "Tailwind", "Recharts"],
      category: "Machine Learning",
      role: "Frontend and data visualization",
      outcome: "Turns model-scaling concepts into a hands-on browser tool.",
      githubUrl: "https://github.com/ArrMannDev/Model-Scaling-Calculator",
      demoUrl: "https://model-scaling-calculator.vercel.app/",
      featured: true,
    },
    {
      id: "photo-uploader",
      title: "Photo Uploader",
      description:
        "A web application for uploading, storing, and managing image collections.",
      image: photoUploaderImage,
      techStack: ["EJS", "Tailwind", "Express.js", "MySQL"],
      category: "Web",
      role: "Full-stack development",
      githubUrl: "https://github.com/ArrMannDev/Photo-Uploader",
    },
    {
      id: "iot-fire-detection",
      title: "IoT Fire Detection Classifier",
      description:
        "A K-Nearest Neighbors classifier that evaluates IoT sensor readings to identify fire conditions.",
      image: fireDetectionImage,
      techStack: ["Python", "Pandas", "Scikit-learn", "KNN", "Jupyter"],
      category: "Machine Learning",
      role: "Machine learning",
      githubUrl: "https://github.com/ArrMannDev/FIre-Alarm-Model-",
    },
    {
      id: "patient-clustering",
      title: "Abnormal Patient Clustering",
      description:
        "A DBSCAN study that groups patient records and identifies unusual health patterns across multiple measurements.",
      image: patientClusteringImage,
      techStack: ["Python", "Pandas", "DBSCAN", "PCA", "Matplotlib"],
      category: "Machine Learning",
      role: "Data analysis and clustering",
    },
    {
      id: "support-ticket-automation",
      title: "Support Ticket Automation",
      description:
        "An n8n workflow that records support requests, confirms submissions, and routes alerts to the correct support team.",
      image: supportTicketImage,
      techStack: ["n8n", "Google Sheets", "Gmail API", "Telegram Bot API"],
      category: "Automation",
      role: "Workflow automation",
    },
  ] satisfies Project[],
  education: [
    // {
    //   id: "bsc-computer-science",
    //   title: "BSc (Hons) Computer Science",
    //   institution: "University of Sunderland",
    //   period: "Upcoming",
    //   status: "planned",
    //   description: "Planned next step in my computer science education.",
    // },
    {
      id: "hnd-computing",
      title: "Higher National Diploma in Computing",
      institution: "Youth International College (YIC)",
      period: "2023-2025",
      status: "completed",
      description:
        "Software engineering, algorithms, web technologies, and machine learning.",
    },
    {
      id: "python-data-analysis",
      title: "Python for Data Analysis",
      institution: "Click Top Engineering Co., Ltd.",
      period: "10 Jan 2025 - 12 March 2025",
      status: "completed",
      description:
        "Python programming, NumPy, Pandas, data visualization, and exploratory data analysis.",
    },
    {
      id: "kmd-a-plus",
      title: "KMD A+ Course",
      institution: "KMD",
      period: "28 Dec 2023 - 18 Jan 2024",
      status: "completed",
      description: "Computer hardware, troubleshooting, and IT support fundamentals.",
    },
    {
      id: "btec-it",
      title: "BTEC International Level 3 Diploma in IT",
      institution: "Youth International College (YIC)",
      period: "2022-2023",
      status: "completed",
      description:
        "Software development lifecycle, web technologies, hardware, and networking.",
    },
  ] satisfies Education[],
  certificates: [
    {
      id: "python-data-analysis",
      title: "Python for Data Analysis",
      issuer: "Click Top Engineering Co., Ltd.",
      image: pythonCertificate,
    },
    {
      id: "level3-diploma",
      title: "BTEC International Level 3 Diploma",
      issuer: "Pearson",
      image: level3Diploma,
    },
    {
      id: "level3-result",
      title: "BTEC International Level 3 Results",
      issuer: "Pearson",
      image: level3Result,
    },
    {
      id: "level5-diploma",
      title: "HND Diploma in Computing",
      issuer: "Youth International College (YIC)",
      image: level5Diploma,
    },
    {
      id: "level5-result-1",
      title: "HND Computing Results 1",
      issuer: "Youth International College (YIC)",
      image: level5ResultOne,
    },
    {
      id: "level5-result-2",
      title: "HND Computing Results 2",
      issuer: "Youth International College (YIC)",
      image: level5ResultTwo,
    },
    {
      id: "a-plus",
      title: "A+ Certification",
      issuer: "Professional certificate",
      image: aPlusCertificate,
    },
  ],
} as const;
