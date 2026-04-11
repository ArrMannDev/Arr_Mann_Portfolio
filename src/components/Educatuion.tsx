import { motion } from "framer-motion";
import { FaGraduationCap, FaAward, FaCalendarAlt } from "react-icons/fa";
import { useState } from "react"; // ✅ added
import type { EducationItem } from "../type/type";
import Folder from "../ui/Folder";
import type { CertificateItem } from "../type/type";
import cert1 from "../assets/img/Level_3_Certificate.jpg";
import cert2 from "../assets/img/A+.jpg";
import cert3 from "../assets/img/python.jpg";

const certificatesData: CertificateItem[] = [
  {
    id: 1,
    image: cert1,
    title: "BTEC Level-3",
  },
  {
    id: 2,
    image: cert2,
    title: "A+",
  },
  {
    id: 3,
    image: cert3,
    title: "Python Basic",
  },
];

export default function Educatuion({
  educationData,
}: {
  educationData: EducationItem[];
}) {
  // ✅ added state
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                <div className="absolute -left-[11px] top-6 w-5 h-5 bg-(--color-accent) rounded-full border-4 border-(--color-bg) shadow-sm"></div>

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

        {/* Right Side: Certificates */}
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

          <div className="flex flex-col justify-center items-center gap-6 ml-0 md:ml-4">
            <div className="text-center max-w-md">
              <p className="text-lg text-(--color-text-secondary)">
                A collection of certificates that showcase my continuous
                learning journey in technology, software development, and modern
                tools.
              </p>
            </div>

            <Folder
              size={2}
              color="#9a95b2"
              className="flex justify-center items-center z-10 mt-60 mb-8 overflow-b-hidden"
              items={certificatesData.map((cert) => (
                <div
                  key={cert.id}
                  className="w-full h-full p-2 flex flex-col justify-center items-center text-center bg-(--color-card) rounded-[8px] shadow-md border border-(--color-text-secondary)/20 cursor-default"
                  onClick={() => setSelectedImage(cert.image)}
                >
                  <img
                    src={cert.image}
                    alt=""
                    className="w-[55%] cursor-pointer hover:scale-105 transition"
                  />
                  <div className="inline-flex items-center gap-1 text-[7px] text-[#ffffff] bg-(--color-accent) px-1.5 py-0.5 rounded-full mt-auto mb-1">
                    <span>{cert.title}</span>
                  </div>
                </div>
              ))}
            />

            <div className="text-(--color-accent) text-lg font-semibold mt-20">
              Click Above Folder to View All Certificates👆
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white text-2xl font-bold"
            >
              ✕
            </button>

            <img
              src={selectedImage}
              alt="Full View"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
