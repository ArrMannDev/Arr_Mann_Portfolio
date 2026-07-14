import type { ProjectShowProps } from "./type/type";

import gymImg from "./assets/img/ygn-gym.png";
import AI_Model_Scaling from "./assets/img/AI_Model_Scaling.png";
import Snap_Zone from "./assets/img/Snap Zone.png";
import fireDetectionImage from "./assets/img/Fire_Alarm_Knn.png"
import patientClusteringImage from "./assets/img/DBSCAN.png"
import supportTicketAutomation from "./assets/img/Support-Ticket.png"

export const projects: ProjectShowProps[] = [
  {
    id: "1",
    title: "YGN GYM",
    description:
      "A full-stack mobile-responsive web application for a gym management system with an admin dashboard panel.",
    image: gymImg,
    techStack: [
      "React",
      "Tailwind",
      "Nest.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
    ],
    githubUrl: "https://github.com/ArrMannDev/ygn_frontend.git",
    demoUrl: "https://ygngym.vercel.app/",
    category: "Web",
  },
  {
    id: "2",
    title: "AI Model Scaling Calculator",
    description:
      "A mobile-responsive calculator for exploring AI model scaling relationships with interactive charts and visual data.",
    image: AI_Model_Scaling,
    techStack: ["React", "Tailwind", "Recharts"],
    githubUrl: "https://github.com/ArrMannDev/Model-Scaling-Calculator",
    demoUrl: "https://model-scaling-calculator.vercel.app/",
    category: "ML",
  },
  {
    id: "3",
    title: "Photo Uploader",
    description:
      "A web application that allows users to upload, store, and manage their images.",
    image: Snap_Zone,
    techStack: ["EJS", "Tailwind", "Express.js", "MySQL"],
    githubUrl: "https://github.com/ArrMannDev/Photo-Uploader",
    demoUrl: "https://github.com/ArrMannDev/Photo-Uploader",
    category: "Web",
  },
  {
    id: "4",
    title: "IoT Fire Detection Classifier",
    description:
      "A machine-learning project that uses the K-Nearest Neighbors algorithm to detect fire from IoT sensor measurements. The model processes temperature, humidity, gas, pressure, and particle data and achieved nearly 100% test accuracy.",
    image: fireDetectionImage,
    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "KNN",
      "Matplotlib",
      "Jupyter Notebook",
    ],
    githubUrl: "https://github.com/ArrMannDev/FIre-Alarm-Model-",
    demoUrl: "https://github.com/ArrMannDev/FIre-Alarm-Model-",
    category: "ML",
  },
  {
    id: "5",
    title: "Abnormal Patient Clustering",
    description:
      "An unsupervised machine-learning project that uses DBSCAN to group patient records and detect unusual health patterns from blood glucose, oxygen saturation, body temperature and heart-rate data.",
    image: patientClusteringImage,
    techStack: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "DBSCAN",
      "PCA",
      "Matplotlib",
    ],
    githubUrl: "YOUR_GITHUB_URL",
    demoUrl: "YOUR_DEMO_URL",
    category: "ML",
  },
  {
    id: "6",
    title: "AI Customer Support Automation",
    description:
      "An n8n workflow that automatically processes customer support tickets submitted through Google Forms. The workflow updates Google Sheets, sends email confirmations, and routes notifications to different Telegram support teams based on ticket categories.",
    image: supportTicketAutomation,
    techStack: [
      "n8n",
      "Google Sheets",
      "Gmail API",
      "Telegram Bot API",
      "Google Forms"
    ],
    githubUrl: "...",
    demoUrl: "...",
    category: "n8n",
  }
];