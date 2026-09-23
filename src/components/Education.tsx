import { useEffect, useRef, useState } from "react";
import { CalendarBlank, GraduationCap, X } from "@phosphor-icons/react";
import { portfolioData } from "../data";
import Folder from "./Folder";

type Certificate = (typeof portfolioData.certificates)[number];

const certificateIdsByEducation: Record<string, string[]> = {
  "bsc-computer-science": [],
  "hnd-computing": ["level5-diploma", "level5-result-1", "level5-result-2"],
  "kmd-a-plus": ["a-plus"],
  "python-data-analysis": ["python-data-analysis"],
  "btec-it": ["level3-diploma", "level3-result"],
};

export default function Education() {
  const [openEducationId, setOpenEducationId] = useState<string | null>(null);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const previewRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = previewRef.current;
    if (!dialog) return;

    if (selectedCertificate && !dialog.open) {
      dialog.showModal();
    } else if (!selectedCertificate && dialog.open) {
      dialog.close();
    }
  }, [selectedCertificate]);

  return (
    <section
      id="education"
      className="education-section"
      aria-labelledby="education-title"
    >
      <header className="education-heading">
        <span>Education</span>
        <h2 id="education-title">
          A technical <strong>foundation.</strong>
        </h2>
        <p>
          My education has given me a strong foundation in software development,
          web technologies and information technology. 
        </p>
      </header>

      <div className="education-timeline">
        {portfolioData.education.map((education, index) => {
          const certificates = portfolioData.certificates.filter(
            (certificate) =>
              certificateIdsByEducation[education.id]?.includes(certificate.id),
          );
          const documentLabel =
            certificates.length === 1 ? "document" : "documents";

          return (
            <div
              className={`education-row ${index % 2 === 0 ? "left" : "right"}`}
              key={education.id}
            >
              <article className="education-card">
                <div className="education-card-meta">
                  <span className="education-icon" aria-hidden="true">
                    <GraduationCap size={25} weight="duotone" />
                  </span>
                  <span className="education-period">
                    <CalendarBlank size={18} weight="duotone" />
                    {education.period}
                  </span>
                </div>

                <h3>{education.title}</h3>
                <p className="education-institution">{education.institution}</p>
                <div className="education-card-divider" />

                <div className="education-documents">
                  <div>
                    <strong>Certificates &amp; results</strong>
                    <span>
                      {certificates.length > 0
                        ? `${certificates.length} ${documentLabel}`
                        : "Planned"}
                    </span>
                  </div>
                  <Folder
                    color="#9683fa"
                    size={0.86}
                    label={`certificates for ${education.title}`}
                    open={openEducationId === education.id}
                    onOpenChange={(nextOpen) =>
                      setOpenEducationId(nextOpen ? education.id : null)
                    }
                    items={certificates.map((certificate) => (
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        loading="lazy"
                        key={certificate.id}
                      />
                    ))}
                    onItemClick={(documentIndex) => {
                      const certificate = certificates[documentIndex];
                      if (certificate) {
                        setOpenEducationId(null);
                        setSelectedCertificate(certificate);
                      }
                    }}
                  />
                </div>
              </article>
              <span className="education-dot" aria-hidden="true" />
            </div>
          );
        })}
      </div>
      <dialog
        className="certificate-preview"
        ref={previewRef}
        aria-labelledby="certificate-preview-title"
        onClose={() => setSelectedCertificate(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            previewRef.current?.close();
          }
        }}
      >
        {selectedCertificate && (
          <div className="certificate-preview-content">
            <div className="certificate-preview-header">
              <h3 id="certificate-preview-title">
                {selectedCertificate.title}
              </h3>
              <button
                type="button"
                aria-label="Close certificate preview"
                onClick={() => previewRef.current?.close()}
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
            />
          </div>
        )}
      </dialog>
    </section>
  );
}
