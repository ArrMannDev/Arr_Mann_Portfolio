import Hero from "../components/Hero";
import profilePic from "../assets/img/Profile.jpg";

export default function HomePage() {
  const introText =
    "With over a year of experience in front-end and back-end development, I combine clean design and solid logic to create efficient, user-friendly web applications.";
  return (
    <div className="flex flex-col min-h-screen dark:bg-[#0F172A] bg-[#F2F1F0]">
      <Hero
        name="Hello, I'm Arr Mann"
        introText={introText}
        image={profilePic}
      />
    </div>
  );
}
