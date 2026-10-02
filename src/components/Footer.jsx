import imf from "../img/hero.jpg.png";

export default function Footer() {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${imf})` }}>
      
      <div className="socials">
        <span>◉</span>
        <span>◎</span>
        <span>f</span>
        <span>♥</span>
      </div>

      <small>f&b © 2020</small>
    </footer>
  );
}