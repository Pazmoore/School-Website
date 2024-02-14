import Title from "../common/title/Title";
import "./hero.css";
const Hero = () => {
  return (
    <div>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Title
              subtitle="WELCOME TO ACADEMIA"
              title="Best Online Education"
            />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus nobis omnis, dicta ipsam nostrum similique iste,
              necessitatibus enim quaerat quae est corporis saepe vitae
              exercitationem, eos veniam quo explicabo atque?
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="marigin"></div>
    </div>
  );
};

export default Hero;
