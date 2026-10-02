export default function Header() {
  return (
    <header className="header">
      <div className="logo">F & B</div>

      <nav className="nav">
        <a href="#catalog">Каталог</a>
        <a href="#gallery">Галерея</a>
        <a href="#lab">О лаборатории</a>
        <a href="#contacts">Контакты</a>
      </nav>

      <div className="headerActions">
        <button className="iconButton">⌕</button>
        <button className="iconButton">↪</button>
      </div>
    </header>
  );
}