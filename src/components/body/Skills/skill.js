import "./skill.css";
import { SkillsData } from "../../Data/skills";
import Separator from "../../Common/seperator/separator";
import SkillCard from "./skill-card";
function Skills() {
  const data = SkillsData;
  return (
    <>
      <div className="skills">
        <Separator />
        <label className="section-title">Skills</label>
        <div className="skills-container">
          {data.map((item) => {
            return (
              <div className="skills-section">
                <label className="skills-section-title">{item.type}</label>
                <div className="skills-list">
                  {item.list.map((skill) => {
                    return <SkillCard skill={skill} />;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
