import SocialContact from "../../Common/social-contact/social";
import "./about.css";
function About() {
  return (
    <>
      <div className="about">
        <div className="about-top">
          <div className="about-info">
            Hello There ✋,I am,
            <br />
            <span className="info-name">Noman Nadeem</span>
            <br /> I want to work in New Tech.
          </div>
          <div className="about-photo">
            <img
              src={require("../../../assets/coding.png")}
              className="picture"
              alt=""
            />
          </div>
        </div>
        <SocialContact/>
      </div>
    </>
  );
}

export default About;
