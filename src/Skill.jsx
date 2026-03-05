import "./Skill.css";
import Button from "./button";

function Skill() {
  return (
    <div id="skill">
      <h1>Skills</h1>

      {/* Skill chips are intentionally simple and reusable */}
      <div className="skill-grid">
        <Button name="Data Structures & Algorithms" classN="skill-btn" />
        <Button name="Problem Solving" classN="skill-btn" />
        <Button name="Java" classN="skill-btn" />
        <Button name="Python" classN="skill-btn" />
        <Button name="JavaScript" classN="skill-btn" />
        <Button name="React.js" classN="skill-btn" />
        <Button name="Node.js" classN="skill-btn" />
        <Button name="Express.js" classN="skill-btn" />
        <Button name="MongoDB" classN="skill-btn" />
        <Button name="SQL" classN="skill-btn" />
        <Button name="Machine Learning" classN="skill-btn" />
        <Button name="Deep Learning" classN="skill-btn" />
      </div>
    </div>
  );
}

export default Skill;
