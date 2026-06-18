import "./Education.css";

function Education() {
  return (
    <section className="education" id="education">
      <h1 className="section-title">Education</h1>

      <div className="timeline">

        <div className="timeline-item left">
          <div className="content">
            <h2>B.Tech Engineering</h2>
            <h3>Karpagam College of Engineering.</h3>
            <p>2024 - 2028</p>
            <p>CGPA: 8.85</p>
          </div>
        </div>

        <div className="timeline-item right">
          <div className="content">
            <h2>Higher Secondary (12th)</h2>
            <h3>Little Flower Matric Hr. Sec. School</h3>
            <p>2023 - 2024</p>
            <p>Percentage: 94%</p>
          </div>
        </div>

        <div className="timeline-item left">
          <div className="content">
            <h2>SSLC (10th)</h2>
            <h3>Little Flower Matric Hr. Sec. School</h3>
            <p>2021 - 2022</p>
            <p>Percentage: 92.6%</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;