import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about"
      className="py-24 px-6 relative overflow-hidden bg-(--color-bg)"
    >
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-DMMono-regular tracking-widest uppercase text-(--color-accent) mb-4">
            About Me
          </h2>
          <h1 className="text-4xl md:text-5xl font-SG-medium text-(--color-text) mb-6">
            Services, Goals & Growth
          </h1>
          <p className="text-(--color-text-secondary) font-DMMono-regular max-w-2xl mx-auto text-lg leading-relaxed">
            I am a passionate developer dedicated to creating high-quality web
            experiences. My approach combines technical expertise with a
            commitment to continuous learning and excellence.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Services Section */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-(--color-card)/30 backdrop-blur-md border border-(--color-text-secondary)/20 hover:border-(--color-accent)/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-(--color-accent)/20 flex items-center justify-center text-(--color-accent) mb-6">
              <FaCode className="text-2xl" />
            </div>
            <h3 className="text-2xl font-SG-medium text-(--color-text) mb-4">
              Services I Offer
            </h3>
            <ul className="space-y-3 text-(--color-text-secondary) font-DMMono-regular">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent)" />
                Responsive Web Development
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent)" />
                Backend API Architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent)" />
                Database Design & Management
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-(--color-accent)" />
                Performance Optimization
              </li>
            </ul>
          </motion.div>

          {/* Goals Section */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-(--color-card)/30 backdrop-blur-md border border-(--color-text-secondary)/20 hover:border-(--color-accent)/50 transition-all duration-300 shadow-xl shadow-(--color-accent)/5"
          >
            <div className="w-12 h-12 rounded-xl bg-(--color-accent)/20 flex items-center justify-center text-(--color-accent) mb-6">
              <FaRocket className="text-2xl" />
            </div>
            <h3 className="text-2xl font-SG-medium text-(--color-text) mb-4">
              My Professional Goals
            </h3>
            <p className="text-(--color-text-secondary) font-DMMono-regular leading-relaxed">
              My main goal is to build impactful software that solves complex
              problems efficiently. I strive to deliver clean, maintainable code
              and exceptional user experiences that make a difference in the
              digital world.
            </p>
          </motion.div>

          {/* Willingness to Learn Section */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-2xl bg-(--color-card)/30 backdrop-blur-md border border-(--color-text-secondary)/20 hover:border-(--color-accent)/50 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-(--color-accent)/20 flex items-center justify-center text-(--color-accent) mb-6">
              <FaLightbulb className="text-2xl" />
            </div>
            <h3 className="text-2xl font-SG-medium text-(--color-text) mb-4">
              Continuous Learning
            </h3>
            <p className="text-(--color-text-secondary) font-DMMono-regular leading-relaxed mb-4">
              I believe that stagnation is the enemy of innovation. I am always
              eager to learn and adapt to new technologies.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-(--color-accent)/10 rounded-full text-(--color-accent) text-[10px] font-bold uppercase tracking-wider">
                AI Integration
              </span>
              <span className="px-3 py-1 bg-(--color-accent)/10 rounded-full text-(--color-accent) text-[10px] font-bold uppercase tracking-wider">
                GraphQL
              </span>
              <span className="px-3 py-1 bg-(--color-accent)/10 rounded-full text-(--color-accent) text-[10px] font-bold uppercase tracking-wider">
                Cloud Native
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-(--color-accent)/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-80 h-80 bg-(--color-accent)/10 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};

export default About;
