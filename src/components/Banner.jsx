import hero from "../img/hero.jpg.png";

export default function Banner() {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="bannerOverlay" />

      <div className="bannerContent">
        <h1>
          Крупнейшая коллекция
          <br />
          природных артефактов
        </h1>

        <p>
          Являясь всего лишь частью общей картины, интерактивные прототипы,
          которые представляют собой яркий пример европейского типа
          политической и социальной культуры.
        </p>

        <a href="#catalog">
          Исследовать <span>⟶</span>
        </a>
      </div>
    </section>
  );
}