import "./Skill.css";

function Skills() {
  const categories = [
  {
    title: "💻 Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ],
  },

  {
    title: "⚙️ Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST API"
    ],
  },

  {
    title: "🗄️ Database",
    skills: [
      "MongoDB",
      "Mongoose",
      "PostgreSQL",
      "SQL",
      "DBMS"
    ],
  },

  {
    title: "🤖 AI & Machine Learning",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Computer Vision",
      "YOLO",
      "Roboflow",
      "LLMs",
      "RAG",
      "LangChain",
      "Vector Databases",
      "ChatGPT",
      "Prompt Engineering"
    ],
  },

  {
    title: "📊 Data Analytics",
    skills: [
      "Tableau",
      "Snowflake"
    ],
  },

  {
    title: "☁️ DevOps & Automation",
    skills: [
      "Docker",
      "Apache Kafka",
      "n8n"
    ],
  },

  {
    title: "📚 Core Computer Science",
    skills: [
      "Data Structures",
      "Design & Analysis of Algorithms",
      "Web Development"
    ],
  },

  {
    title: "🌐 Programming Languages",
    skills: [
      "Python",
      "Java",
      "JavaScript"
    ],
  },

  {
    title: "🎨 Design",
    skills: [
      "Figma",
      "Canva",
      "UI/UX"
    ],
  },

  {
    title: "🛠️ Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code"
    ],
  },
];

  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">Skills Network</h1>

      <div className="center-card">
        <h2>ANAMIKA R</h2>
        <p>AI Developer + Data Analyst</p>
      </div>

      <div className="skills-grid">
        {categories.map((item, index) => (
          <div className="skill-card" key={index}>
            <h3>{item.title}</h3>

            <div className="skill-tags">
              {item.skills.map((skill, i) => (
                <span key={i}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;