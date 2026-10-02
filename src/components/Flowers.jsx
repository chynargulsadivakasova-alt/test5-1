import ArtifactCard from "../ui/ArtifactCard";

import plant from "../img/img1.png";
import flower from "../img/img22.png";
import leaf from "../img/img3.png";
import wood from "../img/Layer 1 1.png";

const cards = [
  {
    number: "2.4",
    title: "Fig. 1 (plant)",
    text: "Имеется спорная точка зрения, гласящая примерно следующее: активно развивающиеся страны третьего мира своевременно верифицированы.",
    image: plant
  },
  {
    number: "3.1",
    title: "Fig. 2 (flower)",
    text: "Прежде всего, синтетическое тестирование влечет за собой процесс внедрения и модернизации условий.",
    image: flower
  },
  {
    number: "1.2",
    title: "Fig. 3 (leaf)",
    text: "Лишь непосредственные участники прогресса и технологизации будут в равной степени предоставлены сами себе для работы.",
    image: leaf
  },
  {
    number: "1.4",
    title: "Fig. 4 (wood)",
    text: "Базовый вектор развития не даёт нам иного выбора, кроме определения новых предложений.",
    image: wood
  }
];

export default function Flowers() {
  return (
    <section id="catalog" className="flowers">
      <div className="artifactList">
        {cards.map((card) => (
          <ArtifactCard
            key={card.title}
            number={card.number}
            title={card.title}
            text={card.text}
            image={card.image}
          />
        ))}
      </div>

      <div className="pagination">
        <button>←</button>
        <span>1 ИЗ 3</span>
        <button>→</button>
      </div>
    </section>
  );
}