import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";

const skills = [
  {
    skill: "Web Design",
    level: "beginner",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "Git & GitHub",
    level: "intermediate",
    color: "orange",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "blue",
  },
  {
    skill: "HTML + CSS",
    level: "intermediate",
    color: "blue",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="chris.png" alt="Chris Campos" />;
}

function Intro() {
  return (
    <div>
      <h1>Chris Campos</h1>
      <p>
        Experienced Front-End Software Engineer with a strong proficiency in
        React. Skilled in the development and maintenance of client-facing web
        applications, known for collaborative teamwork, and committed to
        optimizing code for superior performance and user experiences.
        Passionate about taking on new challenges and providing technical
        leadership, with a proven track record of delivering high-quality web
        solutions.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
export default App;
