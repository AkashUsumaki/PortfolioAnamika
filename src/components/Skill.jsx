import "./Skill.css";

function Skills() {
  const categories = [
    {
      title: "💻 Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "⚙️ Backend",
      skills: ["Node.js", "Express.js", "REST API"],
    },
    {
      title: "🗄️ Database",
      skills: ["MongoDB", "Mongoose"],
    },
    {
      title: "🤖 AI",
      skills: ["ChatGPT", "Prompt Engineering", "AI Websites"],
    },
    {
      title: "🎨 Design",
      skills: ["Figma", "Canva", "UI/UX"],
    },
    {
      title: "🛠️ Tools",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <section className="skills-section" id="skills">
      <h1 className="skills-title">Skills Network</h1>

      <div className="center-card">
        <h2>ANAMIKA R</h2>
        <p>MERN + AI Developer</p>
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