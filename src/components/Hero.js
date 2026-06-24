import "./../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Where Little Dreams
          <br />
          Begin To Shine
        </h1>

        <p>
          We create a joyful learning environment where children
          explore, play, discover and build confidence every day.
          A perfect place for your child's bright future.
        </p>

        <div className="hero-btns">
          <button className="primary-btn">
            Enroll Now
          </button>

          <button className="secondary-btn">
            Learn More
          </button>
        </div>

        <div className="hero-boxes">
          <div className="box">
            <h3>500+</h3>
            <p>Happy Students</p>
          </div>

          <div className="box">
            <h3>20+</h3>
            <p>Expert Teachers</p>
          </div>

          <div className="box">
            <h3>100%</h3>
            <p>Safe Campus</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;