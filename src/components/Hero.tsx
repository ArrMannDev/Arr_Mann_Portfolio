import SplitText from "./SplitText";
import type { HeroProps } from "../type/type";

export default function Hero({ name, introText, image }: HeroProps) {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center gap-5 relative overflow-hidden"
    >
      <div className="w-full relative z-10 flex flex-row justify-center items-center gap-7">
        {/* Hero Sentences */}
        <div className="md:w-[50%] flex flex-col gap-3 items-start">
          <SplitText
            text={name}
            className="text-4xl font-bold mb-4 dark:text-white"
          />
          <p className="text-xl dark:text-white">{introText}</p>

          <button className="px-6 py-2 rounded-full bg-gray-900/30 dark:bg-gray-800/30 hover:bg-gray-800/50 dark:hover:bg-gray-800/50 border border-white/30 dark:border-gray-600 dark:text-white text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
            Resume
          </button>
        </div>
        {/* Hero Image */}
        <div className="hidden md:flex">
          <img
            src={image}
            alt=""
            width={500}
            height={500}
            className="bg-black"
          />
        </div>
      </div>
    </section>
  );
}
