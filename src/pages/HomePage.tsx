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
      title: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      year: "2019 - 2023",
      description:
        "Focused on software engineering, algorithms, and web technologies. Graduated with honors.",
    },
    {
      id: 2,
      title: "High School Diploma",
      institution: "High School Name",
      year: "2017 - 2019",
      description:
        "Participated in coding club and won several regional math competitions.",
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
