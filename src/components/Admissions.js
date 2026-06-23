import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./../styles/Admissions.css";

const Academics = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  return (
    <div className="academics-page">

      {/* Hero Section */}
      <section className="academics-hero">
        <div className="hero-overlay">

          <h1 data-aos="zoom-in">
            Inspiring Young Minds Through Meaningful Learning
          </h1>

          <p data-aos="fade-up">
            Creating curious learners through innovative,
            activity-based and child-centric education.
          </p>

          {/* <button data-aos="fade-up">
            Explore Programs
          </button> */}

        </div>
      </section>

      {/* Learning Approach */}

      <section className="learning-approach">

        <div className="section-title" data-aos="fade-up">
          <h2>Our Learning Approach</h2>

          <p>
            Building strong foundations through hands-on,
            engaging and joyful learning experiences.
          </p>
        </div>

        <div className="approach-grid">

          <div className="approach-card" data-aos="fade-right">
            <h3>Play Based Learning</h3>

            <p>
              Learning concepts through fun activities,
              games and exploration.
            </p>
          </div>

          <div className="approach-card" data-aos="zoom-in">
            <h3>Experiential Learning</h3>

            <p>
              Hands-on experiences that connect classroom
              learning with real life.
            </p>
          </div>

          <div className="approach-card" data-aos="fade-left">
            <h3>Holistic Development</h3>

            <p>
              Emotional, social, cognitive and physical
              growth together.
            </p>
          </div>

        </div>

      </section>

      {/* Programs */}

      <section className="programs-section">

        <div className="section-title" data-aos="fade-up">
          <h2>Programs Offered</h2>
        </div>

        <div className="program-grid">

          <div className="program-card" data-aos="flip-left">
            <h3>Play Group</h3>
            <p>Foundation through fun and exploration.</p>
          </div>

          <div className="program-card" data-aos="flip-up">
            <h3>Nursery</h3>
            <p>Early literacy and communication skills.</p>
          </div>

          <div className="program-card" data-aos="flip-up">
            <h3>Junior KG</h3>
            <p>Confidence building and structured learning.</p>
          </div>

          <div className="program-card" data-aos="flip-right">
            <h3>Senior KG</h3>
            <p>Preparing children for primary education.</p>
          </div>

        </div>

      </section>

      {/* Statistics */}

      <section className="academic-stats">

        <div className="stat-circle" data-aos="zoom-in">
          <div className="icon">🎓</div>
          <h2>2950+</h2>
          <p>Learning Milestones</p>
        </div>

        <div className="stat-circle" data-aos="zoom-in">
          <div className="icon">📚</div>
          <h2>356</h2>
          <p>Activity Sessions</p>
        </div>

        <div className="stat-circle" data-aos="zoom-in">
          <div className="icon">🚌</div>
          <h2>150</h2>
          <p>Learning Experiences</p>
        </div>

        <div className="stat-circle" data-aos="zoom-in">
          <div className="icon">👶</div>
          <h2>429</h2>
          <p>Child Focus Programs</p>
        </div>

      </section>

      {/* Activities */}

      <section className="activities-section">

        <div className="section-title" data-aos="fade-up">
          <h2>Academic Activities</h2>
        </div>

        <div className="activities-grid">

          <div className="activity-card" data-aos="fade-right">
            Storytelling
          </div>

          <div className="activity-card" data-aos="fade-up">
            Art & Craft
          </div>

          <div className="activity-card" data-aos="fade-left">
            Music & Dance
          </div>

          <div className="activity-card" data-aos="fade-right">
            Science Exploration
          </div>

          <div className="activity-card" data-aos="fade-up">
            Language Development
          </div>

          <div className="activity-card" data-aos="fade-left">
            Outdoor Learning
          </div>

        </div>

      </section>

      {/* Outcomes */}

      <section className="outcomes-section">

        <div className="section-title" data-aos="fade-up">
          <h2>Learning Outcomes</h2>
        </div>

        <div className="outcome-grid">

          <div className="outcome-card" data-aos="flip-left">
            Improved Communication Skills
          </div>

          <div className="outcome-card" data-aos="flip-right">
            Strong Social Development
          </div>

          <div className="outcome-card" data-aos="flip-left">
            Confidence & Leadership
          </div>

          <div className="outcome-card" data-aos="flip-right">
            School Readiness
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="academic-cta">

        <div className="cta-content" data-aos="zoom-in">

          <h2>
            Building Future Leaders Today
          </h2>

          <p>
            Join our innovative academic journey and give
            your child a strong foundation for lifelong success.
          </p>

          <button>
            Enquire Now
          </button>

        </div>

      </section>

    </div>
  );
};

export default Academics;