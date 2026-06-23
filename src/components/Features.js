import "./../styles/Features.css";

function Features() {
  const data = [
    "Play-Based Learning",
    "Experiential Learning",
    "Skill-Focused Development",
    "Safe Environment"
  ];

  return (
    <section className="features">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <h3>{item}</h3>
        </div>
      ))}
    </section>
  );
}

export default Features;