import {
  ArrowUp,
  ArrowUpRight,
  EnvelopeSimple,
  FileText,
  GithubLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import { portfolioData } from "../data";
import { Link } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const { person } = portfolioData;

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-layout">
        <div className="contact-copy">
          <span className="contact-eyebrow">Contact</span>
          <h2 id="contact-title">Have something<br />in mind?<br /><span>Let’s talk.</span></h2>
          <p>
            A project to build, a role to explore, or an idea to work through.
            Tell me what you have in mind.
          </p>
          <div className="contact-availability">
            <span aria-hidden="true" />{person.availability}
          </div>
          <div className="contact-location">
            <MapPin size={18} aria-hidden="true" /> Based in {person.location}
          </div>
        </div>

        <div className="contact-details">
          <a className="contact-email" href={`mailto:${person.email}`}>
            <span className="contact-email-top">
              <span className="contact-email-icon"><EnvelopeSimple size={28} weight="duotone" aria-hidden="true" /></span>
              <ArrowUpRight size={28} aria-hidden="true" />
            </span>
            <span className="contact-email-label">Start a conversation</span>
            <strong>{person.email}</strong>
            <span className="contact-email-hint">Write me an email</span>
          </a>
          <div className="contact-links">
            <a href={person.phoneHref}>
              <Phone size={22} aria-hidden="true" />
              <span><small>Call me</small><strong>{person.phone}</strong></span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a href={person.githubUrl} target="_blank" rel="noreferrer">
              <GithubLogo size={22} aria-hidden="true" />
              <span><small>Explore my code</small><strong>GitHub / ArrMannDev</strong></span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <a href={person.resumePdf} target="_blank" rel="noreferrer">
              <FileText size={22} aria-hidden="true" />
              <span><small>My experience at a glance</small><strong>View resume</strong></span>
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      <footer className="contact-footer">
        <span>© {new Date().getFullYear()} {person.shortName}</span>
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}>
          Back to top <ArrowUp size={17} aria-hidden="true" />
        </Link>
      </footer>
    </section>
  );
}
