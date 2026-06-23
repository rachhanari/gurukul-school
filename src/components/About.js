import React from "react";
import "./../styles/About.css";

const AboutUs = () => {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Gurukul International School</h1>
          <p>
            Creating confident, curious, and compassionate learners through
            play-based education and meaningful experiences.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section container">
        <div className="about-content">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              We provide a safe, nurturing, and joyful learning environment
              where children learn through play, exploration, and meaningful
              experiences.
            </p>

            <p>
              Our child-centric approach focuses on holistic development,
              academic readiness, life skills, values, and emotional
              well-being, ensuring a strong foundation for lifelong learning.
            </p>
          </div>

          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
              alt="Preschool"
            />
          </div>
        </div>
      </section>

      {/* Vision Mission */}
      <section className="vision-mission">
        <div className="container vm-grid">

          <div className="card">
            <h3>Our Vision</h3>
            <p>
              To create confident, curious, and compassionate learners by
              providing world-class early childhood education rooted in care,
              creativity, and values.
            </p>
          </div>

          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To offer high-quality, play-based learning experiences in a
              secure environment, nurturing every child’s intellectual,
              emotional, social, and physical development while partnering
              closely with parents.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="features-section container">
        <h2>Our Best Approach</h2>

        <div className="features-grid">

          <div className="feature-card">
            <h3>Play-Based Learning</h3>
            <p>
              Children learn concepts naturally through fun and hands-on
              activities.
            </p>
          </div>

          <div className="feature-card">
            <h3>Experiential Learning</h3>
            <p>
              Learning by doing, exploring, and real-life experiences.
            </p>
          </div>

          <div className="feature-card">
            <h3>Skill-Focused Development</h3>
            <p>
              Early focus on communication, creativity, confidence, and life
              skills.
            </p>
          </div>

          <div className="feature-card">
            <h3>Safe Environment</h3>
            <p>
              Child safety, care, and emotional well-being are our top
              priorities.
            </p>
          </div>

        </div>
      </section>

      {/* Activities */}
      <section className="activities">
        <div className="container">
          <h2>Unique Activities For Kids</h2>

          <div className="activities-grid">

            <div className="activity">
              <h4>Play-to-Learn Zones</h4>
            </div>

            <div className="activity">
              <h4>Role Play & Life Skills Lab</h4>
            </div>

            <div className="activity">
              <h4>Music, Movement & Yoga</h4>
            </div>

            <div className="activity">
              <h4>Creative Art & Expression</h4>
            </div>

            <div className="activity">
              <h4>Storytelling & Language Circle</h4>
            </div>

            <div className="activity">
              <h4>Safety Awareness Through Play</h4>
            </div>

            <div className="activity">
              <h4>Culture & Value Activities</h4>
            </div>

            <div className="activity">
              <h4>Nature & Sensory Exploration</h4>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;