import SplitText from "./SplitText";
import type { HeroProps } from "../type/type";

export default function Hero({ name, introText, image }: HeroProps) {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center gap-5 relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="w-full relative z-10 flex flex-row justify-center items-center gap-7">
        {/* Hero Sentences */}
        <div className="md:w-[50%] flex flex-col gap-3 items-start">
          <SplitText
            text={name}
            className="text-4xl font-bold mb-4 text-[var(--color-text)]"
          />

          <p className="text-xl text-[var(--color-text-secondary)]">
            {introText}
          </p>

          <button className="px-6 py-2 rounded-full bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-text-secondary)] text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
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
            className="bg-[var(--color-card)] rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
