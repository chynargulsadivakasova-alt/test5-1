import Header from "./components/Header";
import Banner from "./components/Banner";
import Flowers from "./components/Flowers";
import Footer from "./components/Footer";
import ArtifactCard from "./ui/ArtifactCard";

import artifacts from "./img/artifacts.jpg";
import help from "./img/help.jpg";

const extraCards = [
  {
    number: "7.2",
    title: "Fig. 5 (moss)",
    text: "Новые природные материалы, собранные в единую коллекцию.",
    image: artifacts
  },
  {
    number: "5.1",
    title: "Fig. 6 (nature)",
    text: "Наблюдение и исследование природных форм продолжается.",
    image: artifacts
  }
];

export default function App() {
  return (
    <div className="page">
      <Header />
      <Banner />
      <Flowers />

      <section className="newArtifacts">
        <h2>Новые артефакты</h2>

        <div className="newGrid">
          <div className="newImage">
            <img src={artifacts} alt="Новые артефакты" />
          </div>

          <div className="news">
            <h3>Kurische Nehrung 24</h3>
            <p>
              Вот вам яркий пример современных тенденций — начало
              повсеместной работы по формированию позиции и управлению
              процессами.
            </p>
            <p>
              Есть над чем задуматься: представители современных социальных
              резервов своевременно верифицированы.
            </p>
            <a href="#contacts">Читать далее ⟶</a>
          </div>
        </div>
      </section>

      <section
        id="contacts"
        className="help"
        style={{ backgroundImage: `url(${help})` }}
      >
        <div className="helpOverlay" />

        <div className="helpContent">
          <h2>Помочь проекту</h2>
          <p>
            Равным образом, экономическая повестка сегодняшнего дня не даёт
            нам иного выбора, кроме определения прогресса профессионального
            сообщества. Как принято считать, элементы политического процесса
            рассмотрены исключительно в разрезе маркетинговых и финансовых
            предпосылок.
          </p>

          <form>
            <input placeholder="Имя" />
            <input type="email" placeholder="Email" />
            <button>Отправить</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}