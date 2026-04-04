import Hero from "../components/Hero";
import profilePic from "../assets/img/Profile.jpg";
import ProjectShow from "../components/ProjectShow";
import About from "../components/About";
import Educatuion from "../components/Educatuion";
import type { EducationItem } from "../type/type";

export default function HomePage() {
  const introText =
    "With over a year of experience in front-end and back-end development, I combine clean design and solid logic to create efficient, user-friendly web applications.";

  const educationData: EducationItem[] = [
    {
      id: 1,
      title: "BSC (HONS) IN COMPUTER SCIENCE",
      institution: "University of Sunderland",
      year: "Coming Soon",
      description: "-",
    },
    {
      id: 2,
      title: "HND Diploma in Computing",
      institution: "Youth International College (YIC)",
      year: "2024-2025",
      description:
        "Focused on software engineering, algorithms, web technologies and machine learning. Graduated with honors.",
    },
    {
      id: 3,
      title: "BTEC International Level 3 Diploma in IT",
      institution: "Youth International College (YIC)",
      year: "2022-2023",
      description:
        "Focused on software development lifecycle, web technologies, hardware and networking. Graduated with honors.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen dark:bg-[#0F172A] bg-[#F2F1F0]">
      <Hero
        name="Hello, I'm Arr Mann"
        introText={introText}
        image={profilePic}
      />
      <About />
      <ProjectShow />
      <Educatuion educationData={educationData} />
    </div>
  );
}
