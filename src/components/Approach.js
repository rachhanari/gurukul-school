import "./../styles/Approach.css";

import img1 from "../images/childern1.png";
import img2 from "../images/childern2.png";
import img3 from "../images/childern3.png";
import img4 from "../images/childern1.png";

function Approach() {
  const cards = [
    {
      image: img1,
      title: "Play-Based Learning",
      desc: "Children learn concepts naturally through fun, hands-on activities.",
      color: "pink-card",
    },
    {
      image: img2,
      title: "Experiential Learning",
      desc: "Learning by doing, exploring, and real-life experiences.",
      color: "yellow-card",
    },
    {
      image: img3,
      title: "Skill-Focused Development",
      desc: "Early focus on communication, creativity, confidence and life skills.",
      color: "green-card",
    },
    {
      image: img4,
      title: "Safe Environment",
      desc: "Child safety, care and emotional well-being are our top priorities.",
      color: "blue-card",
    },
  ];

  return (
    <section className="approach">
      <div className="heading">
        <h2>Our Best Approach</h2>
        <p>
          Where Play, Safety, Skills and Values Shape
          Confident Little Learners.
        </p>
      </div>

      <div className="approach-container">
        {cards.map((card, index) => (
          <div
            className={`approach-card ${card.color}`}
            key={index}
          >
            <div className="img-circle">
              <img src={card.image} alt={card.title} />
            </div>

            <h3>{card.title}</h3>
            <p>{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Approach;