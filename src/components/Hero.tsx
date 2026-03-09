import { motion } from "framer-motion";
import SplitText from "./SplitText";
import GridBackground from "./GridBackground";
import type { HeroProps } from "../type/type";

export default function Hero({ name, introText, image }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden dark:bg-(--color-bg) bg-[#dbdee1] transition-colors duration-500"
    >
      {/* Decorative Background */}
      <GridBackground />

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-(--color-accent) opacity-20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-(--color-accent) opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="self-start px-3 py-1 rounded-full border-(--color-text-secondary)/30 bg-(--color-card)/30 backdrop-blur-sm text-(--color-accent) text-xs font-DMMono-regular flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-(--color-accent) animate-pulse" />
            Available for New Projects
          </motion.div>

          <div className="space-y-2">
            <h2 className="text-(--color-text-secondary) font-DMMono-regular text-sm tracking-widest uppercase mb-2">
              Front-end & Back-end Developer
            </h2>
            <SplitText
              text={name}
              tag="h1"
              textAlign="left"
              className="text-4xl md:text-6xl font-SG-medium leading-tight text-(--color-text) tracking-tight"
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg md:text-xl text-(--color-text-secondary) font-DMMono-regular max-w-lg leading-relaxed"
          >
            {introText}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="px-8 py-3 rounded-xl bg-(--color-accent) text-black font-semibold hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-(--color-accent)/20">
              Work with me
            </button>
            <button className="px-8 py-3 rounded-xl border-(--color-text-secondary)/30 bg-(--color-card)/50 backdrop-blur-md text-(--color-text) font-semibold hover:bg-(--color-card) transition-all">
              View Projects
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Visual Area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="hidden md:flex relative justify-center items-center"
        >
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
            {/* Animated rings/elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-(--color-accent)/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 border border-dashed border-(--color-text-secondary)/10 rounded-full"
            />

            {/* Main Visual Container */}
            <div className="absolute inset-4 overflow-hidden rounded-3xl bg-linear-to-br from-(--color-card) to-(--color-bg) border-(--color-text-secondary)/20 shadow-2xl flex items-center justify-center group">
              {image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              ) : (
                <div className="text-8xl opacity-10 font-bold select-none text-(--color-text)">
                  AM
                </div>
              )}
            </div>

            {/* Floating Decorative Elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-12 h-12 bg-(--color-accent) rounded-lg rotate-12 flex items-center justify-center text-black font-bold text-xl shadow-lg"
            >
              js
            </motion.div>
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 left-12 w-10 h-10 bg-(--color-text-secondary) rounded-full flex items-center justify-center text-white p-2 shadow-lg"
            >
              <div className="w-full h-full border-t-2 border-r-2 border-white rounded-tr-sm" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
