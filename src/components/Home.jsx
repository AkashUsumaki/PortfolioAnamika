import "./Home.css";
import profileImage from "../assets/akash.png";
import { TypeAnimation } from "react-type-animation";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, I'm</h3>

        <h1>Anamika R</h1>

        <TypeAnimation
          sequence={[
            "AI Developer",
            2000,
            "AI Specialist",
            2000,
            "UI/UX Designer",
            2000,
            "Passionate AI Enthusiast",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="typing-text"
        />

        <p>
          Aspiring AI & Data Science Engineer with expertise in Machine Learning, Deep Learning, NLP, Computer Vision, LLMs, 
and Data Analytics. Skilled in Python and modern AI technologies, with experience developing intelligent solutions for 
real-world problems through data-driven innovation. 
        </p>

        <div className="home-buttons">
          <a href="#contact" className="btn">
            Hire Me
          </a>

          <a href="/certificates/resume.pdf" className="btn btn-outline">
            Resume
          </a>
        </div>

      </div>

      <div className="home-image">
        <img src={profileImage} alt="Anamika" />
      </div>
    </section>
  );
}

export default Home;