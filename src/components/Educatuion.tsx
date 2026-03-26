import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaCalendarAlt } from "react-icons/fa";
import type { EducationItem } from "../type/type";

type CertificateItem = {
  id: number;
  title: string;
  issuer: string;
  year: string;
};

const certificatesData: CertificateItem[] = [
  {
    id: 1,
    title: "Full Stack Web Developer",
    issuer: "Coursera",
    year: "2023",
  },
  {
    id: 2,
    title: "React Native Specialist",
    issuer: "Udemy",
    year: "2024",
  },
  {
    id: 3,
    title: "Cloud Computing Fundamentals",
    issuer: "AWS",
    year: "2024",
  },
];

export default function Educatuion({
  educationData,
}: {
  educationData: EducationItem[];
}) {
  return (
    <div
      id="education"
      className="w-full flex flex-col justify-center items-center bg-(--color-bg) py-24 px-4 md:px-8 text-(--color-text) overflow-hidden"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-DMMono-regular font-bold mb-4">
          Education &{" "}
          <span className="text-(--color-accent)">Certificates</span>
        </h1>
        <p className="text-lg text-(--color-text-secondary) max-w-2xl mx-auto">
          My academic journey and professional certifications that have shaped
          my path in tech.
        </p>
      </motion.div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-center items-start gap-12 md:gap-16">
        {/* Left Side: Education Timeline */}
        <div className="w-full md:w-1/2 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12 bg-(--color-accent)/20 rounded-xl flex justify-center items-center">
              <FaGraduationCap className="text-2xl text-(--color-accent)" />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative border-l-2 border-(--color-accent)/30 ml-6 flex flex-col gap-10 pb-8">
            {educationData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-8 md:pl-10"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[11px] top-6 w-5 h-5 bg-(--color-accent) rounded-full border-4 border-(--color-bg) shadow-sm"></div>

                {/* Content Card */}
                <div className="group bg-(--color-card) p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-(--color-text-secondary)/10 hover:border-(--color-accent)/50">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-(--color-accent) transition-colors">
                    {item.title}
                  </h3>
                  <h4 className="text-md font-semibold text-(--color-text-secondary) mb-3">
                    {item.institution}
                  </h4>
                  <div className="inline-flex items-center gap-2 text-sm text-[#ffffff] bg-(--color-accent) px-3 py-1 rounded-full mb-4 shadow-sm">
                    <FaCalendarAlt />
                    <span>{item.year}</span>
                  </div>
                  <p className="text-(--color-text-secondary) leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Certificates Cards */}
        <div className="w-full md:w-1/2 flex flex-col">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-12 bg-(--color-accent)/20 rounded-xl flex justify-center items-center">
              <FaAward className="text-2xl text-(--color-accent)" />
            </div>
            <h2 className="text-3xl font-bold">Certificates</h2>
          </motion.div>

          <div className="flex flex-col gap-6 ml-0 md:ml-4">
            {certificatesData.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative flex items-center gap-5 p-5 md:p-6 bg-(--color-card) rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-(--color-text-secondary)/10 hover:border-(--color-accent)/50 z-10 overflow-hidden"
              >
                {/* Accent glow behind icon */}
                <div className="absolute -left-6 -top-6 w-24 h-24 bg-(--color-accent)/10 rounded-full blur-xl group-hover:bg-(--color-accent)/20 transition-all duration-500 -z-10"></div>

                <div className="w-16 h-16 shrink-0 rounded-2xl bg-(--color-bg) flex justify-center items-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                  <FaAward className="text-3xl text-(--color-accent)" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-(--color-accent) transition-colors">
                    {cert.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-(--color-text-secondary)">
                    <span className="font-semibold px-2 py-1 bg-(--color-text-secondary)/10 rounded-md">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {cert.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
