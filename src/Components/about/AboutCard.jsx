import { homeAbout } from "../../dummydata";
import Title from "../common/title/Title";
import AWrapper from "./AWrapper";
import "./about.css";
import aboutcard from "../Assets/images/aboutcard-img.png";

const AboutCard = () => {
  return (
    <div>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src={aboutcard} alt="" />
          </div>
          <div className="right row">
            <Title
              className="text"
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning"
            />
            <div className="items">
              {homeAbout.map((val) => {
                return (
                  <div className="item flexSB">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                    <div className="text1">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <AWrapper />
    </div>
  );
};

export default AboutCard;
