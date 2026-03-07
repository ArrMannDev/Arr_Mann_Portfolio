import { motion } from "framer-motion";
import SplitText from "./SplitText";
import type { HeroProps } from "../type/type";

export default function Hero({ name, introText, image }: HeroProps) {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center gap-5 relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]"
    >
      <div className="w-full relative z-10 flex flex-row justify-center items-center gap-13">
        {/* Hero Sentences */}
        <div className="md:w-[50%] flex flex-col gap-3 items-start">
          <SplitText
            text={name}
            className="text-5xl font-SG-medium mb-4 text-[var(--color-text)]"
          />

          <p className="w-[85%] tracking-wide text-xl text-[var(--color-text-secondary)] font-DMMono-regular">
            {introText}
          </p>

          <button className="px-6 py-2 mt-4 rounded-full bg-[var(--color-card)] text-[var(--color-text)] border border-[var(--color-text-secondary)] text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg">
            Resume
          </button>
        </div>

        {/* Hero Image */}
        <motion.div
          className="hidden md:flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt=""
            width={500}
            height={500}
            className="bg-[var(--color-card)] rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
