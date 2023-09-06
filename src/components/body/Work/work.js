import React from "react";
import "./work.css";
import Separator from "../../Common/seperator/separator";
import {WorkData} from "../../Data/work";
import WorkCard from "./work-card";
function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Certificate</label>
      <div className="work-list">
        {data.map((item) => {
          return <WorkCard item={item} />;
        })}
      </div>
    </div>
  );  
}

export default Work;