import "./Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h1 className="contact-title">Contact Me</h1>

      <p className="contact-subtitle">
        Feel free to reach out for AI and machine learning opportunities,
        collaborations, or any web development services.
      </p>

      <div className="contact-container">

        <a
          href="mailto:radhakrishnaanamika890@gmail.com"
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />
          <div>
            <h3>Email(Personal)</h3>
            <p>radhakrishnaanamika890@gmail.com</p>
          </div>
        </a>
        
        <a
          href="mailto:717824I108@kce.ac.in"
          className="contact-card"
        >
          <FaEnvelope className="contact-icon" />
          <div>
            <h3>Email (Official)</h3>
            <p>717824I108@kce.ac.in</p>
          </div>
        </a>

        <a
          href="tel:+919677900816"
          className="contact-card"
        >
          <FaPhoneAlt className="contact-icon" />
          <div>
            <h3>Phone</h3>
            <p>+91 9677900816</p>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/anamika282006"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaLinkedin className="contact-icon" />
          <div>
            <h3>LinkedIn</h3>
            <p>linkedin.com/in/anamika282006</p>
          </div>
        </a>

        <a
          href="https://github.com/radhakrishnaanamika890-max"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub className="contact-icon" />
          <div>
            <h3>GitHub</h3>
            <p>github.com/radhakrishnaanamika890-max</p>
          </div>
        </a>
        <a
  href="https://x.com/anami_28bph2"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
  <FaXTwitter className="contact-icon" />
  <div>
    <h3>X (Twitter)</h3>
    <p>@anami_28bph2</p>
  </div>
</a>

      </div>
    </section>
  );
}

export default Contact;