import Hero from "../components/Hero";

export default function HomePage() {
  const introText =
    "I have 1+ year of experience in front-end and back-end development, I combine clean design with strong logic to build efficient, user-friendly web applications.";
  return (
    <div className="flex flex-col min-h-screen dark:bg-[#0F172A] bg-[#F2F1F0]">
      <Hero name="Hello, I'm Arr Mann" introText={introText} image="" />

      <div className="w-full h-[500px]"></div>
    </div>
  );
}
