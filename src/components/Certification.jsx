import "./Certification.css";

function Certification() {
  const certificates = [
    {
      title: "Introduction to MS Excel",
      issuer: "MicroSoft",
      file: "/certificates/excel.pdf",
    },
    {
      title: "Python Essentials 1",
      issuer: "CISCO Networking Academy",
      file: "/certificates/python.pdf",
    },
    {
      title: "Python 3.4.3 Training",
      issuer: "Edupyramid",
      file: "/certificates/python1.pdf",
    },
    {
      title: "MongoDB Basics of Student",
      issuer: "MongoDB",
      file: "/certificates/mongodb.pdf",
    },
    {
      title: "Machine Learning Using Python",
      issuer: "Simplilearn",
      file: "/certificates/ml1.pdf",
    },
    {
      title: "C Programming",
      issuer: "Infosis Springboard",
      file: "/certificates/c.pdf",
    },
    {
      title: "Acquiring Data",
      issuer: "futureSkills Prime",
      file: "/certificates/data.pdf",
    },
    {
      title: "RDBMS PostgreSQL",
      issuer: "Edupyramids",
      file: "/certificates/postgresql.pdf",
    },
    {
      title: "Business Writing Skills",
      issuer: "Infosis Springboard",
      file: "/certificates/business-writing.pdf",
    },
    {
      title: "Website UI/UX Design using ChatGPT",
      issuer: "simplelearn",
      file: "/certificates/website-design.pdf",
    },
    {
      title: "The Art and Science of communication",
      issuer: "Infosis Springboard",
      file: "/certificates/communication.pdf",
    },
    {
      title: "Presentation Skills",
      issuer: "Infosis Springboard",
      file: "/certificates/presentation.pdf",
    },
    {
      title: "Pointers in C Programming",
      issuer: "Infosis Springboard",
      file: "/certificates/pointers.pdf",
    },
    {
      title: "The Team Management Master",
      issuer: "Udemy",
      file: "/certificates/team-management.pdf",
    },
    {
      title: "Human Resource Management",
      issuer: "Infosis Springboard",
      file: "/certificates/human-resources.pdf",
    },
    {
      title: "Html5 Training",
      issuer: "IIT Bombay Spoken Tutorial",
      file: "/certificates/html5.pdf",
    },
    {
      title: "PowerPoint presentation using AI",
      issuer: "Udemy",
      file: "/certificates/powerpoint.pdf",
    },
    {
      title: "Project on MS Word",
      issuer: "Infosis Springboard",
      file: "/certificates/word.pdf",
    },
    {
      title: "Cloud Security",
      issuer: "simplilearn",
      file: "/certificates/cloud-security.pdf",
    },
    {
      title: "Java Programming for Beginners",
      issuer: "simplilearn",
      file: "/certificates/java.pdf",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <h1 className="certification-title">
        Certifications
      </h1>

      <div className="certificate-container">
        {certificates.map((cert, index) => (
          <div className="certificate-card" key={index}>
            <div className="certificate-number">
              {String(index + 1).padStart(2, "0")}
            </div>

            <h2>{cert.title}</h2>

            <p>{cert.issuer}</p>

            <a
              href={cert.file}
              download
              className="download-btn"
            >
              Download Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certification;